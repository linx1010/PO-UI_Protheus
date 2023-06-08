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
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
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
