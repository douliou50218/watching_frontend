import { Component, OnInit } from '@angular/core';
import { DataRows } from 'app/models/recordList.model';
import { StudentService } from 'app/services/student.service';
import { TeacherService } from 'app/services/teacher.service';

@Component({
    selector: 'app-student-record',
    moduleId: module.id,
    templateUrl: 'studentRecord.component.html'
})

export class StudentRecordComponent implements OnInit {


  /** 紀錄列表 */
  records: DataRows[];

  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
  ) { }


  ngOnInit() {
      this.studentGetRecordList();
  }

  /**
   * 學生查看考試紀錄
   *
   * @memberof RecordComponent
   */
  studentGetRecordList() {
      // 學生查看考試紀錄
      this.studentService.recordList()
      .subscribe(
        (data: DataRows[]) => {
          this.records = data;
        }
      )
  }

}
