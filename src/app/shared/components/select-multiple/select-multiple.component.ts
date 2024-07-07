import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedService } from '../../../service/shared.service';
interface IOptions {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-select-multiple',
  standalone: true,
  // imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './select-multiple.component.html',
  styleUrl: './select-multiple.component.scss'
})
export class SelectMultipleComponent {

  sharedService: SharedService;

  constructor(sharedService: SharedService){
    this.sharedService = sharedService;
  }
  // TODO: implement multiple options selec to download mp3 and mp4 at the same time
  // food = new FormControl('');
  // optionsList: string[] = ['mp3', 'mp4']
  // food = new FormControl(['mp4']); // Inicialize com o valor desejado

  options: IOptions[] = [
    { value: 'mp3', viewValue: 'mp3' },
    { value: 'mp4', viewValue: 'mp4' }
  ];

  optionsControl = new FormControl(this.options[1].value);

  form = new FormGroup({
    option: this.optionsControl,
  })

  sendData(event: any): void {
    const selectedOption = event.value;
    this.sharedService.setFormat(selectedOption);
  }

  getSelectedData() {
    return this.optionsControl.value;
  }


}
