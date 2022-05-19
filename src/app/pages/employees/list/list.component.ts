import { EMPLOYEES, Employe } from './../../../shared/global/mock-employees';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  public employees: Employe[] = EMPLOYEES;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGoToInfo(item: any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  onGoToDelete(item: any): void {
    alert('Eliminado');
  }
}
