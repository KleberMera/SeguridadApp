import { Component, inject, signal } from '@angular/core';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-list-donut',
  imports: [],
  templateUrl: './list-donut.component.html',
  styleUrl: './list-donut.component.scss',
})
export class ListDonutComponent {
  public listDonut = signal<any>([]);
  public readonly restService = inject(RestService);
  ngOnInit(): void {
    this.getPorcentajeProtocolos();
  }

  async getPorcentajeProtocolos() {
    try {
      const res = await this.restService.getPorcentajeProtocolos().toPromise();
      this.listDonut.set(res);
    } catch (error) {}
  }
}
