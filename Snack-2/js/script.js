const footballTeams = [
    {
        nome: "Palermo",
        puntiFatti: 0,
        falliSubiti: 0, 
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0, 
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0, 
    },
    {
        nome: "Verona",
        puntiFatti: 0,
        falliSubiti: 0,  
    },
    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0, 
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0, 
    },
]



for (let i = 0; i < footballTeams.length; i++) {
    const team = footballTeams[i];
    const {nome} = team;
    let randomPoints = Math.round(Math.random()*100 + 1);
    let randomFouls = Math.round(Math.random()*100 + 1);
    let {puntiFatti, falliSubiti} = team;
    team.puntiFatti = randomPoints;
    team.falliSubiti = randomFouls;
   
    console.log(team);

}


// Creazione nuovo array
let newFootballTeam = [];

for (let i = 0; i < footballTeams.length; i++) {
    const team = footballTeams[i];
   const newTeam = {nome, falliSubiti} = team;
    newFootballTeam.push({nome, falliSubiti})
}

newFootballTeam.push({nome: "Lazio", puntiFatti: 0, falliSubiti: 0})
console.log(footballTeams, newFootballTeam);
