import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitdocumentsService } from './submitdocuments.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-submitdocuments',
  templateUrl: './submitdocuments.component.html',
  styleUrls: ['./submitdocuments.component.css']
})
export class SubmitdocumentsComponent implements OnInit {
  selectedFiles: File[] = [];
  isLoggedIn: boolean = false;
  userInfo: any = null;
  personId: number = 0;
  recipientName: string = '';
  documentTitle: string = '';
  typefile: string = '';
  contractUrl: string = '';
  receiptUrl: string = '';
  folioUrl: string = '';
  status: string = '';
  dormitoryId: number = 0;
  

  constructor(private rout: Router, private submitdocumentsService: SubmitdocumentsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.checkToken()
    this.getDormitoryIdFromRoute()
  }

  getDormitoryIdFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      this.dormitoryId = Number(params.get('id')); // ดึง id จาก URL และแปลงเป็น number
       // แสดงค่า id ที่ได้รับ
    });
  }


  checkToken() {
    const token = localStorage.getItem('userToken'); // Adjust the key name if needed
    if (token) {
      this.isLoggedIn = true;
      this.userInfo = this.parseJwt(token);

    } else {
      this.rout.navigate(['/home'])
    }
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.selectedFiles.push(selectedFile); 
      console.log(this.selectedFiles);
      // Store selected file in the array
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

 
  onSubmit(): void {
    if (this.selectedFiles.length == 3) {
      this.submitdocumentsService.uploadMultiplePdfs(this.selectedFiles).subscribe((pdfResponse: any) => {
        if (pdfResponse) {
          this.contractUrl = pdfResponse[0];
          this.receiptUrl = pdfResponse[1];
          this.folioUrl = pdfResponse[2];
          this.status = 'รอการอนุมัติ';

          // เรียก API สำหรับอัปเดต URLs
          this.submitdocumentsService.updateUrls(this.dormitoryId, this.contractUrl, this.receiptUrl, this.folioUrl, this.status).subscribe(
            (response) => {
              Swal.fire({
                title: 'อัพโหลด URLs สําเร็จ',
                text: 'กรุณารอการอนุมัติจากผู้ดูแลระบบ',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.rout.navigate(['/documenttracking']) // Refresh the page
                }
              });
            },
            (error) => {
              Swal.fire('Error', 'ไม่สามารถอัปเดต URLs ได้', 'error');
            }
          );
        }
      }, error => {
        Swal.fire('Error', 'ไม่สามารถอัปโหลดไฟล์ PDF ได้', 'error');
      });
    } else {
      Swal.fire('Error', 'เพิ่มไฟล์ไม่ครบ 3 ไฟล์', 'error');
    }
  }

  logout(){
    localStorage.clear();
    window.location.reload()
  }

}
