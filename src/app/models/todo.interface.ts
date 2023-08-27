export interface ITodo{
    id:string;
    title:string;
    descreption:string;
    isComplited:boolean;
    isArchived:boolean;
    endDate:Date|number|string;
    selected:boolean;
}