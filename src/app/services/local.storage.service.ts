import { Observable, Subject } from 'rxjs';

export class LocalStorageService {

    public readonly NSFW_KEY: string = 'nsfw';
    public readonly WALLET_KEY: string = 'wallet';
    public readonly ADDRESS_KEY: string = 'address';

    private subjectNSFW = new Subject<boolean>();

    set(key: string, val: any): void {
        localStorage.setItem(key, val);
    }

    get(key: string): any {
        return localStorage.getItem(key) ?? false;
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }

    setNSFW(state: boolean): void {
        localStorage.setItem(this.NSFW_KEY, JSON.stringify(state));
        this.subjectNSFW.next(state);
    }

    whenNSFWToggled(): Observable<any> {
        return this.subjectNSFW.asObservable();
    }

    getNSFW(): boolean {
        return JSON.parse(localStorage.getItem(this.NSFW_KEY)) ?? false;
    }

    setWallet(wallet: number): void {
        localStorage.setItem(this.WALLET_KEY, JSON.stringify(wallet));
    }

    getWallet(): number {
        return JSON.parse(localStorage.getItem(this.WALLET_KEY));
    }

    removeWallet(): void {
        localStorage.removeItem(this.WALLET_KEY);
    }

    setAddress(address: string): void {
        localStorage.setItem(this.ADDRESS_KEY, address);
    }

    getAddress(): string {
        return localStorage.getItem(this.ADDRESS_KEY);
    }

}