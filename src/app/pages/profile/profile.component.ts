import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formGroup;

  constructor(
    private formBuilder: FormBuilder

  ) { 
    this.formGroup = this.formBuilder.group({
      name: '',
      email: '',
      terms: false
    });
  }
  onSubmit(formData : any) {
    console.log(formData);
    var name = formData['name'];
  }
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
  ngOnInit(): void {
  }

}
