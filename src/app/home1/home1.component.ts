import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Router } from '@angular/router';
import { Home1Service } from './home1.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  profile = "https://s3-alpha-sig.figma.com/img/a779/54ab/bdc5359c3b398aaed29b9aa4ca9d3b49?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCGcvuRUIe4tMcoGunvn~axpthmpfe~7HJ-Ep2lLE9YMFn03p~juHV0nfNr71xdheuMaZ6vMMrPsVore7CTsSZiq3l5UpHzB8QaBdSA~682iL-KQYUb4SIxiLg6-bgjDLON02dd-BFJ4e8gPXX3K576juUd8qS4qa7p1LcKD7Hv8nIxIA4nAw-3MHYkjiF~oF6LTi5invYYpKbn5uc~70vtFzp5B9rpHk-TuJsXRYr4jYKBft-GgRZyOWEzYZPu0ngGQQCtBeoyjfSA-omRoCWfdlTMA4D2JNQquEbzcU-UIhXsXE5Y13vQA5XPz7jiDm5dZIKDYNvUFFG52xiBf6g__"

  footerimage = "https://s3-alpha-sig.figma.com/img/c676/1b1e/e36fb872b09125832952d247e27c8e7e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1wesFswjDczDqSG03V38wHeI-zH9SBJyvnSZFkU9kaBmX-XXYdX43AQsuhM0NI8zyNjb8JvIp--wYBEe~n1CfkCwc3gb8CQW~cF5wYgg4XarX8p1ON68imZQJF1RvG0BeQR0OJ-nH0ev5HloZ5ypZ35J1UFV~dvtedMiM8Evl0QDKdzTttfODHSZNsCm4h1jalK~t8uxRGzKA43Je6aNo2bf12WNhOq~o5FPzulcNbF1ngUoH6nEySEjnO1NaP-yP1pNY93N37yLD3sdDFvUXiLBvXoMrnzD36XXiJrfIjxnmnbeUTPv0FSAkbaeEezaVBVuFSjE3LEcLDHSlu5tg__"
  logo = "https://s3-alpha-sig.figma.com/img/0e4f/3975/93d5b16382bf16776a56ef96938bf127?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inTS12YyD~UhaHR9uXzLBNLMG96Si-oY0kAvBwEjnEwG2hHkWscio9hKGo28VcK93MkB8ZRWswU8~lBc~-TkEfMTOYi7VX0QU74UfK3OYftXx2hU9BcAxkdrSpkgzuiadoVVq8IMjGc-Qrnq3R5td5SQfz57ZWN9rrAiodUGQsVGoH3z9RxWbEPtZ~V97S6lIyjF9OU3Q-o1ZnxPyeDk0a2A8kQae56sRMeAZ7-UmYHZpvUWVF~EQ9EPbdfyWcyM6FxGBJGhwvxx2SkY4L8qrECIuatMCIuqrPLQI6oCLkPKIpPG-dQ7ZbyenU3vdoyumIYfGdc9KZUeRfkBThCjlQ__"
  iconimg1 = "https://s3-alpha-sig.figma.com/img/e746/6a3f/4b57963fe0e7a61156b5a588c4d01db7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhwaEHpETx5zQIPDNoTnUcRnSQowlUtQ0hVMLGL28VhRkzU~woKoDLxJMq8WApVp8QrbXsQD1r8Dkfhs-AOZaJr21NEJjVO5TR7rI-q93NNGq7liXQqGpKMCBPRl5a4GcYkQFSaUo3LP4y285Wpdgur42PDjStz70xjLaWy859g~d1XhD9X6Wyss1-VCd9s24YerbqMW6b42HO~F4Do~IYJ6~OnneyQ0h4N10MOw2Oy06WLTtUl99Obxl3E0S5klEiJyWB4XBvrT1ruhpQIDZ1Qxk2FHnLmqV6IuQ28ODNQ0sqAkCG5cHEWsLw1Klyx-9vwn7YiK~EUsMDn0uKI1-w__"
  iconimg2 = "https://s3-alpha-sig.figma.com/img/b149/80a5/5f834dac6eed5054532dc13556d3da3b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UqxZt0GsAC-pSy3x86YcdJTCHYG7lx0J~PusOika7qbNB0Enj7qsaKkfi1hm9hgT5XfVwU7BZQXQwCATUGR5EVJ60YrRAdpMkfKS5pjv9Bkrbb~qOxGGHZjwdgLvAY0RpVY9WKB2oq9DoJZLh9CFbXl3wIXP7fImTL78YegJLAF9ZIahDLFndhEZC1914cr3V9tsdNhMW4lGHDZxEJC3g4r5GumCV4Cm0dG3uko03VaMF~0OicPN~LODdCqB0y2WCMQ6rJxh8T1T~mH~h83AlNXj7J5jwPiHOuG8MNpIKZ94Pix~LNHWVGwUrL0gnbUJe1~HVfpbbzSjzo1zPAsi0g__"
  iconimg3 = "https://s3-alpha-sig.figma.com/img/60c7/24bd/f5b50af42a8ccc49d474f1d6fcd52d5f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nrrJBqq0-fXhv~d74v18xnihdbHJlnSxW--18lQRLLqmhnd1DU4h6a50W0cANIlT~I2053~OTUXhZ~JFAwceRNvmH43FS~Bm65-VnZecqTJIWfukcQusy5gFw1OtT05vG0Kv~KeggNCvdleCvjqUXWyzmjYvROMZJU6QGEDZRrWNWCciJOGNPaL48-kSXaG8~imzFyJzhe1xDxeYuBf2TUfsd1zIrJYTCaDCVI3CDiXGN-Pg~s5CvbnuBctwxM9HXCFL8xJamZHCoPezSg9CZrxJv0vwcaihhhzv77-avIsuvEK7a6qmOo4PubouTUBvNkE5ihVpuwv8CStQGsb3Pw__"
  iconimg4 = "https://s3-alpha-sig.figma.com/img/846a/2cd7/2301426d5e7134138883a007e276684c?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flVs-06ljY~czJmMOBSmZMC2ftziZ0c3XgBKcB9Qdi9GyHknx5ByOQuuEGsSMIETZuMj4yoMosBgKzcwtffxMYA9YqFKju2TIaSauucTg3FSHk9nNq65-nvtWn7udw7KlMzDyupvJfd3Kq~j-yXUS~rdgLAGMgsv7eU8R11IycEE36t3V2IiU93ZJtHqy6tdxiFpq4jb62Y51jsAxGptahIj~uuvFiDF~f~7mCvmFs6tHV4gn7z0hbaTUV4ayU4g4LGQzwQOKxo3l6ed4INcwozrvw-yLpmcrGItkyoYyzVqJMgtMxvRyGGSlOIW-P7VslbAYSy8vCklFQhIknuNSg__"
  iconimg5 = "https://s3-alpha-sig.figma.com/img/0e4f/3975/93d5b16382bf16776a56ef96938bf127?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inTS12YyD~UhaHR9uXzLBNLMG96Si-oY0kAvBwEjnEwG2hHkWscio9hKGo28VcK93MkB8ZRWswU8~lBc~-TkEfMTOYi7VX0QU74UfK3OYftXx2hU9BcAxkdrSpkgzuiadoVVq8IMjGc-Qrnq3R5td5SQfz57ZWN9rrAiodUGQsVGoH3z9RxWbEPtZ~V97S6lIyjF9OU3Q-o1ZnxPyeDk0a2A8kQae56sRMeAZ7-UmYHZpvUWVF~EQ9EPbdfyWcyM6FxGBJGhwvxx2SkY4L8qrECIuatMCIuqrPLQI6oCLkPKIpPG-dQ7ZbyenU3vdoyumIYfGdc9KZUeRfkBThCjlQ__"
  dropdown1 = "https://s3-alpha-sig.figma.com/img/3d66/ba0f/3e4e922613954917626b1f7d7b72f16a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bUTtP7MTMcO92Kz41o1TKAcpn2mETf2H8IxawaRt9dsZ92OzgMxhW35G08~HOz72KMOZfR8ItPBQ-XfIMmSEv07OTE8U9G-gKgjqSCqPCSwKQ~UbF3wFeFCuzSFmppCaB3xSTzSCUSY1msfokiMIwch9hk~~g~YhxgTShmJXuBUoI18~OggWXFnm-bNOxVqIR5kypMABVY3R11aj8sn5ZYkOAp8wCe3aPqpWFyoqscKSzCQSS4hKBDAE3G3biv~RsQBXx6SP0-GNYaa4TiM0vtKCwmI48MsHug~wALkUM-mEJ6ubLD3~uNpRS2ldd3ZWcuLM06bGRqKUuJvLmuZaKQ__"
  dropdown2 = "https://s3-alpha-sig.figma.com/img/37e8/c4a0/9929aea2d7934d7b9f9d7a3e859b3d89?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYpLSs9ycBK4gpq9zNaJfgW2g9KX1iZ9HH6yN~J5~U~e~Y3c7T4FdQ5YFpZEXNCrnruHuZOhak9bwbTS9XPmB9rQ72QYd298bIVKjqGC7byMXA-dn8PoJfao7RoC8pWMyaZ6WPF-LIKFfaUl34MYz9nEinrWTgy6zQBMyOwrgJwJ4YrvNS9UezUYsKppvOQuQnJ2XzU~uShzmcugINggUoBUCe04K1QuVzHD6ZXPeesgOH5y~lrLr381pTDkro3V-1fXeyz8kZMPjWijPHFL70Uo-dEOqDCWHe66-gVkXU6jRmI0~CZP8pZycHFtS37nPXPKZlF6pVlh9ruppO3rRA__"
  dropdown3 = "https://s3-alpha-sig.figma.com/img/09e2/16b6/c5026d217c655dbf2e46ec83837576cd?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2xYAxuvkfsjDVi~NWIYIw0odjEhDl35JTUilGLUZrJnAsHEibWevJQZQIh6GrTXYtvUQ-7h2Xe~fNtNxySxzN3osbRVRNFLkZcpPeTsd0Dh-uYvwtzH3EFGoy1Lil21M9Gdz3KoJXCEF7mQvv-j74a9h5XvFBnUUYt-U1H2cMu2iYq5e7wea8KEey1c9ynEet-k5gP4s-OU3RdKEtbML7LNP9pY7tA0C2Ey3qxNgZjEAIAYIcVBDNVHQYA8AethAMTGwS0xnznQRZXyNKxaG3pOi6E1cYmtbisTPDNEY82Xa-GWuyJLqIELp-~BYID9GwbkBs4~5f9eFjQfQ0j-uw__"
  dropdown4 = "https://s3-alpha-sig.figma.com/img/4204/95ec/542bd335d987091c9dd01e6d358bdacc?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFqu6X9yQ~IT~-kh-dPQxCIIBAZslB6CucB0W1pwWTEIipnx8UklWICSrggOwVuvY29ofek865qj9K9uFmXVZMEuFstCNTdzZjz-MDpfgXy-4vJRRhgOE4bPkj3tkJe~DiLNaD9bb5Ytw67lhro3sx2aeO-fhtxw0Ec7eJJorTrkW-Y6-GHWPVQggZ6izf7IfNlyuZTip75Vp-QKLAeoWVnVwsqHbU2IzQu5ivcEngwa-0nSa9a8tXjzTznB6yJcq9PSE-L2NwL5pCPgf0EGeD9mYkFgsIvZ9It3yID5~5wuG-QDFID099SWmJJSjGoN-IQffUovAN-3u1RFfJGA7Q__"


  filteredDormitories: any[] = [];
  provinces: any[] = [];
  dormitoriesBKK: any = [];
  dormitories: any = [];
  isLoggedIn: boolean = false;
  userInfo: any = null;
  selectedCity: string = '';
  district: string = '';
  selectedProvince: string = 'all';
  isDropdownOpen: boolean = false;



  constructor(
    private rout: Router,
    private homeservice: Home1Service,
    private dialog: MatDialog
  ) {

  }
  ngOnInit(): void {
    this.getDormitories();
    this.getAllDormitories();
    this.checkToken()

  }

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent, {
      width: '432px',
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '432px',
    });
  }

  GotoSearch() {
    this.rout.navigate(['/search']); // This will navigate to the /search route
  }

  Gotodormitory() {

    this.rout.navigate(['/dormitory']);

  }

  selectCity(city: string) {
    this.selectedCity = city;
    if (city === 'bangkok') {
      this.getDormitories();
    } else if (city === 'chiangmai') {
      this.getDormitoriesch();
    }
  }

  getDormitories() {
    this.homeservice.getAllDormitories().subscribe(
      (data: any[]) => {
        this.dormitoriesBKK = null
        this.dormitoriesBKK = data.filter(dorm => dorm.province === 'กรุงเทพฯ').slice(0, 5);
      },
      (error) => {
        console.error('Error fetching dormitories', error);
      }
    );
  }
  filterDormitoriesByProvince() {
    this.homeservice.getAllDormitories().subscribe(
      (data: any[]) => {
        if (this.selectedProvince === 'all') {
          this.dormitories = data.filter(dorm => dorm.province != 'กรุงเทพฯ' && dorm.province != 'เชียงใหม่');
        } else {
          this.dormitories = data.filter(dorm => dorm.province != 'กรุงเทพฯ' && dorm.province != 'เชียงใหม่' && dorm.province == this.selectedProvince).slice(0, 5);
        }
      },
      (error) => {
        console.error('Error fetching dormitories', error);
      }
    );
  }


  getDormitoriesch() {
    this.homeservice.getAllDormitories().subscribe(
      (data: any[]) => {
        this.dormitoriesBKK = null
        this.dormitoriesBKK = data.filter(dorm => dorm.province === 'เชียงใหม่').slice(0, 4);

      },
      (error) => {
        console.error('Error fetching dormitories', error);
      }
    );
  }

  getAllDormitories() {
    this.homeservice.getAllDormitories().subscribe(
      (data: any[]) => {
        this.dormitories = data.filter(dorm => dorm.province != 'กรุงเทพฯ' && dorm.province != 'เชียงใหม่').slice(0, 5);
        this.getProvinces();
        // ควรจะเป็นเรทติ้งมากที่สุดค่อยมาแก้

      },
      (error) => {
        console.error('Error fetching dormitories', error);
      }
    );
  }

  // logDistrict() {
  //   this.homeservice.getAllDormitories().subscribe(
  //     (data: any[]) => {
  //       this.dormitories = null
  //       this.dormitories = data.filter(dorm => dorm.province === this.district).slice(0, 4);

  //     },
  //     (error) => {
  //       console.error('Error fetching dormitories', error);
  //     }
  //   );
  // }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  checkToken() {
    const token = localStorage.getItem('userToken'); // Adjust the key name if needed
    if (token) {
      this.isLoggedIn = true;
      this.userInfo = this.parseJwt(token);
      console.log(this.userInfo);
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

  getProvinces() {
    this.homeservice.getProvinces().subscribe(
      (data: any[]) => {
        this.provinces = data.filter(province => province != 'กรุงเทพฯ' && province != 'เชียงใหม่');
      },
      (error) => {
        console.error('Error fetching provinces', error);
      }
    );
  }

  gotoSetting() {
    this.rout.navigate(['/setting']);
  }

  gotosubmitdocuments() {
    this.rout.navigate(['/submitdocuments']);
  }

  gotodocumenttracking() {
    this.rout.navigate(['/documenttracking']);
  }





}










