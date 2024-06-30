import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormField, MatHint, MatLabel, MatInputModule,  } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatHint,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() submitSearch = new EventEmitter<string>();
  query: string = '';

  onSubmit() {
    this.submitSearch.emit(this.query);
  }
}
