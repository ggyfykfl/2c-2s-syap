//1---------------------------------------------------------------------
interface Student{
    id:number,
    name:string,
    group:number
}
const array: Student[]=[
    {id: 1, name: 'A', group: 10}, 
    {id: 2, name: 'B', group: 11},
    {id: 3, name: 'C', group: 12},
    {id: 4, name: 'D', group: 10},
    {id: 5, name: 'E', group: 11},
]
//2---------------------------------------------------------------------
interface CarsType{
    manufacturer:string,
    model:string
}
let car: CarsType={}as CarsType;
car.manufacturer="manufacturee";
car.model='model';
//3---------------------------------------------------------------------
interface ArrayCarsType {
    cars: CarsType[];
}
const car1: CarsType = {} as CarsType;
car1.manufacturer = "manufacturer1";
car1.model = "model1";
const car2: CarsType = {} as CarsType;
car2.manufacturer = "manufacturer2";    
car2.model = "model2";
const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];
//4---------------------------------------------------------------------
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type DoneType = boolean;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type MarkType = {
    subject: string;
    mark: MarkFilterType;
    done: DoneType;
};

type StudentType = {
    id: number;
    name: string;
    group: GroupFilterType;
    marks: Array<MarkType>;
};

type GroupType = {
    students: Array<StudentType>;
    studentsFilter: (group: number) => Array<StudentType>;
    marksFilter: (mark: number) => Array<StudentType>;
    deleteStudent: (id: number) => void;
    mark: MarkFilterType;
    group: GroupFilterType;
};

const group: GroupType = {
    students: [],
    mark: 1 as MarkFilterType,
    group: 1 as GroupFilterType,

    studentsFilter: function (group: number): Array<StudentType> {
        return this.students.filter(student => student.group === group);
    },

    marksFilter: function (mark: number): Array<StudentType> {
        return this.students.filter(student => student.marks.some(m => m.mark === mark));
    },

    deleteStudent: function (id: number): void {
        this.students = this.students.filter(student => student.id !== id);
    },
};

group.students.push({
    id: 1,
    name: "A",
    group: 1,
    marks: [{ subject: "Math", mark: 10, done: true }],
});
group.students.push({
    id: 2,
    name: "B",
    group: 2,
    marks: [{ subject: "History", mark: 8, done: false }],
});