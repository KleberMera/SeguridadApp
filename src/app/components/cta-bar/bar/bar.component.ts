import { Component, inject, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import { RestService } from '../../../services/rest.service';
@Component({
  selector: 'app-bar',
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit {
  public readonly restService = inject(RestService);

  ngOnInit(): void {
    this.getPromedioandDesviacion();
  }

  async getPromedioandDesviacion() {
    try {
      const res = await this.restService.getPromedioandDesviacion().toPromise();
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

    // Configuración del gráfico
    const options = {
      series: [
        {
          name: 'Promedio',
          data: promedioData
        },
        {
          name: 'Desviación Estándar',
          data: desviacionData
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true // Habilitar barras apiladas
      },
      plotOptions: {
        bar: {
          horizontal: true, // Barras horizontales
        }
      },
      xaxis: {
        categories: categories, // Categorías para los protocolos
        title: {
          text: 'Valores'
        }
      },
      yaxis: {
        title: {
          text: 'Protocolos'
        }
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val.toFixed(2); // Mostrar con dos decimales
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetX: 40
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
}
