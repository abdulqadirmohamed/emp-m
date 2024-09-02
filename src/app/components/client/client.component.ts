import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client()
  clientList: Client[] = []

  clientService = inject(ClientService)

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((result)=>{
      this.clientList = result.data;
    })
  }

  onSaveClient = () =>{
    alert('saved')
  }
}
