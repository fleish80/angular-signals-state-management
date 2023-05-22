import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getRandomJoke } from './joke-api.util';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { JokeFacadeStoreService } from './joke-facade-store.service';

@Component({
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, NgIf],
  selector: 'df-root',
  template: `
  <span *ngIf="loading()">Loading...</span> 
  {{ joke() }} `,
  styleUrls: [],
})
export class AppComponent {
  title = 'main';

  #jokeFacadeStoreService = inject(JokeFacadeStoreService);
  joke = this.#jokeFacadeStoreService.joke;
  loading = this.#jokeFacadeStoreService.loading;
}
