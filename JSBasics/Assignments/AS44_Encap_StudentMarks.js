/*
Encapsulations_Assignment-4
PS: Student Marks - Create a Student class.
Requirements:
• Private property: #marks
• Method: setMarks(marks)
• Method: getMarks()
• Marks must be between 0 and 100.
• Invalid marks should not be stored.
*/

class Student{
    #marks;

    setMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.#marks = marks;
        } else {
            console.log("Sorry... We cannot save these invalid marks..!");
        }
    }

    getMarks(){
        console.log("The marks: " + this.#marks);
    }
}

let s1 = new Student();
s1.setMarks(90);
s1.getMarks();