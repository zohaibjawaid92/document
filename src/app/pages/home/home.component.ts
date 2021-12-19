import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { Component, OnInit, Output } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  first(){

      if($("#first-button").hasClass("collapsed")){
        $("#first-children").removeClass("collapsed");
        $("#first-button").removeClass("collapsed");
        $("#first-children").addClass("expanded");
        $("#first-button").addClass("expanded");
      }
      else{
        $("#first-children").removeClass("expanded");
        $("#first-button").removeClass("expanded");
        $("#first-children").addClass("collapsed");
        $("#first-button").addClass("collapsed");
      }

  }

  second(){

      if($("#second-button").hasClass("collapsed")){
        $("#second-children").removeClass("collapsed");
        $("#second-button").removeClass("collapsed");
        $("#second-children").addClass("expanded");
        $("#second-button").addClass("expanded");
      }
      else{
        $("#second-children").removeClass("expanded");
        $("#second-button").removeClass("expanded");
        $("#second-children").addClass("collapsed");
        $("#second-button").addClass("collapsed");
      }

  }
  constructor() { }

  ngOnInit(): void {



    // $("document").ready(function(){
    //   $("#hamburger").remove();
    // });
  }

}
