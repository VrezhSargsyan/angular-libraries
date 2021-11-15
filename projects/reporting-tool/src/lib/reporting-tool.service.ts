import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportingToolService {
  constructor() { }

  private logSomething(): void {
    console.log('Library is working !');
  }
}
