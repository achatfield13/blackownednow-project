import { Component, OnInit } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  '6MUHF7YMDH',
  'd2499df3158b9e9bd3b79a7a3447a6b3'
)

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent implements OnInit {


  config = {
    indexName: 'blackownednow-list',
    searchClient
  }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
