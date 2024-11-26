import { Component, inject, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import { RestService } from '../../../services/rest.service';
import { style } from '@angular/animations';
import { JsonService } from '../../../services/json.service';
@Component({
  selector: 'app-bar',
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit {
  public readonly restService = inject(RestService);
  public readonly jsonService = inject(JsonService);

  ngOnInit(): void {
    this.getPromedioandDesviacion();
  }

  async getPromedioandDesviacion() {
    try {
      const res = await this.jsonService.getPromedioandDesviacion().toPromise();
      this.grafics(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async grafics(series: any) {
    // Extraemos los datos del response
    const categories = series.map((item: any) => item.protocol); // Protocolos como categorías
    const promedioData = series.map((item: any) => parseFloat(item.promedio)); // Valores promedio
    const desviacionData = series.map((item: any) => parseFloat(item.desviacion_estandar)); // Valores desviación estándar

    const options = {
      series: [
        {
          name: "Promedio",
          color: "#31C48D",
          data: promedioData,
        },
        {
          name: "Desviación Estándar",
          data: desviacionData,
          color: "#F05252",
        }
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        type: "bar",
        stacked: true,
        width: "100%",
        height: 450,
        toolbar: {
          show: false,
        }
      },
      fill: {
        opacity: 1,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "100%",
          borderRadiusApplication: "end",
          borderRadius: 6,
          dataLabels: {
            position: "top",
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
        formatter: function (value:any) {
          return "$" + value
        }
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          //Formato de los labels en ms
          formatter: function(value: any) {
            return value + 'ms';
          }
          
        },
        categories: categories,
        title: {
          text : "Valores",
          style : {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xl font-normal fill-gray-500 dark:fill-gray-400'
          }
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          
        },
        title: {
          text : "Protocolos",
          style : {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xl font-normal fill-gray-500 dark:fill-gray-400'
          }
        },
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -20
        },
      },
      
    };

    if(document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("bar-chart"), options);
      chart.render();
    }
  }
}
