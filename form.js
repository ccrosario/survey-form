
let faction = document.getElementById("factionChoice");
let factionBG = document.getElementById("registration-form-container");
let registeredPlayersElement = document.getElementById("registered-players-list");
let chosenFaction = faction.value;

const warlordLists = Array.from(document.querySelectorAll('[id*="Input"]'), (list) => {
   return {
    element: list,
    select: list.dataset
    }
});

let registeredPlayers = [
    {
        playerName:"Jacob Soucy",
        faction:"Nords",
        warlord:"Konungyr",
        listPoints:"1990",
        playerPin:"4FK732"

    },

    {
        playerName:"Aleksandar Favrro",
        faction:"Old Dominion",
        warlord:"Fallen Divinity",
        listPoints:"2000",
        playerPin:"1OD0JJ"

    },

    {
        playerName:"Magdalena Mohammad",
        faction:"Spires",
        warlord:"Lineage Prideborne",
        listPoints:"2000",
        playerPin:"H873KJ"

    },

    {
        playerName:"Rue Anker",
        faction:"Hundred Kingdoms",
        warlord:"Priory Commander (Crimson Tower)",
        listPoints:"1985",
        playerPin:"I37NC8"

    }
];

faction.addEventListener("change", () => {
    chosenFaction = faction.value;
    document.getElementById("factionPlaceholder").style.display = 'none';
    factionBG.style.backgroundPosition = 'center';

    if (warlordLists){
        let i=0
        while (i < warlordLists.length) {
            warlordLists[i].element.style.display = 'none';
            i++
        }
    }

    switch(chosenFaction){

        default:
            document.getElementById("factionPlaceholder").style.display = 'inline-block';
            break;

        case 'City States':
            document.getElementById("warlordCSInput").style.display = 'inline-block';
            factionBG.style.backgroundImage = 'linear-gradient(45deg,rgba(255, 255, 255, 0.75),rgba(0, 0, 0, 0.75)),url(\'assets/imgs/Citystate-Massbattle-Illus_web-1.jpg\')';
            factionBG.style.backgroundPosition = 'center bottom';            
            break;
        
        case 'Dweghom':
            document.getElementById("warlordDweghomInput").style.display = 'inline-block';
            factionBG.style.backgroundImage = 'linear-gradient(45deg,rgba(255, 255, 255, 0.75),rgba(0, 0, 0, 0.75)),url(\'assets/imgs/Fall_of_Dragons.jpg\')';
            factionBG.style.backgroundPosition = 'center bottom';
            break;
        
        case 'Hundred Kingdoms':
            document.getElementById("warlordHundredKingdomsInput").style.display = 'inline-block';
            factionBG.style.backgroundImage = 'linear-gradient(45deg,rgba(255, 255, 255, 0.75),rgba(0, 0, 0, 0.75)),url(\'assets/imgs/Huskarls-vs-Crimson-Tower.jpg\')';

            break;

        case 'Nords':
            document.getElementById("warlordNordsInput").style.display = 'inline-block';
            factionBG.style.backgroundImage = 'linear-gradient(45deg,rgba(255, 255, 255, 0.75),rgba(0, 0, 0, 0.75)),url(\'assets/imgs/Giant-vs-worm.jpg\')';
            break;

        case 'Old Dominion':
            document.getElementById("warlordOldDominionInput").style.display = 'inline-block';
            factionBG.style.backgroundImage = 'linear-gradient(45deg,rgba(255, 255, 255, 0.75),rgba(0, 0, 0, 0.75)),url(\'assets/imgs/The-Legions.jpg\')';
            break;

        case 'Sorcerer Kings':
            document.getElementById("warlordSorcererKingsInput").style.display = 'inline-block';
            factionBG.style.backgroundImage = 'linear-gradient(45deg,rgba(255, 255, 255, 0.75),rgba(0, 0, 0, 0.75)),url(\'assets/imgs/sorcerer-kings-e.jpg\')';
            break;

        case 'Spires':
            document.getElementById("warlordSpiresInput").style.display = 'inline-block';
            factionBG.style.backgroundImage = 'linear-gradient(45deg,rgba(255, 255, 255, 0.75),rgba(0, 0, 0, 0.75)),url(\'assets/imgs/NEPENTHE-_The_Battle_q8r2-li.jpg\')';
            factionBG.style.backgroundPosition = 'center top';
            break;

        case 'W\'adrhun':
            document.getElementById("warlordWadruhnInput").style.display = 'inline-block';
            factionBG.style.backgroundImage = 'linear-gradient(45deg,rgba(255, 255, 255, 0.75),rgba(0, 0, 0, 0.75)),url(\'assets/imgs/The-Wadrhun.jpg\')';
            break;
    }    
});

function displayRegisteredPlayers () {
    if (registeredPlayers){
        let i=0
        while (i < registeredPlayers.length) {
            
            const registeredPlayerWrapper = document.createElement("ul");
            registeredPlayersElement.appendChild(registeredPlayerWrapper);

            const playerName = document.createElement("li");
            const playerFaction = document.createElement("li");
            const playerWarlord = document.createElement("li");
            const playerPoints = document.createElement("li");
            const playerPin = document.createElement("li");

                nameNode = document.createTextNode(registeredPlayers[i].playerName);
                playerName.appendChild(nameNode);

                factionNode = document.createTextNode(registeredPlayers[i].faction);
                playerFaction.appendChild(factionNode);

                warlordNode = document.createTextNode(registeredPlayers[i].warlord);
                playerWarlord.appendChild(warlordNode);

                pointsNode = document.createTextNode(registeredPlayers[i].listPoints+'pts');
                playerPoints.appendChild(pointsNode);

                pinNode = document.createTextNode(registeredPlayers[i].playerPin);
                playerPin.appendChild(pinNode);

            registeredPlayerWrapper.append(playerName,playerFaction,playerWarlord,playerPoints,playerPin);
            i++
        }
    }
}
