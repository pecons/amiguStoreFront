

//Servicio para el CRUD con el API.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MockingService } from './mocking.service';

@Injectable({providedIn: 'root'})
export class TransactionService {    

    constructor(
        private http: HttpClient,
        private mocks: MockingService
        ) { }

        sayHi(){
            return console.log("Hola soy el servicio de Transacciones.");
            }
    
        // -----------------EXAMPLE RETRIEVED FROM DEEPSARS--------------------------------
        // public read(route: string, data: any, params?: Params): Observable<any> {
        // 	return this.mocks.has(route).pipe(
        // 		mergeMap(has => {
        // 			if (has) {
        // 				return this.mocks.getJSON(route).pipe(map(result => result.data));
        // 			}
        // 			return this.send(route, 'read', data, params);
        // 		})
        // 	);
        // }
        //---------------------------------------------------------------------------------




    //Get {ObtenerLista, ObtenerDato}
    

    //Post {Crear Documento}    

    //Put {Actualizar Documento}

    //Delete {Actualizar Documento}
    
}



