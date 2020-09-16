

import {fifaData} from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data *****DONE*** */

// (a) Home Team name for 2014 world cup final **** the answer should be "Germany" index 828

let homeTeam = fifaData.filter(function(fifaData) {
    return fifaData.Year === 2014 && fifaData.Stage === 'Final';
});
console.log(homeTeam[0]["Home Team Name"]);

// // (b) Away Team name for 2014 world cup final

// let awayTeam = fifaData.filter(function(fifaData) {
//     return fifaData.Year === 2014 && fifaData.Stage === 'Final';
// });

// console.log(awayTeam[0]["Away Team Name"]);

// // (c) Home Team goals for 2014 world cup final

// let homeTeamGoals = fifaData.filter(function(fifaData) {
//     return fifaData.Year === 2014 && fifaData.Stage === 'Final';
// });

// console.log(homeTeamGoals[0]["Home Team Goals"]);

// // (d) Away Team goals for 2014 world cup final

// let awayTeamGoals = fifaData.filter(function(fifaData){
//     return fifaData.Year === 2014 && fifaData.Stage === 'Final'
// });

// console.log(awayTeamGoals[0]["Away Team Goals"]);

// // (e) Winner of 2014 world cup final */


function findWinner(){
    if(homeTeamGoals[0]["Home Team Goals"] > awayTeamGoals[0]["Away Team Goals"]) {
        console.log(`${homeTeam[0]["Home Team Name"]} wins`);
    } else if (awayTeamGoals[0]["Away Team Goals"] > homeTeamGoals[0]["Home Team Goals"]){
        console.log(`${awayTeam[0]["Away Team Name"]} wins`)
    } else {
        console.log("Tie Game");
    }
}
findWinner(); 

// Task 2: Create a function called  getFinals that takes `data` as an argument and returns an 
// array of objects with only finals data */

function getFinals(array) {

        let finals = array.filter(function(array){
            return array.Stage === 'Final';
        });
    return finals;
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, ****** DONE ******
and returns an array called `years` containing all of the years in the dataset */

function getYears(getfinals) { //
    let finalsResults = getFinals(fifaData)
    
    let years = finalsResults.map(function(finalsResults){
        return finalsResults.Year; 
    });
   
    return years;
};

console.log(getYears(getFinals));
// ********** DONE ************
/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback 
function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of 
all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
    let finals = getFinals(fifaData);// all the final games 
    let winners = [];

    for (let i = 0; i < finals.length; i++) { //try this with filter 
        if(finals[i]["Home Team Goals"] > finals[i]["Away Team Goals"]){
            winners.push(finals[i]["Home Team Name"]);
        } else if (finals[i]["Home Team Goals"] < finals[i]["Away Team Goals"]){
            winners.push(finals[i]["Away Team Name"])
        } else {
            continue;
        }
    }

    return winners;
}

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts 
the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getYears, getWinners) {

    let finalsYears = getYears(fifaData);
    let finalsWinners = getWinners(getFinals);
    let worldCupFinalWinnersArray = [];
    
    for (let i = 0; i< finalsYears.length; i++){ 
        worldCupFinalWinnersArray.push(`In ${finalsYears[i]}, ${finalsWinners[i]} won the world cup!`);
    }
      return worldCupFinalWinnersArray 
};

console.log(getWinnersByYear(getYears, getWinners));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter 
`data` and returns the the average number of home team goals and away team goals scored per match 
(Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(array) {
    let totalHomeGoals = 0;
    let totalAwayGoals = 0;
    let averageHomeGoals;
    let averageAwayGoals;
    
    totalHomeGoals = array.reduce(function (accumulator, currentValue) { 
        return accumulator + currentValue["Home Team Goals"];
    },0);
        
        averageHomeGoals = Math.round(totalHomeGoals/array.length); 

    totalAwayGoals = array.reduce(function (accumulator, currentValue) { 
        return accumulator + currentValue["Away Team Goals"];
    },0);

        averageAwayGoals = Math.round(totalAwayGoals/array.length);

    return `The average goals scored per match are: Home:${averageHomeGoals} Away:${averageAwayGoals}`  
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
