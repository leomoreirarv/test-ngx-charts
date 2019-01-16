import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  view: any[] = []; // define o tamanho do gráfico, ficando zerado ele ajusta

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Color Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  multi: any[] = [
    {
      name: 'Cyan',
      series: [
        {
          name: 5,
          value: 2650,
          extra: {
            'value1': 'Hello',
            'value2': 'World'
          }
        },
        {
          name: 10,
          value: 2800,
          extra: {
            'value1': 'Hello',
            'value2': 'World'
          }
        },
        {
          name: 15,
          value: 2000,
          extra: {
            'value1': 'Hello',
            'value2': 'World'
          }
        },
        {
          name: 20,
          value: 2999,
          extra: {
            'value1': 'Hello',
            'value2': 'World'
          }
        }
      ]
    },
    {
      name: 'Yellow',
      series: [
        {
          name: 5,
          value: 2500,
          extra: {
            'value1': 'Hello',
            'value2': 'World'
          }
        },
        {
          name: 10,
          value: 3100,
          extra: {
            'value1': 'Hello',
            'value2': 'World'
          }
        },
        {
          name: 15,
          value: 2350,
          extra: {
            'value1': 'Hello',
            'value2': 'World'
          }
        },
        {
          name: 20,
          value: 2730,
          extra: {
            'value1': 'Hello',
            'value2': 'World'
          }
        }
      ]
    }
  ];

  onSelect(e) {
    console.log('=> ', e);
  }

}
