import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addEmployee } from 'src/app/ngrx/actions/actions';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  constructor(private store: Store){}

  addEmp(id: any,name: any,sal: any){
    let actionObj = addEmployee({id,name,sal});
    this.store.dispatch(actionObj);
  }

}
