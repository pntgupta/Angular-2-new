import {MocksData} from './mocks';
import {Injectable} from '@angular/core';
import {model_name} from './sub-component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class localDataService{

	constructor(private http : Http){}

	getLocalData(){debugger;
		return this.http.get('app/data.json').map(response => <model_name[]> response.json().obj1);
	}
}