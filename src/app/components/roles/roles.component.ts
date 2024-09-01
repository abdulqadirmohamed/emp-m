import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { apiResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRole[] = []
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles() {
    this.http.get<apiResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles')
      .subscribe((res: apiResponseModel) => {
        this.roleList = res.data
      })
  }

}
