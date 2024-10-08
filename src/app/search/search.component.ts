import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  logo = "https://s3-alpha-sig.figma.com/img/0e4f/3975/93d5b16382bf16776a56ef96938bf127?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inTS12YyD~UhaHR9uXzLBNLMG96Si-oY0kAvBwEjnEwG2hHkWscio9hKGo28VcK93MkB8ZRWswU8~lBc~-TkEfMTOYi7VX0QU74UfK3OYftXx2hU9BcAxkdrSpkgzuiadoVVq8IMjGc-Qrnq3R5td5SQfz57ZWN9rrAiodUGQsVGoH3z9RxWbEPtZ~V97S6lIyjF9OU3Q-o1ZnxPyeDk0a2A8kQae56sRMeAZ7-UmYHZpvUWVF~EQ9EPbdfyWcyM6FxGBJGhwvxx2SkY4L8qrECIuatMCIuqrPLQI6oCLkPKIpPG-dQ7ZbyenU3vdoyumIYfGdc9KZUeRfkBThCjlQ__"
  mainimg = "https://s3-alpha-sig.figma.com/img/683e/dc61/0c869f534b4a7425bf342c8b2079b7f9?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIGE623jwamvXQdX3Wi-R3PGz3nGCpOwR77e9Kt--tpill4SKxVlv-KBYVAfG6I-pixeajIrHHB6faW5d9zo8z5lpp5HA3TemiFZ40OLv1p0RRrvUV~rRJIZO87fw8RFQEpPvEuaQa-hd12C2-faNv0E1GzZQW9wgaih7zA9UBAv8jpPUrqn2BXXFf5147GnLkitoHHh0~NIM7HhChsP6HEl7DvAj1A~Z4b3WfjhAPqEA0~HMs6FSMRWBFJ4y0H97FABgGdOaR785qeivP0I4qS8MRaM1nmvz~65FVNWGGhlHv4HLmbWRZEwtKgGlG1iPKuWuS0aSZGkr4opoayKxQ__"
  profile = "https://s3-alpha-sig.figma.com/img/a779/54ab/bdc5359c3b398aaed29b9aa4ca9d3b49?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCGcvuRUIe4tMcoGunvn~axpthmpfe~7HJ-Ep2lLE9YMFn03p~juHV0nfNr71xdheuMaZ6vMMrPsVore7CTsSZiq3l5UpHzB8QaBdSA~682iL-KQYUb4SIxiLg6-bgjDLON02dd-BFJ4e8gPXX3K576juUd8qS4qa7p1LcKD7Hv8nIxIA4nAw-3MHYkjiF~oF6LTi5invYYpKbn5uc~70vtFzp5B9rpHk-TuJsXRYr4jYKBft-GgRZyOWEzYZPu0ngGQQCtBeoyjfSA-omRoCWfdlTMA4D2JNQquEbzcU-UIhXsXE5Y13vQA5XPz7jiDm5dZIKDYNvUFFG52xiBf6g__"
  dropdown1 = "https://s3-alpha-sig.figma.com/img/3d66/ba0f/3e4e922613954917626b1f7d7b72f16a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bUTtP7MTMcO92Kz41o1TKAcpn2mETf2H8IxawaRt9dsZ92OzgMxhW35G08~HOz72KMOZfR8ItPBQ-XfIMmSEv07OTE8U9G-gKgjqSCqPCSwKQ~UbF3wFeFCuzSFmppCaB3xSTzSCUSY1msfokiMIwch9hk~~g~YhxgTShmJXuBUoI18~OggWXFnm-bNOxVqIR5kypMABVY3R11aj8sn5ZYkOAp8wCe3aPqpWFyoqscKSzCQSS4hKBDAE3G3biv~RsQBXx6SP0-GNYaa4TiM0vtKCwmI48MsHug~wALkUM-mEJ6ubLD3~uNpRS2ldd3ZWcuLM06bGRqKUuJvLmuZaKQ__"
  dropdown2 = "https://s3-alpha-sig.figma.com/img/37e8/c4a0/9929aea2d7934d7b9f9d7a3e859b3d89?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYpLSs9ycBK4gpq9zNaJfgW2g9KX1iZ9HH6yN~J5~U~e~Y3c7T4FdQ5YFpZEXNCrnruHuZOhak9bwbTS9XPmB9rQ72QYd298bIVKjqGC7byMXA-dn8PoJfao7RoC8pWMyaZ6WPF-LIKFfaUl34MYz9nEinrWTgy6zQBMyOwrgJwJ4YrvNS9UezUYsKppvOQuQnJ2XzU~uShzmcugINggUoBUCe04K1QuVzHD6ZXPeesgOH5y~lrLr381pTDkro3V-1fXeyz8kZMPjWijPHFL70Uo-dEOqDCWHe66-gVkXU6jRmI0~CZP8pZycHFtS37nPXPKZlF6pVlh9ruppO3rRA__"
  dropdown3 = "https://s3-alpha-sig.figma.com/img/09e2/16b6/c5026d217c655dbf2e46ec83837576cd?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2xYAxuvkfsjDVi~NWIYIw0odjEhDl35JTUilGLUZrJnAsHEibWevJQZQIh6GrTXYtvUQ-7h2Xe~fNtNxySxzN3osbRVRNFLkZcpPeTsd0Dh-uYvwtzH3EFGoy1Lil21M9Gdz3KoJXCEF7mQvv-j74a9h5XvFBnUUYt-U1H2cMu2iYq5e7wea8KEey1c9ynEet-k5gP4s-OU3RdKEtbML7LNP9pY7tA0C2Ey3qxNgZjEAIAYIcVBDNVHQYA8AethAMTGwS0xnznQRZXyNKxaG3pOi6E1cYmtbisTPDNEY82Xa-GWuyJLqIELp-~BYID9GwbkBs4~5f9eFjQfQ0j-uw__"
  dropdown4 = "https://s3-alpha-sig.figma.com/img/4204/95ec/542bd335d987091c9dd01e6d358bdacc?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cFqu6X9yQ~IT~-kh-dPQxCIIBAZslB6CucB0W1pwWTEIipnx8UklWICSrggOwVuvY29ofek865qj9K9uFmXVZMEuFstCNTdzZjz-MDpfgXy-4vJRRhgOE4bPkj3tkJe~DiLNaD9bb5Ytw67lhro3sx2aeO-fhtxw0Ec7eJJorTrkW-Y6-GHWPVQggZ6izf7IfNlyuZTip75Vp-QKLAeoWVnVwsqHbU2IzQu5ivcEngwa-0nSa9a8tXjzTznB6yJcq9PSE-L2NwL5pCPgf0EGeD9mYkFgsIvZ9It3yID5~5wuG-QDFID099SWmJJSjGoN-IQffUovAN-3u1RFfJGA7Q__"
  location = "https://s3-alpha-sig.figma.com/img/ce72/613f/e3ae201e88873757e2125e7a6cc444f5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RqtYyZS-T32UptThEVjlRoeyj1x5OjEUs8c7SPSSU18cfsF4WFQX1l7~obXURC2XM7NgVvu9RIKaHu2n3oJ7~wObLIWK94OuP8ood-2Zv-r9tQHDMFkl9kinin68qXjcNas-Oi8KAs31o4ZrRZuL443~KBzTMZDIm2LPz2cQk2UcszP31oby-UyklQn2N2pkdYoMm3Sko3lLtpo1oigyrwgxDbbSb5KJ8png0JjVcYNJ0jS6ZFNs626Kv0OrOvFtDW3X0H5tH6iTnRvryaEWMuVxepdpcKSKflQQoymEOLYajDdLYRssyQOg94KkmOvTi5oVL8I0tjopUDx3I6SlwA__"
  preple = "https://s3-alpha-sig.figma.com/img/30ae/1aa1/317edda10be1a8060f9bf1c75f0c28ea?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEAJqtE0TfnWO4yTifjZsLWx9Nu4aXiFwtxD4GYZbAWndDlRKPzQ68adZRs7QM~WcgdptGOIBjRpzzhoX1hOBFxZvSAyI11NfBP~nfmEiQL4xs1RRB~H4w8N5Ot7c-NUBWnDGM1My8LfCJfkye5wvLd7qq~EIP0D-am2rx239ZLkI953OVTZaWF3NZ13ZWy902adjAu8WvY9P1k-I4myOZidGkR1-kh43U5h4Y~y33LINsvhKN5qwTq-~RWhHURgHeYZ6yQr2dss4E-nBAaBXV2HSaj3moe4MfP4E9wR-8-L6MeMJgEizKPNFFjdLyVniDOhWIIrMjpjHTR2DWBsQg__"
  catogory = "https://s3-alpha-sig.figma.com/img/ea6a/877d/883641e9fe1df0e19ae741345c29a518?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aKYhvjnF3vIy~0jTIR8ZN9hICM6qKO19ARc75ck~HdIXOCbkxel2yUpjhFrJmW2uN9eldUtk277fAfXe8Bs1QJQ56NTDRJNW-J1EjLLjlMfTeDFh1lKgRYfU3bDL3rQk2LX7AJWc8iqsxMyaFux1MozJuaic2SsfdKbdyOtEDo0whNXfvxMTaVYvLoS7zldg82zH3CFPl1DyS8HoUTYQZq7NaUqN-dZ4t~Tc4VOLGwYTC9vGiJqfElkzyyllrL3rxuR2U2-ze7rsfEJPRhS5dpCfB5tH0pCQnkoZiYoDplhm-2WWej35-r1HsOpnBQ2Lhf~2Q-Xx9s5GmNqLfwZyFw__"
  isLoggedIn: boolean = false;
  userInfo: any = null;
  
  selectedProvince: string = 'all';
  provinces: any[] = [];


  constructor(private router:Router,
              private searchService: SearchService
  ) {

  }

  ngOnInit(): void {
    this.checkToken()
    this.getProvinces()
  }

  logout() {
    localStorage.clear();
    window.location.reload()
  }

  checkToken() {
    const token = localStorage.getItem('userToken'); // Adjust the key name if needed
    if (token) {
      this.userInfo = this.parseJwt(token);
      this.isLoggedIn = true;
    }else{
      Swal.fire('warning', 'ยังไม่ได้ลงชื่อเข้าใช้', 'warning');
      
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

  filterDormitoriesByProvince() {
    if (this.selectedProvince) {
      // Navigate to the target page and pass the searchLocation as a query parameter
      this.router.navigate(['/dormitory'], { queryParams: { location: this.selectedProvince } });
    
    } else {
      alert('กรุณากรอกข้อมูล');
    }
  }

  getProvinces() {
    this.searchService.getProvinces().subscribe(
      (data: any[]) => {
        this.provinces = data;
      },
      (error) => {
        console.error('Error fetching provinces', error);
      }
    );
  }

}
