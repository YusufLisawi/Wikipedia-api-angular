import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>()
  term : string = '';

  onInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }

  onSubmit(event: Event) {
    event.preventDefault()
    this.submitted.emit(this.term);
  }
}
