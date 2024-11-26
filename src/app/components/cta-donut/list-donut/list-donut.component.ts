import { Component, inject, signal } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { JsonService } from '../../../services/json.service';

@Component({
  selector: 'app-list-donut',
  imports: [],
  templateUrl: './list-donut.component.html',
  styleUrl: './list-donut.component.scss',
})
export class ListDonutComponent {
  public listDonut = signal<any>([]);
  public readonly restService = inject(RestService);
  public readonly jsonService = inject(JsonService);
  ngOnInit(): void {
    this.getPorcentajeProtocolos();
  }

  async getPorcentajeProtocolos() {
    try {
      const res = await this.jsonService.getPorcentajeProtocolos().toPromise();
      this.listDonut.set(res);
    } catch (error) {}
  }
}
