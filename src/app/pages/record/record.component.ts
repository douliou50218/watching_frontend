import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'record.component.html'
})

export class RecordComponent implements OnInit {
  public tableData1: TableData;
  ngOnInit() {
      this.tableData1 = {
          headerRow: [ '編號', '考場名稱', '考試代碼', '考試時間', '操作'],
          dataRows: [
              { id: '1', name: '物件導向程式設計', examId: '31501', examTime: '2019/02/15 20:15'},
              { id: '2', name: '影像處理', examId: '11502', examTime: '2019/04/06 10:51'},
              { id: '3', name: '服務導向設計', examId: '54622', examTime: '2019/06/08 13:37'}
          ]
      };
  }
}
