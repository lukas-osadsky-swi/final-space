import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

	constructor(private readonly router: Router) { }

	public home(): void {
		this.router.navigate(['/home']);
	}

	public characters(): void {
		this.router.navigate(['/character']);
	}

	public episodes(): void {
		this.router.navigate(['/episode']);
	}

	public locations(): void {
		this.router.navigate(['/location']);
	}

}
