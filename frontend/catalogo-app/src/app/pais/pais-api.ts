// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class PaisApi {}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisApi {

  private apiUrl = 'http://localhost:8082/api/paises';

  constructor(private http: HttpClient) {}

  porContinente(idContinente: number) {
    return this.http.get<any[]>(
      `${this.apiUrl}/por-continente/${idContinente}`
    );
  }
}