import { Component, inject, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts'
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-bar',
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit {
  public readonly restService = inject(RestService);

  ngOnInit(): void {
    
const options = {
  series: [
    {
      name: "Income",
      color: "#31C48D",
      data: ["1420", "1620", "1820", "1420", "1650", "2120"],
    },
    {
      name: "Expense",
      data: ["788", "810", "866", "788", "1100", "1200"],
      color: "#F05252",
    }
  ],
  chart: {
    sparkline: {
      enabled: false,
    },
    type: "bar",
    width: "100%",
    height: 400,
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
    formatter: function (value: any) {
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
      formatter: function(value: any) {
        return "$" + value
      }
    },
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
      }
    }
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
  
}

if(document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("bar-chart"), options);
  chart.render();
}

  }

}
