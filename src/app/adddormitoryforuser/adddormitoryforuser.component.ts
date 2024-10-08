import { Component, OnInit } from '@angular/core';
import { AdddormitoryforuserService } from './adddormitoryforuser.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adddormitoryforuser',
  templateUrl: './adddormitoryforuser.component.html',
  styleUrls: ['./adddormitoryforuser.component.css']
})
export class AdddormitoryforuserComponent implements OnInit {
  profile = "https://s3-alpha-sig.figma.com/img/a779/54ab/bdc5359c3b398aaed29b9aa4ca9d3b49?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCGcvuRUIe4tMcoGunvn~axpthmpfe~7HJ-Ep2lLE9YMFn03p~juHV0nfNr71xdheuMaZ6vMMrPsVore7CTsSZiq3l5UpHzB8QaBdSA~682iL-KQYUb4SIxiLg6-bgjDLON02dd-BFJ4e8gPXX3K576juUd8qS4qa7p1LcKD7Hv8nIxIA4nAw-3MHYkjiF~oF6LTi5invYYpKbn5uc~70vtFzp5B9rpHk-TuJsXRYr4jYKBft-GgRZyOWEzYZPu0ngGQQCtBeoyjfSA-omRoCWfdlTMA4D2JNQquEbzcU-UIhXsXE5Y13vQA5XPz7jiDm5dZIKDYNvUFFG52xiBf6g__"
  logo = "https://s3-alpha-sig.figma.com/img/0e4f/3975/93d5b16382bf16776a56ef96938bf127?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inTS12YyD~UhaHR9uXzLBNLMG96Si-oY0kAvBwEjnEwG2hHkWscio9hKGo28VcK93MkB8ZRWswU8~lBc~-TkEfMTOYi7VX0QU74UfK3OYftXx2hU9BcAxkdrSpkgzuiadoVVq8IMjGc-Qrnq3R5td5SQfz57ZWN9rrAiodUGQsVGoH3z9RxWbEPtZ~V97S6lIyjF9OU3Q-o1ZnxPyeDk0a2A8kQae56sRMeAZ7-UmYHZpvUWVF~EQ9EPbdfyWcyM6FxGBJGhwvxx2SkY4L8qrECIuatMCIuqrPLQI6oCLkPKIpPG-dQ7ZbyenU3vdoyumIYfGdc9KZUeRfkBThCjlQ__"
  dropdown1 = "https://s3-alpha-sig.figma.com/img/3d66/ba0f/3e4e922613954917626b1f7d7b72f16a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bUTtP7MTMcO92Kz41o1TKAcpn2mETf2H8IxawaRt9dsZ92OzgMxhW35G08~HOz72KMOZfR8ItPBQ-XfIMmSEv07OTE8U9G-gKgjqSCqPCSwKQ~UbF3wFeFCuzSFmppCaB3xSTzSCUSY1msfokiMIwch9hk~~g~YhxgTShmJXuBUoI18~OggWXFnm-bNOxVqIR5kypMABVY3R11aj8sn5ZYkOAp8wCe3aPqpWFyoqscKSzCQSS4hKBDAE3G3biv~RsQBXx6SP0-GNYaa4TiM0vtKCwmI48MsHug~wALkUM-mEJ6ubLD3~uNpRS2ldd3ZWcuLM06bGRqKUuJvLmuZaKQ__"
  dropdown2 = "https://s3-alpha-sig.figma.com/img/37e8/c4a0/9929aea2d7934d7b9f9d7a3e859b3d89?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYpLSs9ycBK4gpq9zNaJfgW2g9KX1iZ9HH6yN~J5~U~e~Y3c7T4FdQ5YFpZEXNCrnruHuZOhak9bwbTS9XPmB9rQ72QYd298bIVKjqGC7byMXA-dn8PoJfao7RoC8pWMyaZ6WPF-LIKFfaUl34MYz9nEinrWTgy6zQBMyOwrgJwJ4YrvNS9UezUYsKppvOQuQnJ2XzU~uShzmcugINggUoBUCe04K1QuVzHD6ZXPeesgOH5y~lrLr381pTDkro3V-1fXeyz8kZMPjWijPHFL70Uo-dEOqDCWHe66-gVkXU6jRmI0~CZP8pZycHFtS37nPXPKZlF6pVlh9ruppO3rRA__"
  dropdown3 = "https://s3-alpha-sig.figma.com/img/09e2/16b6/c5026d217c655dbf2e46ec83837576cd?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2xYAxuvkfsjDVi~NWIYIw0odjEhDl35JTUilGLUZrJnAsHEibWevJQZQIh6GrTXYtvUQ-7h2Xe~fNtNxySxzN3osbRVRNFLkZcpPeTsd0Dh-uYvwtzH3EFGoy1Lil21M9Gdz3KoJXCEF7mQvv-j74a9h5XvFBnUUYt-U1H2cMu2iYq5e7wea8KEey1c9ynEet-k5gP4s-OU3RdKEtbML7LNP9pY7tA0C2Ey3qxNgZjEAIAYIcVBDNVHQYA8AethAMTGwS0xnznQRZXyNKxaG3pOi6E1cYmtbisTPDNEY82Xa-GWuyJLqIELp-~BYID9GwbkBs4~5f9eFjQfQ0j-uw__"
  dropdown4 = "https://s3-alpha-sig.figma.com/img/4204/95ec/542bd335d987091c9dd01e6d358bdacc?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFqu6X9yQ~IT~-kh-dPQxCIIBAZslB6CucB0W1pwWTEIipnx8UklWICSrggOwVuvY29ofek865qj9K9uFmXVZMEuFstCNTdzZjz-MDpfgXy-4vJRRhgOE4bPkj3tkJe~DiLNaD9bb5Ytw67lhro3sx2aeO-fhtxw0Ec7eJJorTrkW-Y6-GHWPVQggZ6izf7IfNlyuZTip75Vp-QKLAeoWVnVwsqHbU2IzQu5ivcEngwa-0nSa9a8tXjzTznB6yJcq9PSE-L2NwL5pCPgf0EGeD9mYkFgsIvZ9It3yID5~5wuG-QDFID099SWmJJSjGoN-IQffUovAN-3u1RFfJGA7Q__"
  iconback = "https://cdn-icons-png.flaticon.com/512/3114/3114883.png"
  iconimg = "assets/img/imgsimage.png"
  icon1 = "https://s3-alpha-sig.figma.com/img/6648/b687/862c743c8299f0e450c6d62e8596a293?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4PPbHZT9j2Gz2HQ4oaGlN-WPfu9zD4owNzYdTBOEBgtRNDrbSGzmQa6GAx4vpC15~XiyACQ7XS1G70-MNUsBo7JzkrLmqjDhVOC92KdVIyTOLAGk930Q1HNnzuMiCSr-xFgwPDKfCOPaj3M27UEhAOUarOLK8A8sJXPxdsCIEGqXwE4hBKwNhacV1I1m~yiJn6uxNsBQcPDPsgpeL8w2tNAzrUENRk5E2LcYCoL2kY7fnTKpQR6NBdfyBMELVPEhI1iDovUZIhOeU6ylSRGpSjYz3FByFBNHsh9tFfAAiVOO0saXfzMHpTaSabm1ACrObvQ8obiTfVSv~sGaR0qBg__"
  icon2 = "https://s3-alpha-sig.figma.com/img/4a5c/6c1e/5dab94ddcbb97b2b94a1e49d24f82d85?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ntErWkApwnb7UQ07DrbTtoARmVfGdhC3ptBDeWQ2C3gw90lzRPgJtisCIRSG9kM63jM2M5WRiHuI4cAqL7AtHRYQAtiazka6wViXaabWT13H1kM-yekeNzFPjSVxg5Yg34TUFa-prcxCtFXL1oeCdL5mijpqGCdI-fe1ZJdDiKBVCuUaRoTb0FoAjPnCrqLfvSkRpvmRb7NFavmurXM9d2lLRxabVOcVUwXrMHEws5bZj1RKG4xj8PD739hQA9hbnpOl66ysOxdDevzd3-VqZd4xbeX0YUGsKvzPamOKrNqiDfT3bHJsyTie6ntnqBLI637tHDooYOv7E6u5t~ufyw__"
  images: string[] = [];
  fileUrls: File[] = [];
  imagesUrls: string[] = [];
  dormitoryForm: FormGroup;
  userInfo: any = null;
  pdfFiles: File[] = [];


