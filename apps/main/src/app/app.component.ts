import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getRandomJoke } from './joke-api.util';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  selector: 'df-root',
  template: `
  <pre>{{joke |  async }}</pre>
  
  `,
  styleUrls: [],
})
export class AppComponent {
  title = 'main';

  joke = getRandomJoke();
}
