import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExchangeService {

  BBDD = 'https://api.vatcomply.com/rates';

  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get(this.BBDD);
  }
}
