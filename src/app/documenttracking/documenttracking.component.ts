import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumenttrackingService } from './documenttracking.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-documenttracking',
  templateUrl: './documenttracking.component.html',
  styleUrls: ['./documenttracking.component.css']
})
export class DocumenttrackingComponent implements OnInit {
  
  userInfo: any = null;
  personId: number = 0;
  isLoggedIn: boolean = false;
  documents: any = [];
  documentsfilter: any = [];
  usertype: string = ''
  Search:string = ''
  searchText: string = '';
  

  constructor(private rout: Router, private documenttrackingService: DocumenttrackingService ) {}

  ngOnInit(): void {
    this.checkToken()
    
  }



  onSearchChange(): void {
    if (this.searchText === '') {
      console.log('No search text');
      
      this.documentsfilter = this.documents;
    } else {
      // ถ้ามีข้อความค้นหา ทำการกรองเอกสาร
      this.documentsfilter = this.documents.filter((document: any) =>
        document.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  

  Gotoupload(){
    this.rout.navigate(['/submitdocuments'])
  }

  checkToken() {
    const token = localStorage.getItem('userToken'); // Adjust the key name if needed
    if (token) {
      this.isLoggedIn = true;
      this.userInfo = this.parseJwt(token);
      this.personId = this.userInfo.id
      this.usertype = this.userInfo.userType
      if (this.userInfo.userType === 'user') {
        this.getDocument()
      } else if (this.userInfo.userType === 'admin') {
        this.documenttrackingService.getDocumentAll().subscribe(
          response => {
            this.documents = response.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
            this.documentsfilter = this.documents;
          }, error => {
            console.error('Error retrieving document', error);
          }
        );
      }
    } else {
      this.rout.navigate(['/home'])
    }
  }


  parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
    getDocument(): void {
    if (this.personId) {
      this.documenttrackingService.getDocumentById(this.personId).subscribe(
        response => {
          this.documents = response.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
          this.documentsfilter = this.documents;
          console.log('Document retrieved successfully', this.documents);
        },
        error => {
          console.error('Error retrieving document', error);
        }
      );
    } else {
      alert('กรุณากรอก ID ของเอกสาร');
    }
  }

  logout() {
    localStorage.clear();
    window.location.reload()
  }

  

  gotosubmitdocuments(documentId: number): void {
    // ใช้ Router.navigate เพื่อไปยังหน้าที่ต้องการพร้อมส่งค่า documentId
    this.rout.navigate(['/submitdocuments', documentId]);
  }

  editStatus(dormitoryId: number) {
    Swal.fire({
      title: 'กรุณาเลือกสถานะใหม่', // โปรดเลือกสถานะใหม่
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'ผ่าน',     // ปุ่มสำหรับสถานะ "ผ่าน"
      cancelButtonText: 'ไม่ผ่าน',    // ปุ่มสำหรับสถานะ "ไม่ผ่าน"
    }).then((result) => {
      let newStatus: string;
  
      if (result.isConfirmed) {
        newStatus = 'ผ่าน'; // สถานะเมื่อเลือก "ผ่าน"
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        newStatus = 'ไม่ผ่าน'; // สถานะเมื่อเลือก "ไม่ผ่าน"
      } else {
        // ถ้าไม่เลือกอะไรเลย ก็ไม่ทำอะไรต่อ
        return;
      }
  
      // เรียกใช้บริการเพื่ออัปเดตสถานะ
      this.documenttrackingService.updateDocumentStatus(dormitoryId, newStatus)
        .subscribe(
          response => {
            Swal.fire('สำเร็จ', 'อัปเดตสถานะเรียบร้อยแล้ว', 'success');
            console.log('Status updated successfully', response);
            window.location.reload();
          },
          error => {
            Swal.fire('ข้อผิดพลาด', 'เกิดข้อผิดพลาดในการอัปเดตสถานะ', 'error');
            console.error('Error updating status', error);
          }
        );
    });
  }
  
  delete(documentId: number) {
    const confirmDelete = window.confirm('คุณต้องการลบเอกสารนี้หรือไม่?ลบแล้วไม่สามารถนำกลับคืนมาได้');
    if (confirmDelete) {
      this.documenttrackingService.delete(documentId).subscribe(
        response => {
          window.location.reload()
        },
        error => {
          console.error('Error deleting document', error);
        }
      );
    } else {
      console.log('Document deletion cancelled');
    }
  }
  

  // Example method to get the status class based on the status

}
