function Student(name, surname, birthDate, grades, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.grades = grades;
    this.assessments = assessments;

    this.averageRounded = 0;
    this.assessments.length = 25;
    this.index = 0;
    this.presents = 0;
}

Student.prototype.getAge = function () {
    let currentYear = new Date().getFullYear();
    let age = currentYear - this.birthDate;
    return age;
}

Student.prototype.getAverage = function () {
    let sum = 0;
    let average = 0;

    for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
    }

    average = sum / this.grades.length;

    return this.averageRounded = Math.round(average);
}

Student.prototype.present = function () {
    if (this.index < this.assessments.length) {
        this.assessments[this.index++] = true;
        this.presents += 1;
    }
}

Student.prototype.absent = function () {
    if (this.index < this.assessments.length) {
        this.assessments[this.index++] = false;
    }
}

Student.prototype.summary = function () {
    let averageAssessment = this.presents / this.index;
    let averageAssessmentRounded = averageAssessment.toFixed(2);

    switch (true) {
        case (this.averageRounded > 90 && averageAssessmentRounded > 0.9):
            return "Молодець!";
        case (this.averageRounded < 90 && averageAssessmentRounded < 0.9):
            return "Редиска!"
        default:
            return "Добре, але можна краще";
    }
}

const student1 = new Student('exampleName1', 'exampleSurname1', 1999, [90, 80, 98, 100, 99, 100], []);
const student2 = new Student('exampleName2', 'exampleSurname2', 1998, [50, 60, 40, 23, 0, 100], []);

console.log("age =>", student1.getAge());
console.log("grades average =>", student1.getAverage());
student1.present();
student1.present();
student1.absent();
console.log("summary =>", student1.summary());

console.log("age =>", student2.getAge());
console.log("grades average =>", student2.getAverage());
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
console.log("summary =>", student2.summary());
