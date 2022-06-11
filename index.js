// Code your solution here
const findMatching = (names, str) => {
    let newDrivers = [];
    for(const name of names){
        if(name === str || name.toLowerCase() === str.toLowerCase()){
            newDrivers.push(name)
}
}
    return newDrivers;
}

const fuzzyMatch = (names, str) => {
let newArray = [];
for(const name of names){
if(name.slice(0, 1) === str.slice(0, 1)){
newArray.push(name)
}
}
return newArray;
}

const matchName = (array, str) => {
    const newArray = [];
    for(const user of array){
    if(user.name.toLowerCase() === str.toLowerCase() || user.hometown.toLowerCase() === str.toLowerCase()){
    newArray.push(user)
}
}
    return newArray;
}
        