declare interface ExamInfo {
  headerRow: string[];
  dataRows: ExamInfoRows[];
}
declare interface ExamInfoRows {
  ip: string;
  studentName: string;
  studentId: string;
  timestamp: string;
  probability: string;
}
