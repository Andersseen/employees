import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  value: any;
  employeeFrom!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
  }

  ngOnInit(): void {
    this.initForm();
  }
  onSave() {
    console.log('Submit form');
  }
  private initForm(): void {
    this.employeeFrom = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
  onGoToBack(): void {
    this.router.navigate(['list']);
  }
}
