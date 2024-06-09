
let faction = document.getElementById("factionChoice");
let chosenFaction = faction.value;

faction.addEventListener("change", () => {
    chosenFaction = faction.value;
    document.getElementById("factionPlaceholder").style.display = 'none';

    switch(chosenFaction){
        case 'City States':
            document.getElementById("warlordCSInput").style.display = 'block';
            break;
        
        case 'Dweghom':
            document.getElementById("warlordDweghomInput").style.display = 'block';
            break;
        
        case 'Hundred Kingdoms':
            document.getElementById("warlordHundredKingdomsInput").style.display = 'block';
            break;

        case 'Nords':
            document.getElementById("warlordNordsInput").style.display = 'block';
            break;

        case 'Old Dominion':
        document.getElementById("warlordOldDominionInput").style.display = 'block';
            break;

        case 'Sorcerer Kings':
            document.getElementById("warlordSorcererKingsInput").style.display = 'block';
            break;

        case 'Spires':
            document.getElementById("warlordSpiresInput").style.display = 'block';
            break;

        case 'W\'adrhun':
            document.getElementById("warlordWadruhnInput").style.display = 'block';
            break;
    }    
});