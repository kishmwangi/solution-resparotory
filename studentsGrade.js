function calculateGrade (mark) {

    if (mark > 79)
    return 'A';

    else if (mark >= 60 && <= 79) {
        return 'B';
    }
    else if (mark >= 50 && <= 59) {
        return 'C';
    }
    else if (mark >= 40 && <= 49) {
        return 'D';
    }
    else {
        return 'E';
    }
}

//

function getUserInput() {
    let userInput = prompt("Enter the studnt's mark (between 0 and 100:)");
    let mark = parseInt(userInput);

    if (isNaN(mark) || mark < 0 || mark 100) {
        alert("individual input! please enter a number between 0 and 100.");
    } else {
        let grade = calculateGrade(mark);
        alert("The grade for student's mark of " + mark + "is:" + grade);
    }
}

getUserInput();