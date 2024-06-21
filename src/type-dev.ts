export interface ResultsItem {
    description: string;
    name: string;
  }
 
  export interface ResponseData {
    baseline: string;
    result: ResultsItem[];
    today: number;
  }
  
  export interface RequestData {
    baseline: string;
    gttscope: 'normal' | 'fivegonly';
  }
  