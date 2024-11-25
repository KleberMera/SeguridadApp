import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
@Component({
  selector: 'app-vertical',
  imports: [],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss',
})
export class VerticalComponent implements OnInit {
  ngOnInit(): void {
    this.grafics();
  }

  async grafics() {
    const options = {
      series: [
        {
          name: 'Total Interacciones',
          data: [9469, 7322, 6146, 3421, 2334, 2250, 2192, 1317, 1248, 1224],
        },
      ],
      chart: {
        sparkline: {
          enabled: false,
        },
        type: 'bar',
        width: '100%',
        height: 400,
        toolbar: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '100%',
          borderRadiusApplication: 'end',
          borderRadius: 6,
          dataLabels: {
            position: 'top',
          },
        },
      },
      legend: {
        show: true,
        position: 'bottom',
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
        formatter: function (value: any) {
          return '$' + value;
        },
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        categories: [
          '200.125.225.209',
          '57.144.114.128',
          '181.113.160.76',
          '57.144.114.1',
          '142.250.78.100',
          '142.250.78.110',
          '10.0.2.15 (from 200.125.225.209)',
          '10.0.2.15 (from 57.144.114.128)',
          '10.0.2.15 (from 57.144.114.1)',
          '10.0.2.15 (from 181.113.160.76)',
        ],
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
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -20,
        },
      },
    };

    if (
      document.getElementById('bar-chart') &&
      typeof ApexCharts !== 'undefined'
    ) {
      const chart = new ApexCharts(
        document.getElementById('bar-chart3'),
        options
      );
      chart.render();
    }
  }
}
