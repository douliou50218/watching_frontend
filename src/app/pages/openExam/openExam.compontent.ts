import { Component, OnInit } from '@angular/core';
import { Modal } from 'app/models/modal.model';
import { environment } from 'environments/environment.prod';
import { Teacher } from 'app/models/teacher.model';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'app/services/modal.service';
import { TeacherService } from 'app/services/teacher.service';


@Component({
    selector: 'app-openexam',
    moduleId: module.id,
    templateUrl: 'openExam.component.html'
})

export class OpenExamComponent implements OnInit {

  /** 引入 Teacher model 的資料型別 */
  teacher: Teacher = {
    teacherId: '',
    examToken: '',
    examID: '',
    examStartTime: '',
    examEndTime: '',
    message: ''
  }

  /** 開啟考場的表單 */
  openExamForm: any = this.fb.group({
    examName: ['', Validators.required],
    examStartTime: ['', Validators.required],
    examEndTime: ['', Validators.required],
    examCount: ['', Validators.required]
  });

  constructor(
    private teacherService: TeacherService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  // 幫enterExamForm取個簡短的代號
  get f() { return this.openExamForm.controls; }

  /**
   * 老師開啟考場
   *
   * @memberof OpenExamComponent
   */
  openExam() {

    /** 進入考場所傳入的資料 */
    const examInfo: object = {
      examName: this.f.examName.value,
      examStartTime: this.f.examStartTime.value,
      examEndTime: this.f.examEndTime.value,
      examCount: this.f.examCount.value
    }

    // 老師開啟考場
    this.teacherService.openExam(examInfo)
      .subscribe(
        (data: any) => {
          localStorage.setItem('examID', this.teacher.examID);
          localStorage.setItem('examStartTime', this.teacher.examStartTime);
          localStorage.setItem('examEndTime', this.teacher.examEndTime);
          this.openMessageModal(`${data.message.message}，
          你的考場ID是${data.message.examID} 考試時間為${data.message.examStartTime}~${data.message.examEndTime}`);

          setTimeout(() => {
            this.router.navigate(['teacherExamScreen']);
          }, 500);
        }
      )
  }

  /**
   * 開啟 messageModal
   *
   * @param {string} message
   * @memberof HttpErrorInterceptor
   */
  openMessageModal(message: string) {
    /** modaleOptions */
    const modalOptions: Modal = {
        icon: 'icon',
        message: message
    }

    // 開啟 Modal
    this.modalService.open(modalOptions);
  }

}
