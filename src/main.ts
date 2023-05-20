import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Activity } from "./entities/activity";
import { GradesBook } from "./entities/gradesBooks";
import { Course } from "./entities/courses";
import { Area } from "./entities/area";

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities: Activity[] = [];
let gradesBooks: GradesBook[] = [];
let courses: Course[] = [];
let area: Area[] = [];

//declarar una variable para asignar los valores del enum; me trae los datos
enum Carrera {
  turismo = "Turismo",
  marketing = "Marketing",
  desarrllo = "Desarrollo",
  gastronomia = "Gastronomia"
}

// enum Area {
//   programacion = "Programacion",
//   diseno = "Diseño",
//   redes = "Redes",
// }

enum course {
  typeScript = "TypeScript",
  php = "Php",
  angular = "Angular",
  python = "Python"
}

enum Nivel {
  primero = "Primero",
  segundo = "Segundo",
  tercero = "Tercero",
  cuarto = "Cuarto",
  quinto = "Quinto"
}

enum Asignature {
  metodologias = "Metodologías de desarrollo",
  diseño = "Diseño de interfaces",
  programacion = "Programacion visual",
  baseDatos = "Base de datos II"
}

function addStudent() {
  let currentStudent: Student = {
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
  let currentTeacher: Teacher = {
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
  let currentCourse: Course = {
    numberStudents: parseInt(readHtml("numberStudentsCourse")),
    activity: readHtml("activityCourse"),
    nameTeacher: readHtml("nameTeacherCourse"),
  }
  courses.push(currentCourse);
  console.table(courses)
}

function addActivity() {
  let currentActivity: Activity = {
    name: readHtml("nameActivity"),
  };
  activities.push(currentActivity);
  console.table(activities);
}

function addGradesBook() {
  let currentGradesBook: GradesBook = {
    course: readHtml("courseGradeBook"),
    activity: readHtml("activitGradeBook"),
    noteMax: parseInt(readHtml("noteMaxGradeBook")),
    weight: parseInt(readHtml("weightGradeBook")),
  };
  gradesBooks.push(currentGradesBook);
  console.table(gradesBooks);
}

function addArea() {
  let currentArea: Area = {
    name: readHtml("nameArea"),
    description: readHtml("descriptionArea"),
    carrer: readHtml("carrerArea"),
  }
  area.push(currentArea);
  console.log(area)
  console.table(area)
}

function readSelect(): void {
  let carrer = document.getElementById("carrerArea") as HTMLSelectElement;
  let carrers = Object.values(Carrera);
  carrers.forEach(
    (carrerOne) => {
      let option = document.createElement("option");
      option.value = carrerOne;
      option.text = carrerOne,
        carrer.add(option);
    }
  );


  let asignatura = document.getElementById("asignatureTeacher") as HTMLSelectElement;
  let asignatures = Object.values(Asignature);
  asignatures.forEach(
    (asignature) => {
      let option = document.createElement("option");
      option.value = asignature,
      option.text = asignature,
      asignatura.add(option);
    }
  );

  let curseGradebook = document.getElementById("courseGradeBook") as HTMLSelectElement;
  let curseGradebooks = Object.values(course);
  curseGradebooks.forEach(
    (curse) => {
      let option = document.createElement("option");
      option.value = curse;
      option.text = curse,
        curseGradebook.add(option);
    }
  );
}

function readHtml(id: string): string {
  return (<HTMLInputElement>document.getElementById(id)).value;
}
readSelect();