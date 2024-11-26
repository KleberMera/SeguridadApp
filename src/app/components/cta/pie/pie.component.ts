import { Component, inject, OnInit, signal } from '@angular/core';
import ApexCharts from 'apexcharts';
import { RestService } from '../../../services/rest.service';
import { JsonService } from '../../../services/json.service';

@Component({
  selector: 'app-pie',
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss',
})
export class PieComponent implements OnInit {
  private readonly restService = inject(RestService);
  private readonly jsonService = inject(JsonService);
  public labels = signal<any>([]);
  public series = signal<any>([]);

  ngOnInit(): void {
    this.getDistribucionTraficoRed();
  }

  async getDistribucionTraficoRed() {
    try {
      const res = await this.jsonService
        .getDistribucionTraficoRed()
        .toPromise();
      const resList = res.map((item: any) => item.protocol);
      const resSeries = res.map((item: any) => item.total);
      //Generar Colores random por el numero de protocolos
      const colors = Array.from({ length: resList.length }, () => {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 100%, 50%)`;
      });
      this.grafics(resList, resSeries, colors);
    } catch (error) {}
  }

  grafics(labels: any, series: any, colors: any) {
    const getChartOptions = () => {
      return {
        series: series,
        colors: colors,
        chart: {
          height: 420,
          width: '100%',
          type: 'pie',
        },
        stroke: {
          colors: ['white'],
          lineCap: '',
        },
        plotOptions: {
          pie: {
            labels: {
              show: true,
            },
            size: '100%',
            dataLabels: {
              offset: -25,
            },
          },
        },
        labels: labels,
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: 'Inter, sans-serif',
          },
        },
        legend: {
          position: 'bottom',
          fontFamily: 'Inter, sans-serif',
        },
        yaxis: {
          labels: {
            formatter: function (value: any) {
              return value + '%';
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value: any) {
              return value + '%';
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };
    };

    if (
      document.getElementById('pie-chart') &&
      typeof ApexCharts !== 'undefined'
    ) {
      const chart = new ApexCharts(
        document.getElementById('pie-chart'),
        getChartOptions()
      );
      chart.render();
    }
  }
}
