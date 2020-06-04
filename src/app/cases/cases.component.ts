import { Component, OnInit } from '@angular/core';
import { CasesService } from '../services/cases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  public cases;
  constructor(private service: CasesService,
    private router: Router) { }

  ngOnInit() {
    this.service.getCases()
      .subscribe(data => {
        this.cases = data;
      }, err => {
        console.log(err);
      })
  }
  redirect() {
    this.router.navigate(['/chart']);
  }

}
