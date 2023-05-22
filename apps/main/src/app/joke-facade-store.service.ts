import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';



interface State {
    joke: string;
    error: HttpErrorResponse | null;
    loading: boolean;
    loaded: boolean
}

@Injectable({ providedIn: 'root' })
export class JokeFacadeStoreService {


    // private state: WritableSignal<State> = signal<State>({
    //     joke: '',
    //     error: null,
    //     loading: false,
    //     loaded: false
    //   });

    // constructor() {
    //     super({
    //        joke: '',
    //        error: null,
    //        loading: false,
    //        loaded: false 
    //     })
    // }
    
}   
