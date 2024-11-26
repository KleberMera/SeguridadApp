import { Component, inject, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import { RestService } from '../../../services/rest.service';
import { JsonService } from '../../../services/json.service';
@Component({
  selector: 'app-donut',
  imports: [],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.scss',
})
export class DonutComponent implements OnInit {
  public readonly restService = inject(RestService);
  public readonly jsonService = inject(JsonService);
  ngOnInit(): void {
    this.getPorcentajeProtocolos();
  }
  async getPorcentajeProtocolos() {
    try {
      const res = await this.jsonService.getPorcentajeProtocolos().toPromise();
      console.log(res);
      this.grafics(res);
    } catch (error) {}
  }
  async grafics(data: any) {
    const protocols = data.map((item: any) => item.protocol);
    const porcentajes = data.map((item: any) => parseFloat(item.porcentaje));

    const getChartOptions = () => {
      return {
        series: porcentajes,
        colors: [
          '#1C64F2',
          '#16BDCA',
          '#FDBA8C',
          '#E74694',
          '#3B82F6',
          '#8B5CF6',
          '#F59E0B',
        ],
        chart: {
          height: 320,
          width: '100%',
          type: 'donut',
        },
        stroke: {
          colors: ['transparent'],
          lineCap: '',
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontFamily: 'Inter, sans-serif',
                  offsetY: 20,
                },
                total: {
                  showAlways: true,
                  show: true,
                  label: 'Total',
                  fontFamily: 'Inter, sans-serif',
                  formatter: function (w: any) {
                    const sum = w.globals.seriesTotals.reduce(
                      (a: any, b: any) => a + b,
                      0
                    );
                    return sum.toFixed(2) + '%';
                  },
                },
                value: {
                  show: true,
                  fontFamily: 'Inter, sans-serif',
                  offsetY: -20,
                  formatter: function (value: any) {
                    return parseFloat(value).toFixed(2) + '%';
                  },
                },
              },
              size: '80%',
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: protocols,
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: 'bottom',
          fontFamily: 'Inter, sans-serif',
        },
        yaxis: {
          labels: {
            formatter: function (value: any) {
              return parseFloat(value).toFixed(2) + '%';
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value: any) {
              return parseFloat(value).toFixed(2) + '%';
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
      document.getElementById('donut-chart') &&
      typeof ApexCharts !== 'undefined'
    ) {
      const chart = new ApexCharts(
        document.getElementById('donut-chart'),
        getChartOptions()
      );
      chart.render();
    }
  }
}
