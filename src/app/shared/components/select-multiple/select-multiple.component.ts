import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-select-multiple',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './select-multiple.component.html',
  styleUrl: './select-multiple.component.scss'
})
export class SelectMultipleComponent {
  options = new FormControl('');
  optionsList: string[] = ['mp3', 'mp4']
}
