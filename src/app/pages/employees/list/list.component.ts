import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/shared/global/employee.interface';
import { EmployeesService } from 'src/app/shared/services/employees.service';

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

  public employees!: Employee[];
  constructor(
    private router: Router,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employee) => {
      this.employees = employee;
    });
  }

  onGoToEdit(employee: Employee): void {
    this.navigationExtras.state!.value = employee;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGoToInfo(employee: Employee): void {
    this.navigationExtras.state!.value = employee;
    this.router.navigate(['details'], this.navigationExtras);
  }
  async onGoToDelete(employee: Employee) {
    const response = await this.employeesService.deleteEmployee(employee);
    console.log(response);
  }
}