  constructor(private adddormitory: AdddormitoryforuserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.dormitoryForm = this.fb.group({
      name: [''],
      subDistrict: [''],
      district: [''],
      province: [''],
      price : [],
      description: [''],
      furniture: [''],
      contact: ['']
    });
  }


  ngOnInit(): void {
    this.checkToken()
  }
  onFileSelected(event: any, index: number) {
    const selectedFile: File = event.target.files[0];
    if (selectedFile) {
      this.fileUrls[index] = selectedFile;
      this.images[index] = URL.createObjectURL(selectedFile);
      console.log(this.images);
      console.log(this.fileUrls);

    }
  }
  onPDFSelected(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.pdfFiles[index] = file; // เก็บไฟล์ PDF ใน array ตามตำแหน่ง index
    }
  }


  saveDormitory() {
    this.adddormitory.uploadFiles(this.fileUrls).subscribe((response: any) => {
      if (response) {
        const updatedDormitoryData = {
          ...this.dormitoryForm.value,
          price: Number(this.dormitoryForm.value.price),
          imageUrls: response.fileUrls,
          status : "รอการอนุมัติ",
          addedBy:{
            id: this.userInfo.id
          }
          
          
           // สมมติว่า response มี key ที่ชื่อว่า 'fileUrls'
        };
        console.log('Updated dormitory data:', updatedDormitoryData);
        this.adddormitory.createDormitory(updatedDormitoryData).subscribe(response => {
          console.log('Dormitory saved successfully');
          this.dormitoryForm.reset();
          this.fileUrls = [];
          this.images = [];
          Swal.fire({
            title: 'คำอธิบาย',
            text: 'หอพักของคุณจะแสดงก็ต่อเมื่อท่านเพิ่มเอกสาร',
            icon: 'warning',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/documenttracking']) // Refresh the page
            }
          });
          
        }, error => {
          Swal.fire('Failed', 'ตรวจสอบฟอร์มให้ครบถ้วน', 'error');
        });
      }
    }, error => {
      Swal.fire('Error', 'ไม่สามารถอัปโหลดไฟล์ภาพได้', 'error');
    });
    
  }

 


  gotodormitory() {
    this.router.navigate(['/dormitory'])
  }
  gotosubmitdocuments() {
    this.router.navigate(['/submitdocuments'])
  }
  gotohome() {
    this.router.navigate(['/home'])
  }


  checkToken() {
    const token = localStorage.getItem('userToken'); // Adjust the key name if needed
    if (token) {
      this.userInfo = this.parseJwt(token);
    } else {
      Swal.fire('Failed', 'กรุณาlogin', 'error');

      this.router.navigate(['/home'])
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

  logout() {
    localStorage.clear();
    window.location.reload()
  }


}


