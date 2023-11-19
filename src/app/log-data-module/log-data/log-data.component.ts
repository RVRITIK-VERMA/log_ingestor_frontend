import { Component, OnInit } from '@angular/core';
import { LogDataHandlingService } from '../log-data-handling.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-data',
  templateUrl: './log-data.component.html',
  styleUrls: ['./log-data.component.css']
})
export class LogDataComponent implements OnInit {
  pageSize = 10; // Number of items per page
  pageIndex = 0; // Current page index
  totalLogEntries = 0; // Total number of log entries
  pagedLogEntries: any[] = [];
  searchInput: string = ""
  LevelFilter: string = ""
  MessageFilter: string = ""
  ResourceIdFilter: string = ""
  TimeStampFilter: string = ""
  TimeStampFromFilter: string = ""
  TimeStampToFilter: string = ""
  TraceIdFilter: string = ""
  SpanIdFilter: string = ""
  CommitFilter: string = ""
  ParentResourceIdFilter: string = ""
  filterOptions: string = ""
  selectedItems: string = ""
  FilterValue: string = ""
  dropdownOptions: any = ""
  newLogData: any
  logEntries: any


  constructor(private logsDataService: LogDataHandlingService,
    private toastr: ToastrService,) {
  }

  ngOnInit(): void {
    this.getAllLogsData();
  }
  insertLog() {
    try {
      // Parse the JSON string from the textarea
      const logData = JSON.parse(this.newLogData);

      // Check if the parsed data is an object
      if (typeof logData === 'object') {
        // Log the parsed object

        this.logsDataService.InsertLogsData(logData).subscribe((resData: any) => {
          console.log(resData);
          if (resData.status) {
            this.toastr.success('Log Inserted Successfully', 'Success!');
          }
          else {
            console.log(resData.error);
            this.toastr.error(resData.error, 'Failure!');
          }
        })
        this.newLogData = "";
        this.getAllLogsData();
      } else {
        console.error('Invalid JSON format. Please enter a valid JSON object.');
        this.toastr.error('Please enter a valid JSON object.', 'Failure!');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      this.toastr.error('Please enter a valid JSON object.', 'Failure!');
    }
  }
  searchLogs() {
    const filterObject = this.constructFilterObject();
    if (Object.keys(filterObject).length !== 0) {
      console.log(filterObject);
      this.getLogsWithFilter(filterObject);
    } else {
      this.getAllLogsData();
    }
  }


  getAllLogsData() {
    this.logsDataService.getLogsData([]).subscribe((resData: any) => {
      console.log(resData);
      if (resData.status) {
        this.totalLogEntries = resData.Total_Items
        this.logEntries = resData.data
        this.updatePagedLogEntries();
      }
    })
  }

  getLogsWithFilter(obj: object) {
    console.log(obj);
    this.logsDataService.getLogsDataWithFilter(obj).subscribe((resData: any) => {
      if (resData.status) {
        this.toastr.info('Filter Applied Successfully');
        console.log(resData);
        this.logEntries = resData.data
      }
      else {
        console.log(resData.error);
        this.toastr.error(resData.error, 'Failure!');
        this.TimeStampFilter = ""
        this.TimeStampFromFilter = ""
        this.TimeStampToFilter = ""
      }
    })

  }

  // Method to construct the filter object
  constructFilterObject(): any {
    const filterObject: any = {};
    if (this.LevelFilter) filterObject.level = this.LevelFilter;
    if (this.MessageFilter) filterObject.message = this.MessageFilter;
    if (this.ResourceIdFilter) filterObject.resourceId = this.ResourceIdFilter;
    if (this.TimeStampFilter) filterObject.timestamp = this.TimeStampFilter;
    if (this.TimeStampFromFilter) filterObject.DateFrom = this.TimeStampFromFilter;
    if (this.TimeStampToFilter) filterObject.DateTo = this.TimeStampToFilter;
    if (this.TraceIdFilter) filterObject.traceId = this.TraceIdFilter;
    if (this.SpanIdFilter) filterObject.spanId = this.SpanIdFilter;
    if (this.CommitFilter) filterObject.commit = this.CommitFilter;
    if (this.ParentResourceIdFilter) filterObject.parentResourceId = this.ParentResourceIdFilter;
    if (this.searchInput) filterObject.searchKeyword = this.searchInput;

    return filterObject;
  }

  // Method to handle page changes
  pageChanged(event: any) {
    this.pageIndex = event.pageIndex;
    this.updatePagedLogEntries();
  }

  updatePagedLogEntries() {
    const startIndex = this.pageIndex * this.pageSize;
    this.pagedLogEntries = this.logEntries.slice(startIndex, startIndex + this.pageSize);
  }
}
