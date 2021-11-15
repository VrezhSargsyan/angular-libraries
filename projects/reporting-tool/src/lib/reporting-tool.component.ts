import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aswa-reporting-tool',
  templateUrl: 'reporting-tool.html',
  styleUrls: ['reporting-tool.scss']
})
export class ReportingToolComponent implements OnInit {
  public reportingToolTitle: string;

  constructor() {
    this.reportingToolTitle = 'This is Reporting tool Library !!!!!';
  }

  ngOnInit(): void {
  }
}
