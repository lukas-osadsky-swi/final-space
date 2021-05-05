import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Final Space';

	constructor(private readonly router: Router) { }

	public home(): void {
		this.router.navigate(['/home']);
	}

	public characters(): void {
		this.router.navigate(['/characters']);
	}

	public episodes(): void {
		this.router.navigate(['/episodes']);
	}

	public locations(): void {
		this.router.navigate(['/locations']);
	}
}
