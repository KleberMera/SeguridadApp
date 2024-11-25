import { Component, inject, OnInit, signal } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-paquets',
  imports: [],
  templateUrl: './paquets.component.html',
  styleUrl: './paquets.component.scss',
})
export class PaquetsComponent implements OnInit {
  paquets = signal<string>('');
  public readonly restService = inject(RestService);

  ngOnInit(): void {
    this.getPaquetesTraficoRed();
  }

  async getPaquetesTraficoRed() {
    try {
      const res = await this.restService.getPaquetesTraficoRed().toPromise();
      this.paquets.set(res[0].total_paquetes);
    } catch (error) {}
  }
}
