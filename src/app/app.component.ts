import { Component } from '@angular/core';
import { Goal } from './goal';

// Component annotation
// Metadata annotation, .... defines metadata properties related to the app component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Component definition class
// Used to define the logic of the AppComponent
export class AppComponent {
  title:'Angular Tut'
  // //display one goal
  // goal = 'Watch finding Nemo';
  // //display array of goals
  // // goals=[]
  // goals:string[]

  // constructor(){
  //   this.goals=['Watch finding Nemo', 'Buy cookies', 'Get new phone case'] 
  // }

  // //Create several goals using the goal blueprint class.
  // goals:Goal[]=[
  //   {id:1, name:'Watch finding Nemo'},
  //   {id:2,name:'Buy Cookies'},
  //   {id:3,name:'Get new Phone Case'},
  //   {id:4,name:'Get Dog Food'},
  //   {id:5,name:'Solve math homework'},
  //   {id:6,name:'Plot my world domination plan'} 
  // ]
}
