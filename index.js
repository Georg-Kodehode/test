let homeGoals = 0;
let awayGoals = 0;


function addGoalsHome(num){
    if (homeGoals+num<=99){
        if(num===1){
            homeGoals += 1;
        }else if(num===2){
            homeGoals += 2;
        }else{
            homeGoals += 3;
        }
    }
    document.getElementById("home-goals").innerText = String(homeGoals);
}

function addGoalsAway(num){
    if (awayGoals+num<=99){
        if(num===1){
            awayGoals += 1;
        }else if(num===2){
            awayGoals += 2;
        }else{
            awayGoals += 3;
        }
    }
    document.getElementById("away-goals").innerText = String(awayGoals);
}
