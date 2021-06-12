import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class MockingService {

	private mocks: Set<string> = new Set();
	private obs: Observable<any>;

	constructor(private http: HttpClient) {
		this.obs = this.http.get(`assets/mocks/register.json`);
		this.obs.subscribe(
			(data: Array<string>) => {
				data.forEach(mockName => {
					this.mocks.add(mockName);
				});
			});
	}

	has(route: string): Observable<boolean> {
		if (this.mocks) {
			return of(this.mocks.has(route));
		}
		return this.obs.pipe(
			map(mocks => {
				const index = mocks.indexOf(route);
				return index >= 0 ? true : false;
			})
		);
	}

	public getJSON(filename: string): Observable<any> {
		return this.http.get(`assets/mocks/${filename}.json`).pipe(
			map(data => {			
				return {
					isValid: true,
					data
				};
			})
		);
	}
}
