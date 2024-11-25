import { Component, inject, OnInit, signal } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { sign } from 'chart.js/helpers';

@Component({
  selector: 'app-list-pie',
  imports: [],
  templateUrl: './list-pie.component.html',
  styleUrl: './list-pie.component.scss',
})
export class ListPieComponent implements OnInit {
  public readonly restService = inject(RestService);
  listDistribution = signal<any>([]);

  ngOnInit(): void {
    this.getDistribucionTraficoRed();
  }

  async getDistribucionTraficoRed() {
    try {
      const res = await this.restService
        .getDistribucionTraficoRed()
        .toPromise();

      this.listDistribution.set(res);
    } catch (error) {}
  }
}
