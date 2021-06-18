import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TokenomicsToggleService {
    private subject = new Subject<any>();

    doToggle() {
        this.subject.next();
    }

    open() {
        this.subject.next(true);
    }

    close() {
        this.subject.next(false);
    }

    onToggle(): Observable<any> {
        return this.subject.asObservable();
    }
}