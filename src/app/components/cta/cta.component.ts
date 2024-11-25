import { Component } from '@angular/core';
import { PieComponent } from './pie/pie.component';
import { ListPieComponent } from './list-pie/list-pie.component';

@Component({
  selector: 'app-cta',
  imports: [PieComponent, ListPieComponent],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {

}
