import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/rest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  fname: any = ''
  lname: any = ''
  email: any = ''
  phone: any = ''
  msg: any = ''
  error_message: string = '';

  constructor(public restService: RestService) { }

  ngOnInit(): void {
  }


  submit() {


    this.email = this.email.trim()

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.email.trim() == '' || !re.test(this.email.trim())) {
      this.error_message = 'Please enter valid email address'
      return
    }

    if (this.fname != '' && this.lname != '' && this.email != '' && this.phone != '' && this.msg != '') {

      var data = {
        'f_name': this.fname,
        'l_name': this.lname,
        'email': this.email,
        'phone': this.phone,
        'message': this.msg

      }

      console.log('data----------', data)

      this.restService.postData(data).subscribe(response => {
        console.log('API Response:', response);

        if (response.status == "success") {
          this.clearForm()
          alert(response.msg)

        } else {
          alert(response.msg)

        }
      });
    } else {
      this.error_message = 'Kindly fill in all the required fields on the form.'
    }

  }


  clearForm() {
    this.fname = ''
    this.lname = ''
    this.email = ''
    this.phone = ''
    this.msg = ''
  }

}
