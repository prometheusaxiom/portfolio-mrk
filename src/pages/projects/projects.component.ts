import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
  ;
import { OwlOptions } from 'ngx-owl-carousel-o';
export interface Project {
  overview: string,
  company: string,
  keyContributions: string[],
  techStack: string,
  imageUrl: string[],
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    // navSpeed: 700,
    // navText: ['<', '>'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },  // Show 2 images on medium screens
      1000: { items: 1 }  // Show 3 images on larger screens
    },
    // nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false
  };


  projects: Project[] = [
    {
      overview: 'Construction Defect Ticketing System',
      company: 'BlastAsia Inc.',
      keyContributions: [
        'Developed and integrated the API from the back-end to front-end',
        'Led the team in using GitHub Desktop',
        'Designed the entities used in the API',
        'Helped in developing the back-end side',
        'Helped in developing API controller for uploading blobs to Azure Blob Storage'
      ],
      techStack: 'Angular 8, TypeScript, HTML, CSS, Angular Material, C# .NET 6, ASP.NET Web API, Swagger API, Language Integrated Query, SQL Server and Azure Blob Storage',
      imageUrl: [
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Defect-Detection_Dashboard.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Defect-Detection_Edit-Defect.png'
      ]
    },
    {
      overview: 'Admin Management System for a Firmware Mobile Application',
      company: 'BlastAsia Inc.',
      keyContributions: [
        'Conducts code review before approving pull requests',
        'Created a standard code to follow for frontend development',
        'Pair programming with teammates which led to tasks being completed faster',
        'Frontend development and integration using Angular, HTML and SCSS',
        'Backend development using Microsoft SQL Server and ASP.NET Web API',
        'Implemented Azure Blob Storage',
        'Fixed web application\'s UI responsiveness'
      ],
      techStack: 'Angular 14, TypeScript, HTML, SCSS, Angular Material, C# .NET 5, ASP.NET Web API, Swagger API, Language Integrated Query, Dapper ORM, SQL Server, Azure Blob Storage, and Azure SQL Database',
      imageUrl: [
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Login.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Forgot Password.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Company Management.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Company Management - Add Company.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Company Management - Edit Company.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Firmware Management.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Firmware Management - Add Firmware.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Firmware Management - Edit Firmware.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/Advanced Energy - Firmware Management - Delete Firmware.png'
      ]
    },
    {
      overview: 'Lottery Game with Admin Management System',
      company: 'BlastAsia Inc.',
      keyContributions: [
        'Implemented different pages of admin module',
        'Implemented different pages of user module',
        'Tasks estimation',
      ],
      techStack: 'Angular 14, TypeScript, HTML, SCSS, Angular Material, C# .NET 5, ASP.NET Web API, Swagger API, Language Integrated Query, Dapper ORM, SQL Server, Azure Blob Storage, and Azure SQL Database',
      imageUrl: [
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Login.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_User_My-Wallet.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_User_My-Account.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_User_My-Account-Change-Password.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_KYC.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_KYC_Approval.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_KYC_Approval-Decline.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_Reports.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_Reports-Cash-In.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_Reports-Cash-Out.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_User-Management.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_User-Management_Add-User.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_User-Management_Edit-User.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_User-Management_Delete-User.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_User-Management_Reset-User.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_User-Management_My-Account.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EPCSO_Admin_User-Management_My-Account-Change-Password.png'
      ]
    },
    {
      overview: 'Sales Monitoring System',
      company: 'BlastAsia Inc.',
      keyContributions: [
        'Implemented user management module',
        'Implemented sku-discount management module',
        'Implemented distributor management list view and delete',
        'Implemented audit trail page',
        'Implemented sales order and sales invoice report page',
        'Tasks estimation',
      ],
      techStack: 'Angular 14, TypeScript, HTML, SCSS, Angular Material, C# .NET 5, ASP.NET Web API, Swagger API, Language Integrated Query, Dapper ORM, SQL Server, Azure Blob Storage, and Azure SQL Database',
      imageUrl: [
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_View.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_Add_User.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_Add_User_Cancel_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_Add_User_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_Edit_User.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_Edit_User_Cancel_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_Edit_User_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_Delete_User_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-User_Settings_Delete_User_Confirmation_Success.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_View.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_Add.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_Add_Cancel_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_Add_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_Edit.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_Edit_Cancel_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_Edit_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_Delete.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-SKU_Discount_Delete_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-Distributor_View.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-Distributor_Delete.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-Distributor_Delete_Confirmation.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-Audit_Trail_View.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-Sales_Invoice_Report_View.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-Sales_Invoice_Report_Column_Settings.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-Sales_Order_Report_View.png',
        'https://assetsportfoliomrk.blob.core.windows.net/assets/EON-Sales_Order_Report_Column_Settings.png',
      ]
    }
  ]


  constructor() {

  }

  ngOnInit(): void {

  }


  //! Deprecated method
  // toggleFullscreen(event: MouseEvent) {
  //   const elem = event.target as HTMLElement;
  //   if (!document.fullscreenElement) {
  //     if (elem.requestFullscreen) {
  //       elem.requestFullscreen();
  //     } else if ((elem as any).mozRequestFullScreen) { /* Firefox */
  //       (elem as any).mozRequestFullScreen();
  //     } else if ((elem as any).webkitRequestFullscreen) { /* Chrome, Safari & Opera */
  //       (elem as any).webkitRequestFullscreen();
  //     } else if ((elem as any).msRequestFullscreen) { /* IE/Edge */
  //       (elem as any).msRequestFullscreen();
  //     }
  //   } else {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen();
  //     } else if ((document as any).mozCancelFullScreen) { /* Firefox */
  //       (document as any).mozCancelFullScreen();
  //     } else if ((document as any).webkitExitFullscreen) { /* Chrome, Safari & Opera */
  //       (document as any).webkitExitFullscreen();
  //     } else if ((document as any).msExitFullscreen) { /* IE/Edge */
  //       (document as any).msExitFullscreen();
  //     }
  //   }
  // }

}
