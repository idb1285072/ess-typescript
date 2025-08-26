// type FileDate = {
//   path: string;
//   content: string;
// };

// type DataBaseData = {
//   connectionUrl: string;
//   credetials: string;
// };

// type Status = {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// type AccessedFileData = FileDate & Status;
// type AccessedDatabaseData = DataBaseData & Status;


interface FileDate {
  path: string;
  content: string;
}

interface DataBaseData {
  connectionUrl: string;
  credetials: string;
}

interface Status {
  isOpen: boolean;
  errorMessage?: string;
}

interface AccessedFileData extends FileDate, Status {}
interface AccessedDatabaseData extends DataBaseData, Status {}
