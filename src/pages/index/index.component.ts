import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent implements OnInit {

  imageSrc: string = 'https://assetsportfoliomrk.blob.core.windows.net/assets/portfolio_dp.png';
  gmail: string = 'https://mail.google.com/mail/?view=cm&fs=1&to=markraydenm@gmail.com';
  linkedIn: string = 'https://www.linkedin.com/in/mark-rayden-mirafuente-508b631aa/';
  github: string = 'https://github.com/prometheusaxiom';
  microsoftCertificate: string = 'https://learn.microsoft.com/api/credentials/share/en-us/MarkMirafuente-0468/17D96DEDA39C9776?sharingId=42F6903E36225499';
  isLoading: boolean = true;

  constructor() {
  }

  ngOnInit(): void {

  }

  onImageLoad() {
    this.isLoading = false;
  }

  onImageError() {
    this.isLoading = false;
    this.imageSrc = 'https://assetsportfoliomrk.blob.core.windows.net/assets/alt_dp.png';
  }

  goToLink(link: string) {
    window.open(link, "_blank");
  }
}
