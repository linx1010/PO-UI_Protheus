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
export class AppComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) modalRuptura!: PoModalComponent;
  @ViewChild('myChart',{static:false})
  chartRef!: ElementRef;
  myChart!: Chart;

  
  
  columns: Array<PoTableColumn>=[];
  items: Array<any> = [];
  cType: Array<any> = [];
  cGroup: Array<any> = [];
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
    let table = this.appService.getItems();
    this.items = table[0]['alerts'];
    console.log(this.items);
    this.cType = this.items.filter((point) => point.prediction === true).map((point) => point.value);

  }
  makeCType(){

  }
  makeCGroup(){

  }
  
  makeLabel(graphPoints:Array<any>){
    
    const formattedReferences = graphPoints.map((point) => {
      const reference = point.reference.substring(0, 7); // Obtém apenas os primeiros 7 caracteres (ano-mês)
      return reference;
    });
    return formattedReferences
  }


  makeProjection(graphPoints:Array<any>){
    let conection = this.makeData(graphPoints);
    let projectPoints = graphPoints.filter((point) => point.prediction === true).map((point) => point.value);
    //adiciona o ultimo elemento do data ao primeiro pra fazer a ligação entre os dois
    projectPoints = [conection[conection.length - 1], ...projectPoints];
    const nullArray = new Array(graphPoints.length - projectPoints.length).fill(null);
    const projArray = nullArray.concat(projectPoints);
    return projArray;
  }

  makeData(graphPoints:Array<any>){
    const filteredValues = graphPoints.filter((point) => point.prediction === false).map((point) => point.value);
    return filteredValues;
  }


  public makeChart(evento:any): void {
    // abre o modal
    this.modalRuptura.open();
    // console.log(evento);
    // Troca o titulo e prepara os dados para exibição
    this.chartTitle = evento.type.trim()+'>'+evento.description.trim()+'>'+evento.classification.trim();
    let labels =this.makeLabel(evento['graphPoints']);

    let projecion = this.makeProjection(evento['graphPoints']);
    let dataHIst = this.makeData(evento['graphPoints']);
    // Monta a mascara de Ponto de reposicao, estoque de seguranca e ruptura
    let aPR = new Array(labels.length).fill(evento['pr']);
    let aES = new Array(labels.length).fill(evento['es']);
    aPR = new Array(labels.length).fill(10);
    aES = new Array(labels.length).fill(5);
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
            fill: {value:aES[0]},
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
        {
          label: 'upper',
          data: [null,null,5,3,-10],
          fill: true,
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderColor: 'transparent',
        },
        {
          label: 'lower',
          data: [null,null,5,-2,-15],
          fill: true,
          backgroundColor: 'rgba(0, 0, 0, 1)',
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
