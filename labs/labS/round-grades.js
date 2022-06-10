const grades = [80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0]; // 23 grades
// Rounded ==> [80, 96, 18, 75, 80, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0]  // 23 rounded grades

function gradingStudents(grades) {
    // Write your code here
    const finalGrades = [];

    for (const grade of grades) {
        let finalGrade = grade;

        const gradeMod5 = (finalGrade % 5);

        // Round the grade
        if (finalGrade < 38) finalGrade = finalGrade;
        // else if (gradeMod5 === 2) finalGrade = finalGrade;
        // else if (gradeMod5 < 2) finalGrade = finalGrade - gradeMod5;
        else if (gradeMod5 >= 3) finalGrade = finalGrade + (5 - gradeMod5);

        finalGrades.push(finalGrade);
    }

    return finalGrades;
}

const output = gradingStudents(grades);

output.forEach((finalGrade) => {
    console.log(finalGrade);
})


