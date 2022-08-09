const THIRTY_MINUTE_LESSON = 65;
const FOURTY_FIVE_MINUTE_LESSON = 75;
const DEFAULT_FIFTY_FIVE_MINUTE_LESSON = 85;
const SLIDING_SCALE_DISCOUNT = 10;
ZOOM_DISCOUNT = 5;

function SignUp() {
    
    const lessonTime = prompt("Howdy! Would you like a 30 minute, 45 minute or 55 minute lesson?").toLowerCase();
    let cost = findTime(lessonTime);
    const lowIncome = prompt("Are you interested in our sliding scale option?").toLowerCase();
    cost = slidingScale(cost, lowIncome);
    const zoomOrInPerson = prompt("Will you be traveling to the teacher or do you prefer Zoom Lessons?").toLowerCase();
    cost = zoomOrInPersonFunction(cost, zoomOrInPerson);
    
   
   alert("The cost will be $" + cost + ".");
}

function findTime (lessonTime) {
    if (lessonTime == "30") {
        cost = THIRTY_MINUTE_LESSON;
    } else if (lessonTime == "45") {
        cost = FOURTY_FIVE_MINUTE_LESSON;
    } else {
        cost = DEFAULT_FIFTY_FIVE_MINUTE_LESSON;
    }
    return cost;
}

function slidingScale(cost, lowIncome) {
    if ((lowIncome === "y") || (lowIncome === "YES")) {
        cost -= SLIDING_SCALE_DISCOUNT;
        return cost
    }
    return cost;
}

function zoomOrInPersonFunction(cost, zoomOrInPerson) {
    if ((zoomOrInPerson === "zoom")) {
        cost -= ZOOM_DISCOUNT;
        return cost;
    }
    return cost;    
}

