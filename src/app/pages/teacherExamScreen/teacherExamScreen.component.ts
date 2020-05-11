import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-teacherExamScreen',
    moduleId: module.id,
    templateUrl: 'teacherExamScreen.component.html'
})

export class TeacherExamScreenComponent implements OnInit {
    public tableData1: ExamInfo;
    ngOnInit() {
        this.tableData1 = {
            headerRow: [ 'IP位址', '學生姓名', '學生學號', '擷取時間', '作弊機率', '操作'],
            dataRows: [
                { ip: '192.168.1.21', studentName: '王小明', studentId: '12345678', timestamp: '2020/06/06 20:15', probability: '30%'},
                { ip: '192.168.1.1', studentName: '陳小凡', studentId: '87654321', timestamp: '2020/06/06 10:51', probability: '50%'},
                { ip: '192.168.1.36', studentName: '李小三', studentId: '14725836', timestamp: '2020/06/06 13:37', probability: '30%'}
            ]
        }
    }
}
