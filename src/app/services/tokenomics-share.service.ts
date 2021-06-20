import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TokenomicsShareService {
    private subject = new Subject<any>();
    public data: any;

    doShare( state: any ) { 
        this.data = state;
        this.subject.next(state); 
    }

    onReceive(): Observable<any> {
        return this.subject.asObservable();
    }
}