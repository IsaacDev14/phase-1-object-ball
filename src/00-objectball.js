function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: [
                {
                name: "Alan Anderson",
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
                },
                {
                name: "Reggie Evans",
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
                },
                {
                name: "Brook Lopez",
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
                },
                {
                name: "Mason Plumlee",
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
                },
                {
                name: "Jason Terry",
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
                },
            ],
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: [
                {
                name: "Jeff Adrien",
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
                },
                {
                name: "Bismak Biyombo",
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
                },
                {
                name: "DeSagna Diop",
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
                },
                {
                name: "Ben Gordon",
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
                },
                {
                name: "Brendan Haywood",
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
                },
            ],
        }
    };
}

console.log(gameObject());

debugger

function numPointsScored(playerName) {
    const game = gameObject();

    for (let player of game.home.players) {
        if (player.name === playerName) {
            return player.points;
        }
    }

    for (let player of game.away.players) {
        if (player.name === playerName) {
            return player.points; 
        }
    }

    return null; 
}

console.log(numPointsScored());

debugger

function shoeSize(playerName) {
    const game = gameObject();

    for (let player of game.home.players) {
        if (player.name === playerName) {
            return player.shoe;
        }
    }

    for (let player of game.away.players) {
        if (player.name === playerName) {
            return player.shoe;
        }
    }

    return null; 
}

debugger

function teamColors(teamName) {
    const game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }

    return null; 
}

debugger

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}


console.log(teamNames()); 

debugger

function playerNumbers(teamName) {
    const game = gameObject();
    let team = null;

    if (game.home.teamName === teamName) {
        team = game.home;
    } else if (game.away.teamName === teamName) {
        team = game.away;
    }

    if (team) {
        return team.players.map(player => player.number);
    }

    return null; 
}

debugger
console.log(playerNumbers("Brooklyn Nets"));       
 

function playerStats(playerName) {
    const game = gameObject();

    for (let player of game.home.players) {
        if (player.name === playerName) {
            return player;
        }
    }

    for (let player of game.away.players) {
        if (player.name === playerName) {
            return player;
        }
    }

    return null; 
}

debugger
console.log(playerStats("Ben Gordon"));

function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;

    // Check both teams
    for (let teamKey of ["home", "away"]) {
        for (let player of game[teamKey].players) {
            if (player.shoe > maxShoeSize) {
                maxShoeSize = player.shoe;      
                rebounds = player.rebounds;     
            }
        }
    }

    return rebounds;  
}

console.log(bigShoeRebounds());
debugger


//function the player with most points
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topScorer = "";

    for (let teamKey of ["home", "away"]) {
        for (let player of game[teamKey].players) {
            if (player.points > maxPoints) {
                maxPoints = player.points;      
                topScorer = player.name;        
            }
        }
    }

    return topScorer;
}

debugger
console.log("Player with the most points:", mostPointsScored());


//  team with most poiints
function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let player of game.home.players) {
        homePoints += player.points;
    }

    for (let player of game.away.players) {
        awayPoints += player.points;
    }

   debugger
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

debugger
console.log("Winning team:", winningTeam());


//player with the longest name
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (let player of game.home.players) {
        if (player.name.length > longestName.length) {
            longestName = player.name;
        }
    }

    for (let player of game.away.players) {
        if (player.name.length > longestName.length) {
            longestName = player.name;
        }
    }

    return longestName;
}

debugger
console.log("Player with the longest name:", playerWithLongestName());

//super bonus
function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    let topStealer = "";

    for (let player of game.home.players) {
        if (player.steals > maxSteals) {
            maxSteals = player.steals;
            topStealer = player.name;
        }
    }


    for (let player of game.away.players) {
        if (player.steals > maxSteals) {
            maxSteals = player.steals;
            topStealer = player.name;
        }
    }

    return longestNamePlayer === topStealer;
}

debugger
console.log("Does the player with the longest name steal the most?", doesLongNameStealATon());

