import { addDoc, deleteDoc } from '@firebase/firestore';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  setDoc,
  updateDoc,
  docData,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Employee } from '../global/employee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private firestore: Firestore) {}

  addEmployee(employee: Employee) {
    const employeeRef = collection(this.firestore, 'employees');
    return addDoc(employeeRef, employee);
  }

  modifyName(employee: Employee, name: string) {
    const employeeRef = doc(this.firestore, `employees/${employee.id}`);
    return updateDoc(employeeRef, { name: name });
  }
  modifyEmail(employee: Employee, email: string) {
    const employeeRef = doc(this.firestore, `employees/${employee.id}`);
    return updateDoc(employeeRef, { email: email });
  }
  modifyDate(employee: Employee, date: string) {
    const employeeRef = doc(this.firestore, `employees/${employee.id}`);
    return updateDoc(employeeRef, { date: date });
  }

  // updateEmployee(employee: Employee) {
  //   const employeeRef = doc(this.firestore, `employees/${employee.id}`);
  //   return setDoc(employeeRef, employee);
  // }

  // getEmployeeByID(id: string) {
  //   const employeeRef = doc(this.firestore, `employees/${id}`);
  //   return docData(employeeRef, { idField: 'id' }) as Observable<Employee>;
  // }

  getEmployees(): Observable<Employee[]> {
    const employeeRef = collection(this.firestore, 'employees');
    return collectionData(employeeRef, { idField: 'id' }) as Observable<
      Employee[]
    >;
  }

  deleteEmployee(employee: Employee) {
    const employeeRef = doc(this.firestore, `employees/${employee.id}`);
    console.log(employeeRef);
    return deleteDoc(employeeRef);
  }
}
