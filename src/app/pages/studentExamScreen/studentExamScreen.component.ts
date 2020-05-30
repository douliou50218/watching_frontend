import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-studentExamScreen',
  moduleId: module.id,
  templateUrl: 'studentExamScreen.component.html'
})


export class StudentExamScreenComponent implements OnInit {
  ngOnInit() {
    const video = <HTMLVideoElement>document.querySelector('#videoElement');

    let flag = true;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log('Something went wrong!');
        });
    }

    $('#pip-request').on('click', () => {
      if (flag) {
        video.requestPictureInPicture();
        flag = false;
      } else {
        document.exitPictureInPicture();
        flag = true;
      }
    })
  }
}
