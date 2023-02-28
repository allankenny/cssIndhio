import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit {

  options = [
    'Não informado',
    'Matemática da 5ª série',
    'Matemática da 6ª série',
    'Matemática da 7ª série',
    'Matemática da 8ª série'
  ];

  menuHide: boolean = false;

  leftColExpand: boolean = false;

  isFilterExpanded: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  expandOrCollapse(){
    this.isFilterExpanded = !this.isFilterExpanded;
  }

  leftColToggle(){
    this.leftColExpand = !this.leftColExpand;
    let elem = document.getElementById('sidebar-left');
    if (elem && this.leftColExpand) {
      elem.classList.add('hide-side-bar');
      this.menuHide = true;
    }
    if (elem && !this.leftColExpand) {
      elem.classList.remove('hide-side-bar');
      this.menuHide = false;
    }

    let elemFilters = document.getElementById('container-filters');
    if (elemFilters && this.leftColExpand) {
      elemFilters.classList.add('display-none');
    }
    if (elemFilters && !this.leftColExpand) {
      elemFilters.classList.remove('display-none');
    }

    let elemHeader = document.getElementById('identity');
    if (elemHeader && this.leftColExpand) {
      elemHeader.classList.add('hide-side-bar');
    }
    if (elemHeader && !this.leftColExpand) {
      elemHeader.classList.remove('hide-side-bar');
    }



  }

}
