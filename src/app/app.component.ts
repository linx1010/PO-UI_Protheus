import { Component, OnInit, ViewChild } from '@angular/core';
import { PoButtonModule, PoModalComponent } from '@po-ui/ng-components';
import { PoMenuItem } from '@po-ui/ng-components';
import { ProJsToAdvplService, ProAppConfigService, ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { AppService } from './app.service';
import { PoTableColumn } from '@po-ui/ng-components';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService } from '@po-ui/ng-components';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('modalRuptura', { static: true })
  modalRuptura!: PoModalComponent;
  
  columns: Array<PoTableColumn>=[];
  items: Array<any> = [];
  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 60,
      gridLines: 4
    }
  };
  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'PR', data: [20, 20, 20, 20, 20, 20, 20], type: PoChartType.Area , color: 'green'},
    { label: 'ES', data: [10, 10, 10, 10, 10, 10, 10], type: PoChartType.Area, color: 'yellow' },
    { label: 'Ruptura', data: [-10, -10, -10, -10, -10, -10, -10], type: PoChartType.Area, color: 'red' },
    {
      label: 'Demanda',
      data: [50, 30, 20, 15, 0, -10, -15],
      type: PoChartType.Line,
      color: 'po-color-07'
    }
  ];
  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  constructor(
    private proJsToAdvplService: ProJsToAdvplService,
    private proAppConfigService: ProAppConfigService,
    private appService: AppService
  ) {}

  public onClick() {
    this.proAppConfigService.callAppClose(true);
  }
  click1(): void {
    this.proJsToAdvplService.jsToAdvpl('mensagemJavascript', 'Comando Javascript');
  }

  click2(): void {
    this.proJsToAdvplService.jsToAdvpl('receberProtheus', '');
  }
  click3(evento:any): void {
    console.log(evento);
    this.modalRuptura.open()
  }
  ngOnInit() {
    this.columns = this.appService.getColumns();
    this.items = this.appService.getItems();
    
    // this.chartAreaCategories = this.appService.getDataChart();
    // this.chartAreaSeries = this.appService.getXChart();
  }

}
