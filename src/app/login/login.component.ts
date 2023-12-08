import { Component, OnInit } from '@angular/core';
import { SignupComponent } from 'app/signup/signup.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isModalVisible: boolean = false;
  public isSignupModalVisible: boolean = false;

  email: any
  pass: any
  isChecked: boolean = false;


  constructor(public modal: SignupComponent,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModalSignup(): void {
    this.dialog.open(SignupComponent, {
      width: '60%', // set the width as per your requirement
    });
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    alert('ali')
    this.isModalVisible = false;
  }

  openSignupModal() {
    console.log('open signup')
    this.isModalVisible = false;

    this.isSignupModalVisible = true;
  }
  

}
