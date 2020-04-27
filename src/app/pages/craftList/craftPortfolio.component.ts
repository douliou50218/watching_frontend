import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'craftPortfolio.component.html'
})

export class CraftPortfolioComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit() {
        // this.tableData1 = {
        //     headerRow: [ '編號', '作品集名稱', '作品件數', '創立時間', '解鎖作品集', '操作'],
        //     dataRows: [
        //         { id: '1', name: '落日', count: 3, createTime: '2019/02/15 20:15'},
        //         { id: '2', name: '單車', count: 5, createTime: '2019/04/06 10:51'},
        //         { id: '3', name: '佛系', count: 7, createTime: '2019/06/08 13:37'}
        //     ]
        // };
    }
}
