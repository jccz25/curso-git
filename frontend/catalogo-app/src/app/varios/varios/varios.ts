// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-varios',
//   imports: [],
//   templateUrl: './varios.html',
//   styleUrl: './varios.css',
// })
// export class Varios {}


// // import { Component, OnInit } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { ContinenteApi } from '../../continente/continente-api';

// // @Component({
// //   selector: 'app-varios',
// //   imports: [CommonModule, FormsModule],
// //   templateUrl: './varios.html',
// //   styleUrl: './varios.css'
// // })
// // export class Varios implements OnInit {

// //   continentes: any[] = [];
// //   continenteSeleccionado: number | null = null;

// //   constructor(private continenteApi: ContinenteApi) {}

// //   ngOnInit(): void {
// //     this.continenteApi.listar()
// //       .subscribe(data => {
// //         this.continentes = data;
// //         console.log('CONTINENTES:', data);
// //       });
// //   }
// // }

// // // import { Component, OnInit } from '@angular/core';
// // // import { CommonModule } from '@angular/common';
// // // import { FormsModule } from '@angular/forms';
// // // import { ContinenteApi } from '../../continente/continente-api';
// // // import { PaisApi } from '../../pais/pais-api';

// // // @Component({
// // //   selector: 'app-varios',
// // //   imports: [CommonModule, FormsModule],
// // //   templateUrl: './varios.html',
// // //   styleUrl: './varios.css'
// // // })
// // // export class Varios implements OnInit {

// // //   continentes: any[] = [];
// // //   paises: any[] = [];

// // //   continenteSeleccionado: number | null = null;

// // //   constructor(
// // //     private continenteApi: ContinenteApi,
// // //     private paisApi: PaisApi
// // //   ) {}

// // //   ngOnInit(): void {
// // //     this.continenteApi.listar()
// // //       .subscribe(data => this.continentes = data);
// // //   }

// // //   onContinenteChange() {
// // //     if (this.continenteSeleccionado) {

// // //       this.paisApi
// // //         .porContinente(this.continenteSeleccionado)
// // //         .subscribe(data => {
// // //           this.paises = data;
// // //           console.log('PAISES:', data);
// // //         });

// // //     } else {
// // //       this.paises = [];
// // //     }
// // //   }
// // // }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ContinenteApi } from '../../continente/continente-api';
import { PaisApi } from '../../pais/pais-api';

@Component({
  selector: 'app-varios',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './varios.html',
  styleUrl: './varios.css'
})
export class Varios implements OnInit {

  continentes: any[] = [];
  paises: any[] = [];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private continenteApi: ContinenteApi,
    private paisApi: PaisApi
  ) {
    this.form = this.fb.group({
      continente: [null],
      pais: [null]
    });
  }

  ngOnInit(): void {

    // ✅ cargar continentes
    this.continenteApi.listar()
      .subscribe(data => this.continentes = data);

    // ✅ escuchar cambios en continente
    this.form.get('continente')?.valueChanges
      .subscribe(id => {

        if (id) {
          this.paisApi.porContinente(id)
            .subscribe(data => this.paises = data);
        } else {
          this.paises = [];
        }

      });
  }

}