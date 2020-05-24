import { Component, OnInit } from '@angular/core';

import { TeacherService } from 'app/services/teacher.service';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'environments/environment.prod';
import { ExamInfo } from 'app/models/examInfo.model';



@Component({
    selector: 'app-teacherExamScreen',
    moduleId: module.id,
    templateUrl: 'teacherExamScreen.component.html'
})

export class TeacherExamScreenComponent implements OnInit {

    tableData: ExamInfo;

    /** 老師延長考試的表單 */
    extendExamForm: any = this.fb.group({
      examEndTime: ['', Validators.required],
    });

    constructor(
      private teacherService: TeacherService,
      private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.tableData = {
            headerRow: [ '連線狀態', 'IP位址', '學生姓名', '學生學號', '擷取時間', '作弊機率', '操作'],
            dataRows: [
                {
                  connectionStatus: '良好', ip: '192.168.1.21', studentName: '王小明',
                  studentId: '12345678', timestamp: '2020/06/06 20:15', probability: '30%'},
                {
                  connectionStatus: '良好', ip: '192.168.1.1', studentName: '陳小凡',
                  studentId: '87654321', timestamp: '2020/06/06 10:51', probability: '50%'},
                {
                  connectionStatus: '良好', ip: '192.168.1.36', studentName: '李小三',
                  studentId: '14725836', timestamp: '2020/06/06 13:37', probability: '30%'}
            ]
        }
    }

    // 幫Form取個簡短的代號
    get ef() { return this.extendExamForm.controls; }

    /**
     * 延長考試
     *
     * @memberof TeacherExamScreenComponent
     */
    extendExam() {
      /** 老師延長考試所傳入的資料 */
      const examInfo: any = {
        examId: localStorage.getItem(`${environment.examId}`),
        examEndTime: this.ef.examEndTime.value,
      }
      // 延長考試
      this.teacherService.extendExam(examInfo)
      .subscribe(
        (data: any) => {
          console.log(`${data.message}`)
        }
      )
    }

    /**
     * 關閉考場
     *
     * @memberof TeacherExamScreenComponent
     */
    closeExam() {
      /** 老師延長考試所傳入的資料 */
      const examInfo: any = {
        examId: localStorage.getItem(`${environment.examId}`),
        examEndTime: new Date().toJSON('yyyy-MM-dd HH:mm'),
      }
      // 關閉考場
      this.teacherService.closeExam(examInfo)
      .subscribe(
        (data: any) => {
          console.log(`${data.message}`)
        }
      )
    }
}
