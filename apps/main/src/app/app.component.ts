import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeFacadeStoreService } from './joke-facade-store.service';

@Component({
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, NgIf],
  selector: 'df-root',
  template: `

  <p *ngIf="this.loading(); else jokeTemplate">Loading...</p>
  <ng-template #jokeTemplate>
    <p *ngIf="!this.error()">{{this.joke()}}</p>
    <p *ngIf="this.error()">{{this.error()?.message}}</p>
  </ng-template>

  <button (click)="loadAnotherJoke()">Load Another Joke</button>

  `,
  styleUrls: [],
})
export class AppComponent {
  title = 'main';

  #jokeFacadeStoreService = inject(JokeFacadeStoreService);
  joke = this.#jokeFacadeStoreService.joke;
  loading = this.#jokeFacadeStoreService.loading;
  error = this.#jokeFacadeStoreService.error;

  loadAnotherJoke() {
    this.#jokeFacadeStoreService.loadJoke();
  }
}
