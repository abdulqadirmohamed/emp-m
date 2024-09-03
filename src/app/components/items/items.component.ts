import { Component, inject, OnInit } from '@angular/core';
import { IItems } from '../../model/interface/role';
import { ItemsService } from '../../services/items/items.service';
import { NgFor } from '@angular/common';
import { Item } from '../../model/Item';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {

  itemList: Item[] = []
  isLoading: boolean = true;

  itemServices = inject(ItemsService)

  ngOnInit(): void {
    this.itemServices.getAllItems().subscribe((result) => {
      this.itemList = result.data
      this.isLoading = false
    })
  }

  deleteItem(id: number): void {
    if(confirm('Are you sure you want to delete this item?')){
      this.itemServices.deleteItem(id).subscribe({
        next: () =>{
          alert('Item deleted successfully!')
        },
        error: (err)=>{
          console.error('Deletion failed', err);
          alert('Error deleting item.');
        }
      })
    }
  }
}
