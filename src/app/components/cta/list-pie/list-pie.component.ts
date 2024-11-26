import { Component, inject, OnInit, signal } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { sign } from 'chart.js/helpers';
import { JsonService } from '../../../services/json.service';

@Component({
  selector: 'app-list-pie',
  imports: [],
  templateUrl: './list-pie.component.html',
  styleUrl: './list-pie.component.scss',
})
export class ListPieComponent implements OnInit {
  public readonly restService = inject(RestService);
  public readonly jsonService = inject(JsonService);
  listDistribution = signal<any>([]);

  ngOnInit(): void {
    this.getDistribucionTraficoRed();
  }

  async getDistribucionTraficoRed() {
    try {
      const res = await this.jsonService
        .getDistribucionTraficoRed()
        .toPromise();

      this.listDistribution.set(res);
    } catch (error) {}
  }
}
