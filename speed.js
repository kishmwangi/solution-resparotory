function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointPerKmAbove = 1;


    if  (speed < speedLimit) {
        console.log("ok");
        return;
    }

    const kmPerDemeritPoint = math.floor((speed - speedLimit) /kmPerDemeritPoint);

    if(demeritPoints <= 12) {
        console.log("points", demeritPoints);
    }
    else {
        console.log("licence suspended")
    }
}

//example 
const carSpeed = 80;
calculateDemeritPoints(carSpeed);
