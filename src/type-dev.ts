export interface ResultsItem {
    description: string;
    dir: string;
  }
 
  export interface ResponseData {
    dirpath: string;
    result: ResultsItem[];
    today: number;
  }
  
  export interface RequestData {
    dirpath: string;
    endtime: string;
    starttime: string;
    time: string;
  }
  