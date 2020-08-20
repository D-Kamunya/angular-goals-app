import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Goal } from "../goal";
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  @Output() addGoal=new EventEmitter<Goal>()

  newGoal=new Goal(0,"","",new Date())

  submitGoal(){
    this.addGoal.emit(this.newGoal)
    this. newGoal=new Goal(0,"","",new Date())
  }

}
