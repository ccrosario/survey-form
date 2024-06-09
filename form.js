
let faction = document.getElementById("factionChoice");
let chosenFaction = faction.value;

const warlordLists = Array.from(document.querySelectorAll('[id*="Input"]'), (list) => {
   return {
    element: list,
    select: list.dataset
    }
});


faction.addEventListener("change", () => {
    chosenFaction = faction.value;
    document.getElementById("factionPlaceholder").style.display = 'none';

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
            break;
        
        case 'Dweghom':
            document.getElementById("warlordDweghomInput").style.display = 'inline-block';
            break;
        
        case 'Hundred Kingdoms':
            document.getElementById("warlordHundredKingdomsInput").style.display = 'inline-block';
            break;

        case 'Nords':
            document.getElementById("warlordNordsInput").style.display = 'inline-block';
            break;

        case 'Old Dominion':
        document.getElementById("warlordOldDominionInput").style.display = 'inline-block';
            break;

        case 'Sorcerer Kings':
            document.getElementById("warlordSorcererKingsInput").style.display = 'inline-block';
            break;

        case 'Spires':
            document.getElementById("warlordSpiresInput").style.display = 'inline-block';
            break;

        case 'W\'adrhun':
            document.getElementById("warlordWadruhnInput").style.display = 'inline-block';
            break;
    }    
});