import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  // create an array of objects
  salesPersonList: SalesPerson[] = [

    new SalesPerson("Shahinur","Rahman","shahin@gmail.com",50000),
    new SalesPerson("Warisha","Rahman","warisha@gmail.com",40000),
    new SalesPerson("Ayesha","Rahman","ayesha@gmail.com",90000),
    new SalesPerson("Tahsin","Rahman","tahsin@gmail.com",60000)
  ];

  constructor(){}

  ngOnInit(): void {
    
  }
}
