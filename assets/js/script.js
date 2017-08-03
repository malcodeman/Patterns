function getPatterns() {
    "use strict";
    var patterns = '{"bg": [{"url": "url(assets/images/backgrounds/ahoy.jpg"}, {"url": "url(assets/images/backgrounds/alchemy.gif"}, {"url": "url(assets/images/backgrounds/asteroids.jpg"}, {"url": "url(assets/images/backgrounds/bicycles.png"}, {"url": "url(assets/images/backgrounds/brijan.gif"}, {"url": "url(assets/images/backgrounds/bunting-flag.png"}] }';
    return patterns;
}

function populateGrid() {
    "use strict";
    var grid, patternsObject, i, tile;
    grid = document.getElementById("grid");
    patternsObject = JSON.parse(getPatterns());
    i = 0;
    for (i; i < patternsObject.bg.length; i += 1) {
        tile = document.createElement("div");
        tile.className = "tile";
        tile.style.backgroundImage = patternsObject.bg[i].url;
        //tile.innerHTML = "<div><h1>" + patternsObject.bg[i].name + "</h1><h2>" + patternsObject.bg[i].author + "</h2></div>";
        grid.appendChild(tile);
    }
}

function main() {
    "use strict";
    populateGrid();
}
main();