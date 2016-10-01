import {MocksData} from './mocks';
import {Injectable} from '@angular/core';
import {model_name} from './sub-component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';

@Injectable()
export class localDataService{

	constructor(private http : Http){}

	getLocalData(){
		return this.http.get('app/data.json').map(response => <model_name[]> response.json().obj1);
	}
}