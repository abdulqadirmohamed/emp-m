import { Component, inject, OnInit } from '@angular/core';
import { apiResponseModel, IDesignation } from '../../model/interface/role';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isloading:boolean = true;

  masterService = inject(MasterService)

  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((result)=>{
      this.designationList =  result.data;
      this.isloading = false
    }), console.error('network down');
    ;
    
  }
}
