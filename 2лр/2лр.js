var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {};
car.manufacturer = "manufacturee";
car.model = 'model';
var car1 = {};
car1.manufacturer = "manufacturer1";
car1.model = "model1";
var car2 = {};
car2.manufacturer = "manufacturer2";
car2.model = "model2";
var arrayCars = [{
        cars: [car1, car2]
    }];
var group = {
    students: [],
    mark: 1,
    group: 1,
    studentsFilter: function (group) {
        return this.students.filter(function (student) { return student.group === group; });
    },
    marksFilter: function (mark) {
        return this.students.filter(function (student) { return student.marks.some(function (m) { return m.mark === mark; }); });
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    },
};
group.students.push({
    id: 1,
    name: "Vasya",
    group: 1,
    marks: [{ subject: "Math", mark: 10, done: true }],
});
group.students.push({
    id: 2,
    name: "Ivan",
    group: 2,
    marks: [{ subject: "History", mark: 8, done: false }],
});
