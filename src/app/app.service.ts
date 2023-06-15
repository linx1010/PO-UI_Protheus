import { Injectable } from '@angular/core';
import { PoChartSerie, PoChartType, PoTableColumn, PoTagType } from '@po-ui/ng-components';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }



  getXChart(){ 
    return['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21']
  };
  
  getDataChart(): Array<PoChartSerie> { 
    return [
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
  };



  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', width: '8%' },
      { property: 'description', label:'Descrição' },
      { property: 'type',label: 'Tipo' },
      { property: 'unity', label: 'Unidade'},
      { property: 'stock_quantity', label: 'Quantidade',type: 'number'}
    ];
  }
  getItems(): Array<any> {
    return [
      {
        code : ' COM00000000000000000000000011',
        description : 'PRODUTO PADRAO                ',
        type : 'PA',
        unity : 'UN',
        stock_quantity : 1
      },
      {
        mdmCounterForEntity: 0,
        mdmLastUpdated: "2023-06-08T12:38:47.739Z",
        mdmCounterForEntity__DATETIME__: "2023-06-08T12:38:47.739Z",
        mdmEntityType: "string",
        mdmApplicationIdMasterRecordId: "string",
        mdmCreated: "2023-06-08T12:38:47.739Z",
        mdmCrosswalk: "string",
        _ingestionDatetime: "2023-06-08T12:38:47.739Z",
        mdmTenantId: "string",
        mdmId: "string",
        mdmPreviousIds: "string",
        unity: "string",
        code: "string",
        desc_espec: "string",
        description: "string",
        id: "string",
        classification: "string",
        type: "string",
        stock_quantity: 0,
        branch: "string",
        company_group: "string",
        group: "string",
        stock_out_date: "2023-06-08T12:38:47.739Z"
      },
      {
        mdmCounterForEntity: 0,
        mdmLastUpdated: "2023-06-08T12:38:47.739Z",
        mdmCounterForEntity__DATETIME__: "2023-06-08T12:38:47.739Z",
        mdmEntityType: "string",
        mdmApplicationIdMasterRecordId: "string",
        mdmCreated: "2023-06-08T12:38:47.739Z",
        mdmCrosswalk: "string",
        _ingestionDatetime: "2023-06-08T12:38:47.739Z",
        mdmTenantId: "string",
        mdmId: "string",
        mdmPreviousIds: "string",
        unity: "string",
        code: "string",
        desc_espec: "string",
        description: "string",
        id: "string",
        classification: "string",
        type: "string",
        stock_quantity: 0,
        branch: "string",
        company_group: "string",
        group: "string",
        stock_out_date: "2023-06-08T12:38:47.739Z"
      },
      {
        mdmCounterForEntity: 0,
        mdmLastUpdated: "2023-06-08T12:38:47.739Z",
        mdmCounterForEntity__DATETIME__: "2023-06-08T12:38:47.739Z",
        mdmEntityType: "string",
        mdmApplicationIdMasterRecordId: "string",
        mdmCreated: "2023-06-08T12:38:47.739Z",
        mdmCrosswalk: "string",
        _ingestionDatetime: "2023-06-08T12:38:47.739Z",
        mdmTenantId: "string",
        mdmId: "string",
        mdmPreviousIds: "string",
        unity: "string",
        code: "string",
        desc_espec: "string",
        description: "string",
        id: "string",
        classification: "string",
        type: "string",
        stock_quantity: 0,
        branch: "string",
        company_group: "string",
        group: "string",
        stock_out_date: "2023-06-08T12:38:47.739Z"
      },
      {
        mdmCounterForEntity: 0,
        mdmLastUpdated: "2023-06-08T12:38:47.739Z",
        mdmCounterForEntity__DATETIME__: "2023-06-08T12:38:47.739Z",
        mdmEntityType: "string",
        mdmApplicationIdMasterRecordId: "string",
        mdmCreated: "2023-06-08T12:38:47.739Z",
        mdmCrosswalk: "string",
        _ingestionDatetime: "2023-06-08T12:38:47.739Z",
        mdmTenantId: "string",
        mdmId: "string",
        mdmPreviousIds: "string",
        unity: "string",
        code: "string",
        desc_espec: "string",
        description: "string",
        id: "string",
        classification: "string",
        type: "string",
        stock_quantity: 0,
        branch: "string",
        company_group: "string",
        group: "string",
        stock_out_date: "2023-06-08T12:38:47.739Z"
      },
      {
        mdmCounterForEntity: 0,
        mdmLastUpdated: "2023-06-08T12:38:47.739Z",
        mdmCounterForEntity__DATETIME__: "2023-06-08T12:38:47.739Z",
        mdmEntityType: "string",
        mdmApplicationIdMasterRecordId: "string",
        mdmCreated: "2023-06-08T12:38:47.739Z",
        mdmCrosswalk: "string",
        _ingestionDatetime: "2023-06-08T12:38:47.739Z",
        mdmTenantId: "string",
        mdmId: "string",
        mdmPreviousIds: "string",
        unity: "string",
        code: "string",
        desc_espec: "string",
        description: "string",
        id: "string",
        classification: "string",
        type: "string",
        stock_quantity: 0,
        branch: "string",
        company_group: "string",
        group: "string",
        stock_out_date: "2023-06-08T12:38:47.739Z"
      },
      {
        mdmCounterForEntity: 0,
        mdmLastUpdated: "2023-06-08T12:38:47.739Z",
        mdmCounterForEntity__DATETIME__: "2023-06-08T12:38:47.739Z",
        mdmEntityType: "string",
        mdmApplicationIdMasterRecordId: "string",
        mdmCreated: "2023-06-08T12:38:47.739Z",
        mdmCrosswalk: "string",
        _ingestionDatetime: "2023-06-08T12:38:47.739Z",
        mdmTenantId: "string",
        mdmId: "string",
        mdmPreviousIds: "string",
        unity: "string",
        code: "string",
        desc_espec: "string",
        description: "string",
        id: "string",
        classification: "string",
        type: "string",
        stock_quantity: 0,
        branch: "string",
        company_group: "string",
        group: "string",
        stock_out_date: "2023-06-08T12:38:47.739Z"
      },
      {
        mdmCounterForEntity: 0,
        mdmLastUpdated: "2023-06-08T12:38:47.739Z",
        mdmCounterForEntity__DATETIME__: "2023-06-08T12:38:47.739Z",
        mdmEntityType: "string",
        mdmApplicationIdMasterRecordId: "string",
        mdmCreated: "2023-06-08T12:38:47.739Z",
        mdmCrosswalk: "string",
        _ingestionDatetime: "2023-06-08T12:38:47.739Z",
        mdmTenantId: "string",
        mdmId: "string",
        mdmPreviousIds: "string",
        unity: "string",
        code: "string",
        desc_espec: "string",
        description: "string",
        id: "string",
        classification: "string",
        type: "string",
        stock_quantity: 0,
        branch: "string",
        company_group: "string",
        group: "string",
        stock_out_date: "2023-06-08T12:38:47.739Z"
      }
    ];
  }
}
