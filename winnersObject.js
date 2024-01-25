const participants = require('./participants');

const winnersObject = (matches) => {
    const playersArray = participants(matches);
    const playersObjects = {};
    // convert each player name to keys
    for (let keys of playersArray){
        playersObjects[keys] = [];
    }
    // loop through each match
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        // add name to player if not in the list of players beaten
        if (!(playersObjects[match.winner].includes(match.loser))) {
            playersObjects[match.winner].push(match.loser);
        }
    }
    return playersObjects;
}

module.exports = winnersObject;