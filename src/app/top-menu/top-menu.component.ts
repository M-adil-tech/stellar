import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { LoginComponent } from 'app/login/login.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  public isModalVisible: boolean = false;

  public isSignupModalVisible: boolean = false;
  constructor(public modal: LoginComponent,
    private dialog: MatDialog) { }

  openModal() {
    this.modal.openModal();
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.isModalVisible = false;
  }



  openModalLogin(): void {
    this.dialog.open(LoginComponent, {
      width: '60%', // set the width as per your requirement

    });
  }
  




}
