import { Component } from '@angular/core';
import { ListLineComponent } from './list-line/list-line.component';
import { LineComponent } from './line/line.component';

@Component({
  selector: 'app-cta-line',
  imports: [ LineComponent],
  templateUrl: './cta-line.component.html',
  styleUrl: './cta-line.component.scss'
})
export class CtaLineComponent {

}
