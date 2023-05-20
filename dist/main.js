"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let gradesBooks = [];
let courses = [];
let area = [];
//declarar una variable para asignar los valores del enum; me trae los datos
var Carrera;
(function (Carrera) {
    Carrera["turismo"] = "Turismo";
    Carrera["marketing"] = "Marketing";
    Carrera["desarrllo"] = "Desarrollo";
    Carrera["gastronomia"] = "Gastronomia";
})(Carrera || (Carrera = {}));
// enum Area {
//   programacion = "Programacion",
//   diseno = "Diseño",
//   redes = "Redes",
// }
var course;
(function (course) {
    course["typeScript"] = "TypeScript";
    course["php"] = "Php";
    course["angular"] = "Angular";
    course["python"] = "Python";
})(course || (course = {}));
var Nivel;
(function (Nivel) {
    Nivel["primero"] = "Primero";
    Nivel["segundo"] = "Segundo";
    Nivel["tercero"] = "Tercero";
    Nivel["cuarto"] = "Cuarto";
    Nivel["quinto"] = "Quinto";
})(Nivel || (Nivel = {}));
var Asignature;
(function (Asignature) {
    Asignature["metodologias"] = "Metodolog\u00EDas de desarrollo";
    Asignature["dise\u00F1o"] = "Dise\u00F1o de interfaces";
    Asignature["programacion"] = "Programacion visual";
    Asignature["baseDatos"] = "Base de datos II";
})(Asignature || (Asignature = {}));
function addStudent() {
    let currentStudent = {
        name: readHtml("nameStudent"),
        identification: parseInt(readHtml("identificationStudent")),
        address: readHtml("addressStudent"),
        registrationCode: parseInt(readHtml("registrationCodeStudent")),
        carrer: readHtml("carrerStudent"),
        level: readHtml("levelStudent"),
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        name: readHtml("nameTeacher"),
        identification: parseInt(readHtml("identificationTeacher")),
        address: readHtml("addressTeacher"),
        title: readHtml("titleTeacher"),
        asignature: readHtml("asignatureTeacher"),
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
function addCourse() {
    let currentCourse = {
        numberStudents: parseInt(readHtml("numberStudentsCourse")),
        activity: readHtml("activityCourse"),
        nameTeacher: readHtml("nameTeacherCourse"),
    };
    courses.push(currentCourse);
    console.table(courses);
}
function addActivity() {
    let currentActivity = {
        name: readHtml("nameActivity"),
    };
    activities.push(currentActivity);
    console.table(activities);
}
function addGradesBook() {
    let currentGradesBook = {
        course: readHtml("courseGradeBook"),
        activity: readHtml("activitGradeBook"),
        noteMax: parseInt(readHtml("noteMaxGradeBook")),
        weight: parseInt(readHtml("weightGradeBook")),
    };
    gradesBooks.push(currentGradesBook);
    console.table(gradesBooks);
}
function addArea() {
    let currentArea = {
        name: readHtml("nameArea"),
        description: readHtml("descriptionArea"),
        carrer: readHtml("carrerArea"),
    };
    area.push(currentArea);
    console.log(area);
    console.table(area);
}
function readSelect() {
    let carrer = document.getElementById("carrerArea");
    let carrers = Object.values(Carrera);
    carrers.forEach((carrerOne) => {
        let option = document.createElement("option");
        option.value = carrerOne;
        option.text = carrerOne,
            carrer.add(option);
    });
    let asignatura = document.getElementById("asignatureTeacher");
    let asignatures = Object.values(Asignature);
    asignatures.forEach((asignature) => {
        let option = document.createElement("option");
        option.value = asignature,
            option.text = asignature,
            asignatura.add(option);
    });
    let curseGradebook = document.getElementById("courseGradeBook");
    let curseGradebooks = Object.values(course);
    curseGradebooks.forEach((curse) => {
        let option = document.createElement("option");
        option.value = curse;
        option.text = curse,
            curseGradebook.add(option);
    });
}
function readHtml(id) {
    return document.getElementById(id).value;
}
readSelect();
