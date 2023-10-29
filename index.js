// Code your solution in this file!
const hqLocation = 42;

function distanceFromHqInBlocks(someValue){
    return Math.abs(hqLocation - someValue)

}
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)

    if(distance <= 400){
        return 0;
    }
    else if(distance > 400 && distance <= 2000){
        return parseInt((distance * 0.02 - 8)*100)/100
    }
    else if(distance > 2000 && distance <=2500){
        return 25
    }
    else{return 'cannot travel that far'}

    
}

console.log(distanceFromHqInBlocks(43))
console.log("Hello, world!")
console.log(calculatesFarePrice(42, 48))
console.log(distanceFromHqInFeet(44));