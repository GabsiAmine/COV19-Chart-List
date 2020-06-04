import { Component, OnInit } from '@angular/core';
import { CasesService } from '../services/cases.service';
import { Chart } from 'chart.js';
import { Data } from '@angular/router';
import { LocationCase } from '../model/LocationCase';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: Data[];
  city = [];
  cases = [];
  lineChart;
  constructor(private service: CasesService) { }

  ngOnInit() {

    this.service.getCases().subscribe((data: LocationCase[]) => {
      data.forEach(x => {
        this.city.push(x.country);
        this.cases.push(x.diffFromPrevDay);
      });
      this.lineChart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.city,
          datasets: [
            {
              data: this.cases,
              borderColor: '#3cb371',
              //backgroundColor: "#0000FF",
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'New Covid-19 Cases'
          },
          legend: {
            display: false,
            labels: {
              fontColor: 'rgb(255, 99, 132)'
            }
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}
