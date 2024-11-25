import { Component, inject } from '@angular/core';
import { RestService } from '../../services/rest.service';


import { PaquetsComponent } from '../paquets/paquets.component';
import { CtaComponent } from '../cta/cta.component';
import { CtaLineComponent } from "../cta-line/cta-line.component";
import { CtaBarComponent } from '../cta-bar/cta-bar.component';

@Component({
  selector: 'app-main',
  imports: [PaquetsComponent, CtaComponent, CtaLineComponent, CtaBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private readonly restService = inject(RestService);

  constructor() {}

  ngOnInit(): void {
    this.getAllTrafics();
  }

  async getAllTrafics() {
    const result = await this.restService.getAllTrafics().toPromise();
    console.log(result);
  }
}
