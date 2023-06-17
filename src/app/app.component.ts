import { AfterViewInit, Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { PoButtonModule, PoModalComponent } from '@po-ui/ng-components';

import { ProJsToAdvplService, ProAppConfigService, ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { AppService } from './app.service';
import { PoTableColumn } from '@po-ui/ng-components';


import Chart from 'chart.js/auto';
import { concat } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit, AfterViewInit {
export class AppComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) modalRuptura!: PoModalComponent;
  @ViewChild('myChart',{static:false})
  chartRef!: ElementRef;
  myChart!: Chart;

  
  
  columns: Array<PoTableColumn>=[];
  items: Array<any> = [];
  event: boolean = false;
  chartTitle!: string;
  
  
  
  constructor(
    private proJsToAdvplService: ProJsToAdvplService,
    private proAppConfigService: ProAppConfigService,
    private appService: AppService
  ) {
    // console.log(ElementRef)

  }

  changeEvent(event: string) {
    this.event = !this.event;
  }

  public onClick() {
    this.proAppConfigService.callAppClose(true);
  }
 
 
  ngOnInit() {
    this.columns = this.appService.getColumns();
    this.items = this.appService.getItems();

  }
  
  makeLabel(aHist=[], aProj=[]){
    let combinedArray = aHist.concat(aProj);
    // console.log(combinedArray);
    
    const labels = Array.from(new Set(combinedArray.map(dateString => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      return `${year}-${month.toString().padStart(2, '0')}`;
    })));
    
    // console.log(labels)
    return labels

  }


  makeProjection(value=null, size:number, array:Array<any>, firstElement:any){
    array.unshift(firstElement)
    size = size-array.length
    const nullArray = new Array(size).fill(null);
    const replicatedArray = nullArray.concat(array);
    // console.log(replicatedArray);
    return replicatedArray;
  }


  public makeChart(evento:any): void {
    // abre o modal
    this.modalRuptura.open();
    // Troca o titulo e prepara os dados para exibição
    this.chartTitle = evento.type.trim()+'>'+evento.description.trim()+'>'+evento.unity.trim();
    let labels =this.makeLabel(evento['label_hist'],evento['label_proj']);
    let projecion = this.makeProjection(null,labels.length,evento['data_proj'],evento['data_hist'][evento['data_hist'].length-1]);
    let dataHIst = evento['data_hist'];
    // Monta a mascara de Ponto de reposicao, estoque de seguranca e ruptura
    let aPR = new Array(labels.length).fill(evento['pr']);
    let aES = new Array(labels.length).fill(evento['es']);
    let aRup = new Array(labels.length).fill(projecion[projecion.length-1]);

    const ctx = this.chartRef.nativeElement.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,        
        datasets: [
          {
            label: 'Movimentação',
            data: dataHIst,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Projeção',
            data: projecion,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            borderDash: [5, 5]
          },
          {
            label: 'PR',
            data: aPR,
            fill: {value:evento['es']},
            backgroundColor: 'rgba(0, 128, 0, 0.3)',
            borderColor: 'transparent',
          },
          {
            label: 'ES',
            data: aES,
            fill: true,
            backgroundColor: 'rgba(255, 255, 0, 0.3)',
            borderColor: 'transparent',
          },
        
          {
          label: 'Ruptura',
          data: aRup,
          fill: true,
          backgroundColor: 'rgba(255, 0, 0, 0.3)',
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
