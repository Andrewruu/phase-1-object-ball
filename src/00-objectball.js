function gameObject(){
    return {
        home :{
            teamName:"Brooklyn Nets",
            colors: ["Black", "White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                "Manson Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }
            }
        },
        away :{
            teamName:"Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                },
            }
        }      
    };
   
}
function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  };
  
console.log(homeTeamName());

function numPointsScored(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.players;
            for (let key in data) {
                if (key == name){
                let score = data[key];
                return score.points;
                }
             
            }
        }
    }
    
}
function teamColors(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let info = teamObj.colors;
            let data = teamObj.players;
            for (let key in data) {
                if (key == name){
                return info;
                }
             
            }
        }
    }
    
}
function teamNames(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let info = teamObj.teamName;
            let data = teamObj.players;
            for (let key in data) {
                if (key == name){
                return info;
                }
             
            }
        }
    }
    
}
function shoeSize(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.players;
            for (let key in data) {
                if (key == name){
                let shoeSizes = data[key];
                return shoeSizes.shoe;
                }
             
            }
        }
    }
    
}
function playerNumbers(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.players;
            for (let key in data) {
                if (key == name){
                let playerNum = data[key];
                return playerNum.number;
                }
             
            }
        }
    }
    
}
function playerStats(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.players;
            for (let key in data) {
                if (key == name){
                    return data[key];
                    }
            }
        }
    }
    
}
function bigShoeRebounds(){
    let game = gameObject();
    let shoeSizes = 0;
    let playersName ='';
    let reboundsNumber =0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.players;
            for (let key in data) {
                let SS = data[key];
                if(shoeSizes <= SS.shoe){
                    shoeSizes = SS.shoe;
                    playersName = key;
                    reboundsNumber = SS.rebounds;
                }
             
            }
        }
    } 
    return reboundsNumber;
}
function mostPointsScored(){
    let game = gameObject();
    let pointsScored = 0;
    let playersName ='';
    let reboundsNumber =0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.players;
            for (let key in data) {
                let info = data[key];
                if(pointsScored <= info.points){
                    pointsScored = info.points;
                    playersName = key;
                }
             
            }
        }
    } 
    return pointsScored;
}
function winningTeam(){
    let game = gameObject();
    let homePoint = 0;
    let awayPoint = 0;
    let winningName ='';
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (gameKey == 'home'){    
            for (let teamKey in teamObj) {
                let data = teamObj.players;
                for (let key in data) {
                    let info = data[key];
                    homePoint = homePoint + info.points;
                }
            }
        }
        else{
            for (let teamKey in teamObj) {
                let data = teamObj.players;
                for (let key in data) {
                    let info = data[key];
                    awayPoint = awayPoint + info.points
             
                }
            }
        }
        
    }
    if (awayPoint <= homePoint){
            return game['home']['teamName']
    }else{
        return game['away']['teamName']
    }
    
} 
function playerWithLongestName(){
    let game = gameObject();
    let playersName ='';
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.players;
            for (let key in data) {
                if(playersName.length <= key.length){
                    playersName = key;
                }
             
            }
        }
    } 
    return playersName;
}
function doesLongNameStealATon(){
    let game = gameObject();
    let playersName ='';
    let ballSteal = 0;
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            let data = teamObj.players;
            for (let key in data) {
                let stealing = data[key];
                if(ballSteal <=  stealing.steals){
                    ballSteal = stealing.steals;
                    playersName = key;
                }
             
            }
        }
    } 
    if (playersName == playerWithLongestName()){
        return true;
    }
    else{
        return false;
    }
}

    console.log(numPointsScored("Bismak Biyombo"));
    console.log(shoeSize("Bismak Biyombo"));
    console.log(playerNumbers("Bismak Biyombo"));
    console.log(playerStats("Bismak Biyombo"));
    console.log(teamColors("Bismak Biyombo"));
    console.log(teamNames("Bismak Biyombo"));
    console.log(bigShoeRebounds());
    console.log(mostPointsScored());
    console.log(winningTeam());
    console.log(playerWithLongestName());
    console.log(doesLongNameStealATon());