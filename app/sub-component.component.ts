import {Component} from '@angular/core';

@Component({
	selector: 'mysub-app',
	templateUrl: 'app/sub-component.component.html',
	styleUrls: ['app/sub-component.component.css']
})
export class subcomponentComponent{
	obj=[{
		name: "Punit",
		age: "22",
		comments: "Awesome!"
	},
	{
		name: "Prateek",
		age: "25",
		comments: "Study more!"
	},
	{
		name: "Manas",
		age: "24",
		comments: "Gotta gym!"
	}]

	ageSum(){
		var sum=0;
		for(var i=0;i<this.obj.length;i++){
			sum+=parseInt(this.obj[i].age);
		}
		return sum;
	}
}