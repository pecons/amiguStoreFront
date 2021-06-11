

//Servicio para el CRUD con el API.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map, mergeMap } from 'rxjs/operators';
import { MockingService } from './mocking.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({providedIn: 'root'})
export class TransactionService {   

    private lang: string = 'es';
    private URI :string = 'api';
    private _cartItems: number = 0;
    
    
    constructor(
        private http: HttpClient,
        private mocks: MockingService,
        private route: ActivatedRoute
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
                return this.mocks.getJSON(route).pipe(map(result => result.data));
                return this.http.get(`${this.URI}/${route}`,params);
            })
        );
    }
    //Post {Crear Documento} 
    public post(route:string,data:any, params?: Params):Observable<any>{
        return this.mocks.has(route).pipe(
            mergeMap(has => {
                if (has) {                    
                    return this.mocks.getJSON(route).pipe(map(result => result.data));
                }else{
                return this.mocks.getJSON(route).pipe(map(result => result.data));
                return this.http.post(`${this.URI}/${route}`,data,params);
                }
            })
        );

    }       

    //Put {Actualizar Documento}

    //Delete {Actualizar Documento}
    
    public getLang() : string{
        return this.lang
    }

    public setLang(val : string){
        this.lang = val;
    }

    public getcartItems() :number {
        if(localStorage.getItem('_cartItems') != null){
            const currentValue =  JSON.parse(localStorage.getItem('_cartItems') || '{}');          
            return parseInt(currentValue);            
        }else{
            return this._cartItems;
        }
        
    }
    public setcartItems(value: number) {
        this._cartItems = value;
        localStorage.setItem('_cartItems', JSON.stringify(this._cartItems));
    }
    
}



