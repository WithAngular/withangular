import { Component, signal } from "@angular/core";
import {
	trigger,
	state,
	style,
	transition,
	animate,
} from "@angular/animations";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-carousel",
	imports: [MatCardModule, MatButtonModule, MatIconModule],
	templateUrl: "./carousel.component.html",
	styleUrl: "./carousel.component.scss",
	animations: [
		trigger("carouselAnimation", [
			state(
				"active",
				style({
					transform: "scale(1.2) translateX(0) translateZ(50px)",
					zIndex: 3,
				})
			),
			state(
				"next",
				style({
					transform: "scale(0.9) translateX(150px) translateZ(-20px)",
					zIndex: 2,
					opacity: 0.8,
				})
			),
			state(
				"prev",
				style({
					transform: "scale(0.9) translateX(-150px) translateZ(-20px)",
					zIndex: 2,
					opacity: 0.8,
				})
			),
			state(
				"hidden",
				style({
					transform: "scale(0.7) translateX(300px) translateZ(-40px)",
					zIndex: 1,
					opacity: 0.5,
				})
			),
			transition("* => *", animate("500ms ease-in-out")),
		]),
	],
})
export class CarouselComponent {
	cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
	activeIndex = signal(2); // Start with Card 3 in the center

	next() {
		this.activeIndex.set((this.activeIndex() + 1) % this.cards.length);
	}

	prev() {
		this.activeIndex.set(
			(this.activeIndex() - 1 + this.cards.length) % this.cards.length
		);
	}
}
