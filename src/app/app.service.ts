import { Injectable } from '@angular/core';
import { PoChartSerie, PoChartType, PoTableColumn, PoTagType } from '@po-ui/ng-components';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


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
        tenantId: "559e29d7-382f-4cf2-a9ef-dd7b8a44cc59",
          alerts: [
              {
                branch: "1530",
                company_group: "8921",
                code: "COM00000000000000000000000011",
                id: null,
                stock_out_date: "2023-06-30T00:00:00-03:00",
                description: "Garrafa PET",
                classification: "BN",
                type: "PA",
                group: "10",
                quantity: 75,
                desc_spec: "desc espec 3",
        
                  graphPoints: [
                  {
                  code:	"COM00000000000000000000000011",
                  reference:	"2023-01-30T00:00:00-03:00",
                  accuracy:	100,
                  id:	"747482197ea943f3bc551b3a54783350",
                  lower_bound:	20,
                  upper_bound:	20,
                  branch:	"1530",
                  value:	20,
                  company_group:	"8921",
                  frequency:	"m",
                  year:	2023,
                  prediction:	false
                  },
                  {	
                    
                  code:	"COM00000000000000000000000011",
                  reference:	"2023-02-30T00:00:00-03:00",
                  accuracy:	100,
                  id:	"747482197ea943f3bc551b3a54783350",
                  lower_bound:	15,
                  upper_bound:	15,
                  branch:	"1530",
                  value:	15,
                  company_group:	"8921",
                  frequency:	"m",
                  year:	2023,
                  prediction:	false,
                  },
                  {		
                  code:	"COM00000000000000000000000011",
                  reference:	"2023-03-30T00:00:00-03:00",
                  accuracy:	100,
                  id:	"747482197ea943f3bc551b3a54783350",
                  lower_bound:	5,
                  upper_bound:	5,
                  branch:	"1530",
                  value:	5,
                  company_group:	"8921",
                  frequency:	"m",
                  year:	2023,
                  prediction:	false
                  },
                  {		
                  code:	"COM00000000000000000000000011",
                  reference:	"2023-04-30T00:00:00-03:00",
                  accuracy:	89,
                  id:	"747482197ea943f3bc551b3a54783350",
                  lower_bound:	-5,
                  upper_bound:	5,
                  branch:	"1530",
                  value:	0,
                  company_group:	"8921",
                  frequency:	"m",
                  year:	2023,
                  prediction:	true
                  },
                  {		
                  code:	"COM00000000000000000000000011",
                  reference:	"2023-01-30T00:00:00-03:00",
                  accuracy:	95,
                  id:	"747482197ea943f3bc551b3a54783350",
                  lower_bound:	-20,
                  upper_bound:	0,
                  branch:	"1530",
                  value:	-10,
                  company_group:	"8921",
                  frequency:	"m",
                  year:	2023,
                  prediction:	true
                  }
                ]
            },
            {
              branch: "1530",
              company_group: "8921",
              code: "COM00000000000000000000000011",
              id: null,
              stock_out_date: "2023-06-30T00:00:00-03:00",
              description: "Garrafa PET2",
              classification: "BN",
              type: "PA",
              group: "10",
              quantity: 75,
              desc_spec: "desc espec 3",
      
            graphPoints: []
            },
            {
              branch: "1530",
              company_group: "8921",
              code: "COM00000000000000000000000011",
              id: null,
              stock_out_date: "2023-06-30T00:00:00-03:00",
              description: "Garrafa PET3",
              classification: "BN",
              type: "PA",
              group: "10",
              quantity: 75,
              desc_spec: "desc espec 3",
      
            graphPoints: []
            },
            {
              branch: "1530",
              company_group: "8921",
              code: "COM00000000000000000000000011",
              id: null,
              stock_out_date: "2023-06-30T00:00:00-03:00",
              description: "Garrafa PET4",
              classification: "BN",
              type: "PA",
              group: "10",
              quantity: 75,
              desc_spec: "desc espec 3",
      
            graphPoints: []
            },
          ]
      }
    ];
  }
}



