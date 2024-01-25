const participants = require('./participants');

const biggestLoser = (matches) => {
    const playersArray = participants(matches);
    const playersObjects = {};
    // create keys of each player name and set each value to 0
    for (let keys of playersArray){
        playersObjects[keys] = 0;
    }
    // for each match, either add or subtract the points
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        playersObjects[match.winner] += match.loser_points;
        playersObjects[match.loser] -= match.loser_points;
    }
    // use a map to find the minimum points
    let min = Object.keys(playersObjects).reduce((key, val) => playersObjects[val] < playersObjects[key] ? val : key);
    return min;
}

module.exports = biggestLoser;