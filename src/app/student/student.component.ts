import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent {
  lname: string = "salma"; 
  @Input() childData: string = "child";
  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();

  save(newName: string): void {
    this.lname = newName;
    this.onNameChange.emit(this.lname);
  }
}