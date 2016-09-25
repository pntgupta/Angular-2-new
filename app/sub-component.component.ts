import {Component} from '@angular/core';
import {model_name} from './sub-component';
import {MocksData} from './mocks';

@Component({
	selector: 'mysub-app',
	templateUrl: 'app/sub-component.component.html',
	styleUrls: ['app/sub-component.component.css']
})
export class subcomponentComponent{
	obj : model_name[];
	
	ageSum(){
		var sum=0;
		for(var i=0;i<this.obj.length;i++){
			sum+=parseInt(this.obj[i].age);
		}
		return sum;
	}

	ngOnInit(){
		this.obj=MocksData;
	}
}