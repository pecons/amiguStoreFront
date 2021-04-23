

//Servicio para el CRUD con el API.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map, mergeMap } from 'rxjs/operators';
import { MockingService } from './mocking.service';

@Injectable({providedIn: 'root'})
export class TransactionService {   

    
    private URI :string = 'api';
    
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
        // 			return of(true);//this.send(route, 'read', data, params);
        // 		})
        // 	);
        // }
        //---------------------------------------------------------------------------------
        



    //Get {ObtenerLista, ObtenerDato}
    public get(route:string,params?:Params):Observable<any>{
        return this.mocks.has(route).pipe(
            mergeMap(has => {
                if (has) {
                    return this.mocks.getJSON(route).pipe(map(result => result.data));
                }
                return this.http.get(`${this.URI}/${route}`,params);
            })
        );
    }
    //Post {Crear Documento} 
    public post(route:string,data:any, params?: Params):Observable<any>{
        return this.mocks.has(route).pipe(
            mergeMap(has => {
                console.log('Existe un Mock ?',has);
                if (has) {                    
                    return this.mocks.getJSON(route).pipe(map(result => result.data));
                }else{
                return this.http.post(`${this.URI}/${route}`,data,params);
                }
            })
        );

    }   

    //Put {Actualizar Documento}

    //Delete {Actualizar Documento}
    
}



