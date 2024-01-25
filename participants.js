const participants = (matches) => {
    const playerNames = [];
    // loop through each match
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        // name of both winner and loser and add if not in player list
        if (!(playerNames.includes(match.winner))) {
            playerNames.push(match.winner);
        }
        if (!(playerNames.includes(match.loser))) {
            playerNames.push(match.loser);
        }
    }
    return playerNames;
}

module.exports = participants;