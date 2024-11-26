import { Component, inject, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import { RestService } from '../../../services/rest.service';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../../services/json.service';


interface NetworkData {
  source: string;
  primer_paquete: string;
  ultimo_paquete: string;
  total: number;
}
@Component({
  selector: 'app-line',
  imports: [CommonModule,],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss',
})
export class LineComponent implements OnInit {
  public readonly restService = inject(RestService);
  public readonly jsonService = inject(JsonService);
  networkData: any[] = [];
  private chart: ApexCharts | null = null;

  ngOnInit(): void {
    this.getAnalisisOrigenTraficoRed();
  }

  getTotalPackets(): string {
    return this.networkData
      .reduce((sum, item) => sum + item.total, 0)
      .toLocaleString();
  }

  async getAnalisisOrigenTraficoRed() {
    try {
      const res = await this.jsonService.getAnalisisOrigenTraficoRed().toPromise();
      this.networkData = res;
      this.initializeChart(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  initializeChart(series: any[]) {
    // Destruir el gráfico existente si hay uno
    if (this.chart) {
      this.chart.destroy();
    }

    const colors = [
      '#1A56DB', '#7E3AF2', '#F97316', '#10B981', '#EF4444',
      '#3B82F6', '#8B5CF6', '#F59E0B', '#34D399', '#4B5563'
    ];

    // Preparar los datos para el gráfico
    const formattedData = series.map(item => ({
      x: item.source,
      y: item.total
    }));

    const options = {
      chart: {
        height: 450,
        type: 'line',
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        },
        sparkline: {
          enabled: false,
        },
      },
      series: [{
        name: 'Total Packets',
        color: "#31C48D",
        data: formattedData
      }],
     
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      grid: {
        show: true,
        borderColor: '#4287f5',
        strokeDashArray: 4,
        padding: {
          left: 10,
          right: 10
        }
      },
      xaxis: {
        type: 'category',
        categories: series.map(item => item.source),
        labels: {
          rotate: -45,
          style: {
            fontSize: '15px',
             cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
            fontFamily: 'Inter, sans-serif'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '15px',
             cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
            fontFamily: 'Inter, sans-serif'
          },
          formatter: function(value: number) {
            return value.toLocaleString();
          }
        }
      },
      tooltip: {
        y: {
          formatter: function(value: number) {
            return value.toLocaleString() + ' packets';
          }
        }
      }
    };

    const chartElement = document.querySelector('#line-chart');
    if (chartElement) {
      this.chart = new ApexCharts(chartElement, options);
      this.chart.render();
    } else {
      console.error('Elemento #line-chart no encontrado');
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
  
}
