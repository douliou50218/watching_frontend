  
 [大專小筆記](https://hackmd.io/zT1-GcNtR4uLbq0L4K4DvA?view)
 
 [API需求表](https://hackmd.io/_6PAKFulQXaKiaQjSwMA5Q?both)
 
 [套版來源Paper Dashboard Angular](https://www.creative-tim.com/product/paper-dashboard-angular)
 
 > npm install
 >
 > ng serve -o
 
 | 身分別    | API                    | HTTP Methods | 功能    |
| ------- | ---------------------- | ------ | ------------------ |
| student | 學生登入  studentLogin | post   | 學生輸入姓名、學號、IP以便進入系統 成功 => 產生一組JWT(用於請求API時，需帶在header作為驗證身份) |
| student | 學生進入考場  enterExam | post   | 學生輸入考場資訊請求進入考場 成功 => 產生一組考生JWT(用於請求API時，需帶在header作為驗證考生身份)，進入考場 |
| student | 學生查看考試紀錄 recordList | get   | 學生拿TOKEN為憑去請求查看考試紀錄 成功 => 取得個人考試紀錄 |
| teacher | 老師登入  teacherLogin | post   | 老師輸入基本訊息以便進入系統 成功 => 產生一組JWT(用於請求API時，需帶在header作為驗證身份) |
| teacher | 老師開啟考場  openExam | post   | 老師輸入考試名稱、考試時間等基本訊息以便開啟考場 成功 => 考場將於指定時間開啟，產生考場id
| teacher | 老師延長考試 extendExam | put | 老師拿TOKEN為憑去請求更改考試結束時間(預設為考試結束時間自動關閉) 成功 => 考試時間延長 |
| teacher | 老師關閉考場 closeExam | put | 老師拿TOKEN為憑去請求強制關閉考場(預設為考試結束時間自動關閉) 成功 => 考試結束，考場關閉 |
| teacher | 老師查看考試紀錄列表 recordList | get   | 老師拿TOKEN為憑去請求查看考試紀錄列表 成功 => 取得考試紀錄列表 |
| teacher | ~~老師查看考試紀錄~~ records/:examId/:studentId | get  | 老師拿TOKEN為憑去請求查看考試紀錄列表 成功 => 取得考試紀錄列表 |
