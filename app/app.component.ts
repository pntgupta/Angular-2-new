import {Component} from '@angular/core';


@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
				<mysub-app></mysub-app>`
})
export class AppComponent{
	title="Title from app.component";
}