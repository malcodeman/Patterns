function getPatterns() {
    "use strict";
    var patterns = '{"patterns":[' +
        '{"name":"Ahoy","author":"Lorena G", "url":"url(assets/images/backgrounds/ahoy.jpg)" },' +
        '{"name":"Alchemy","author":"Anton Repponen", "url":"url(assets/images/backgrounds/alchemy.gif)" },' +
        '{"name":"Asteroids","author":"Sanja Kusturica", "url":"url(assets/images/backgrounds/asteroids.jpg)" },' +
        '{"name":"Brijan","author":"Brijan Powell", "url":"url(assets/images/backgrounds/brijan.gif)" },' +
        '{"name":"Bunting Flag","author":"Raul Varela", "url":"url(assets/images/backgrounds/bunting-flag.png)" },' +
        '{"name":"Bicycles","author":"Shaun Fox", "url":"url(assets/images/backgrounds/bicycles.png)" }]}';
    return patterns;
}
function populateGrid() {
    "use strict";
    var grid, patternsObject, i, tile;
    grid = document.getElementById("grid");
    patternsObject = JSON.parse(getPatterns());
    i = 0;
    for (i; i < patternsObject.patterns.length; i += 1) {
        tile = document.createElement("div");
        tile.className = "tile";
        tile.style.backgroundImage = patternsObject.patterns[i].url;
        tile.innerHTML = "<div><h1>" + patternsObject.patterns[i].name + "</h1><h2>" + patternsObject.patterns[i].author + "</h2></div>";
        grid.appendChild(tile);
    }
}
function main() {
    "use strict";
    populateGrid();
}
main();