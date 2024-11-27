import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {
  protocols = [
    {
      name: 'QUIC',
      description: 'Promedio de <strong>1007.93 ms</strong> por paquete con desviación estándar de <strong>523.05</strong>.'
    },
    {
      name: 'TCP',
      description: 'Promedio de <strong>304.17 ms</strong>, siendo la base de múltiples protocolos modernos.'
    },
    {
      name: 'TLSv1.3',
      description: 'Uso creciente con un <strong>8.55%</strong>, mejorando la seguridad y el rendimiento.'
    },
    {
      name: 'HTTP',
      description: 'Uso residual (<strong>0.02%</strong>), reflejando la transición hacia tecnologías avanzadas.'
    }
  ];

  getProtocolDescription(protocol: { name: string, description: string }): string {
    return `<strong>${protocol.name}: </strong>${protocol.description}`;
  }
}
