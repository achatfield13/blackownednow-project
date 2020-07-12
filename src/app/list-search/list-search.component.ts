import { Component, OnInit } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  '6MUHF7YMDH',
  'a95833de04e344284572019efbfc4424'
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
