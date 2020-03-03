import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-pettycash',
  templateUrl: './pettycash.component.html',
  styleUrls: ['./pettycash.component.css']
})
export class PettycashComponent implements OnInit {
  total_credit = '';
  total_debit = '';
  difference_amt = "";
  diff_symbol = "";

  day_metric: any[] = new Array();
  day_index: any[] = new Array();
  daytrigger: boolean;
  day_options: any = {
                      legend: { display: false }
                    }

  bar1_metric: any[] = new Array();
  bar1_index: any[] = new Array();
  bar1_trigger: boolean;
  bar_c: any[] = [];

  bar2_metric: any[] = new Array();
  bar2_index: any[] = new Array();
  bar2_trigger: boolean;
  bar_d: any[] = [];

  datewise_index: any[] = new Array();
  datewise_data: any[] = [];
  datewise_trigger: boolean;

  doughnutChart : any;
  chart = [];
  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:5002/v1.0/expenses')
    .subscribe((res: any) => {

      //Total Expenses
      let total_expense = res['total_expenses'];
      this.total_credit = total_expense['credit'];
      this.total_debit = total_expense['debit'];
      this.difference_amt = this.total_credit - this.total_debit;
      if (this.difference_amt > 0){
        this.diff_symbol = "fa fa-arrow-up"
      }
      else{
        this.diff_symbol = "fa fa-arrow-down"
      }

      //daywise expenses
      let daywise = res['daywise_expenses'];
      for (var key in daywise)
      {
        this.day_index.push(key);
        this.day_metric.push(daywise[key]);
      }
      this.daytrigger = !this.daytrigger;

      //Credit expenses
      let topc = res['top_expenses']['credit'];
      for (var key in topc)
      {
        this.bar1_index.push(key);
        this.bar1_metric.push(topc[key]);
      }
      this.bar_c = [{
        data: this.bar1_metric
      }]
      this.bar1_trigger = !this.bar1_trigger;

      //debit expenses
      let topd = res['top_expenses']['debit'];
      for (var key in topd)
      {
        this.bar2_index.push(key);
        this.bar2_metric.push(topd[key]);
      }
      this.bar_d = [{
        data: this.bar2_metric
      }]
      this.bar2_trigger = !this.bar2_trigger;

      //datewise Expenses
      let date_exp = res['datewise_expenses'];
      let c_data = [];
      let d_data = [];

      for (var key in date_exp['credit'])
      {
        this.datewise_index.push(key)
        c_data.push(date_exp['credit'][key]);
      }

      for (var key in date_exp['debit'])
      {
        d_data.push(date_exp['debit'][key]);
      }
      this.datewise_trigger = !this.datewise_trigger;
      this.datewise_data = [
        {data: c_data, label: 'Credit'},
        {data: d_data, label: 'Debit'}
      ]

      console.log(this.day_index, this.day_metric);
      });

    }

}
