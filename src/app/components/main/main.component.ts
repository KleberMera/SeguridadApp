import { Component, inject } from '@angular/core';
import { RestService } from '../../services/rest.service';

import { PaquetsComponent } from '../paquets/paquets.component';
import { CtaComponent } from '../cta/cta.component';
import { CtaLineComponent } from '../cta-line/cta-line.component';
import { CtaBarComponent } from '../cta-bar/cta-bar.component';
import { CtaDonutComponent } from '../cta-donut/cta-donut.component';
import { CtaVerticalComponent } from '../cta-vertical/cta-vertical.component';
import { DataComponent } from '../data/data.component';
import { AnalisisComponent } from '../analisis/analisis.component';

@Component({
  selector: 'app-main',
  imports: [
    CtaComponent,
    CtaLineComponent,
    CtaBarComponent,
    CtaDonutComponent,
    CtaVerticalComponent,
    DataComponent,
    PaquetsComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private readonly restService = inject(RestService);

  constructor() {}
}
