let team = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 99,
        GD: 39
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 99,
        GD: 39
    },
];  

//Kiem tra ten
for (let i = 0; i < team.length; i++) {
    for ( let j = 0; j < team.length; j++){
        if ((i != j) && (team[i].name === team[j].name)) {
            alert("Object error");
        }
    }
}

for (let i = 0; i < team.length; i++) {
    for ( let j = 0; j < team.length; j++){
        if ((i != j) && (team[i].points !== team[j].points)) {
            //Kiem tra diem
            team.sort(function (a, b) {
                return a.points - b.points;
            });
        }
        else if (i !== j && (team[i].points === team[j].points) && (team[i].GD !== team[j].GD)) {
            //Kiem tra GD
            team.sort(function (a, b) {
            return a.GD - b.GD;
            });
        }
        else if (i !== j && (team[i].GD === team[j].GD)) {
            //Kiem tra theo Alphabet
            team.sort(function(a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            else if (nameA > nameB) {
                return -1;
            }
            });
        }
    }
}

for (let i = 0; i < team.length; i++) {
    team[i].position = team.length - i;
}

console.log(team);