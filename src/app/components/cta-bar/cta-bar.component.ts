import { Component } from '@angular/core';
import { BarComponent } from "./bar/bar.component";

@Component({
  selector: 'app-cta-bar',
  imports: [BarComponent],
  templateUrl: './cta-bar.component.html',
  styleUrl: './cta-bar.component.scss'
})
export class CtaBarComponent {

}
