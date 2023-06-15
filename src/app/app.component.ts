import { AfterViewInit, Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { PoButtonModule, PoModalComponent } from '@po-ui/ng-components';

import { ProJsToAdvplService, ProAppConfigService, ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { AppService } from './app.service';
import { PoTableColumn } from '@po-ui/ng-components';


import Chart from 'chart.js/auto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild('modalRuptura', { static: true })
  @ViewChild('myChart')
  chartRef!: ElementRef;
  myChart!: Chart;

  modalRuptura!: PoModalComponent;
  
  columns: Array<PoTableColumn>=[];
  items: Array<any> = [];
  event: boolean = false;
  
  
  
  constructor(
    private proJsToAdvplService: ProJsToAdvplService,
    private proAppConfigService: ProAppConfigService,
    private appService: AppService
  ) {
    console.log(ElementRef)

  }

  changeEvent(event: string) {
    this.event = !this.event;
    console.log(this.event);
  }

  public onClick() {
    this.proAppConfigService.callAppClose(true);
  }
  click1(): void {
    this.proJsToAdvplService.jsToAdvpl('mensagemJavascript', 'Comando Javascript');
  }

  click2(): void {
    this.proJsToAdvplService.jsToAdvpl('receberProtheus', '');
  }
 public click3(evento:any): void {
    console.log(evento);
  }
  ngOnInit() {
    this.columns = this.appService.getColumns();
    this.items = this.appService.getItems();

  }
  

  ngAfterViewInit(): void {
    
    const ctx = this.chartRef.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3','Label 4', 'Label 5', 'Label 6', 'Label 7'],        
        datasets: [
          {
            label: 'Movimentação',
            data: [ 40, 35, 30,20,15,5],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Projeção',
            data: [ null,null,null,null,null,5,-5],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            borderDash: [5, 5]
          },
          {
            label: 'PR',
            data: [10, 10, 10, 10, 10,10,10],
            fill: true,
            backgroundColor: 'rgba(255, 255, 0, 0.4)',
            borderColor: 'transparent',
          },
          {
            label: 'ES',
            data: [20, 20, 20, 20, 20,20,20],
            fill: {value:10},
            backgroundColor: 'rgba(0, 128, 0, 0.4)',
            borderColor: 'transparent',
          },
        
          {
          label: 'Ruptura',
          data: [-10, -10, -10, -10, -10,-10,-10],
          fill: true,
          backgroundColor: 'rgba(255, 0, 0, 0.4)',
          borderColor: 'transparent',
        },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
