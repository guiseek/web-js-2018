import { User } from './../user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl }                 from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() save = new EventEmitter<any>();

  user: FormGroup = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }
  submit() {
    console.log('user: ', {user: this.user.value});
    this.save.emit(this.user.value);
  }

}
