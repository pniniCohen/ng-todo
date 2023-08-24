export interface ITodo{
    id:number;
    title:string;
    descreption:string;
    isComplited:boolean;
    isArchived:boolean;
    endDate:Date|number|string;
    selected:boolean;
}