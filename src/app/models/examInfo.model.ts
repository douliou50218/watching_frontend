export interface ExamInfo {
  headerRow?: string[];
  dataRows?: ExamInfoRows[];
}
export interface ExamInfoRows {
  connectionStatus?: string;
  connectionTime?: string;
  ip?: string;
  studentName?: string;
  studentId?: string;
  timestamp?: string;
  probability?: string;
}
