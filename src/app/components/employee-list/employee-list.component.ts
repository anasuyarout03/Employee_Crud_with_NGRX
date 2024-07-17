import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleleEmployee } from 'src/app/ngrx/actions/actions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: any = [];

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.subscribe((state: any) => {
      this.employees = state.employeesReducer;
    })
  }
  deleteEmp(id: any){
    let actionObj = deleleEmployee(id);
    this.store.dispatch(actionObj);
  }
}

