import { Component } from '@angular/core';
import { DonutComponent } from "./donut/donut.component";
import { ListDonutComponent } from "./list-donut/list-donut.component";

@Component({
  selector: 'app-cta-donut',
  imports: [DonutComponent, ListDonutComponent],
  templateUrl: './cta-donut.component.html',
  styleUrl: './cta-donut.component.scss'
})
export class CtaDonutComponent {

}
