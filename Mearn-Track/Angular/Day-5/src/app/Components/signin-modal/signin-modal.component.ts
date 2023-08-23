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
  constructor(
    private modalService: BsModalService,
    private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('[A-Za-z]{4,}')]],
      email: ['', [Validators.required]],
    });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  user: IUser = {} as IUser;
  addUser() {
    this.userService.signUpUser(this.user).subscribe({
      next: (user) => {
        this.submitted = true;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        setTimeout(() => {
          this.modalRef.hide();
        }, 3000);
      },
    });
  }
}
