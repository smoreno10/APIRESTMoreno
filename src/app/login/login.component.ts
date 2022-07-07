import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pass: [null, [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(res => {
      console.log(this.loginForm)
    })
  }

  onSubmit() {
    alert('Login valido:' + JSON.stringify(this.loginForm.value))
  }

  
}
