import { Component, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css'],
})
export class SigninModalComponent {
  modalRef!: BsModalRef;
  userForm!: FormGroup;
  submitted: boolean = false;
  user: IUser = {} as IUser;
  loggedIn: boolean = false;
  loggedInUser: IUser | null = null;

  constructor(
    private modalService: BsModalService,
    private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  login() {
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;

    this.userService.login(email, password).subscribe((success) => {
      if (success) {
        this.loggedIn = true;
        this.loggedInUser = JSON.parse(
          localStorage.getItem('loggedInUser') || '{}'
        );
        this.modalRef.hide();
      } else {
        this.email?.setErrors({ wrongCredentials: true });
        this.password?.setErrors({ wrongCredentials: true });
      }
    });
  }

  logout() {
    this.userService.logout();
    this.loggedIn = false;
    this.loggedInUser = null;
  }
}
