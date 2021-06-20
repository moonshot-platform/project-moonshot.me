import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TokenomicsService {
    private subject = new Subject<any>();
    private subject2 = new Subject<any>();

    doToggle( state: boolean ) { this.subject.next(state); }
    open() { this.subject.next(true); }
    close() { this.subject.next(false); }

    onToggle(): Observable<any> {
        return this.subject.asObservable();
    }
}