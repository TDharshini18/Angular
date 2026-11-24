import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-binding',
  styleUrl: './binding.css',
  templateUrl: './binding.html',
})
export class Binding {
  name:string="helloo interpolation"
  topic: string="Types of data binding"
  link: string="house.svg"
  username: string="User123"
  onButtonClick(){
    alert("Data Saved")
  }
  onChange(){
    alert("Country Changes")}
}
