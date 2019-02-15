function getPatterns() {
  "use strict";
  var patterns = [
    {
      name: "Ahoy",
      author: "Lorena G",
      url: "url(assets/images/backgrounds/ahoy.jpg)"
    },
    {
      name: "Alchemy",
      author: "Anton Repponen",
      url: "url(assets/images/backgrounds/alchemy.gif)"
    },
    {
      name: "Asteroids",
      author: "Sanja Kusturica",
      url: "url(assets/images/backgrounds/asteroids.jpg)"
    },
    {
      name: "Pink Dust",
      author: "Park Chu El",
      url: "url(assets/images/backgrounds/pink-dust.png)"
    },
    {
      name: "Brijan",
      author: "Brijan Powell",
      url: "url(assets/images/backgrounds/brijan.gif)"
    },
    {
      name: "Bunting Flag",
      author: "Raul Varela",
      url: "url(assets/images/backgrounds/bunting-flag.png)"
    },
    {
      name: "Memphis Colorful",
      author: "Raul Gaitan",
      url: "url(assets/images/backgrounds/memphis-colorful.png)"
    },
    {
      name: "Random Grey Variations",
      author: "Stefan Aleksić",
      url: "url(assets/images/backgrounds/random-grey-variations.png)"
    },
    {
      name: "Gaming",
      author: "Stephen Gheysens",
      url: "url(assets/images/backgrounds/gaming-pattern.png)"
    },
    {
      name: "Sakura",
      author: "Aslan Zamanloo",
      url: "url(assets/images/backgrounds/sakura.png)"
    },
    {
      name: "Canvas Orange",
      author: "Raul Varela",
      url: "url(assets/images/backgrounds/canvas-orange.jpg)"
    },
    {
      name: "Worms",
      author: "Tomislava Babić",
      url: "url(assets/images/backgrounds/wormz.png)"
    },
    {
      name: "Kiwis",
      author: "Natalia De Frutos",
      url: "url(assets/images/backgrounds/kiwis.png)"
    },
    {
      name: "Graph Paper",
      author: "Tomislava Babić",
      url: "url(assets/images/backgrounds/graph-paper.png)"
    },
    {
      name: "Ocean",
      author: "Jon Vlasach",
      url: "url(assets/images/backgrounds/ocean.jpg)"
    },
    {
      name: "The Illusionist",
      author: "Henry Daubrez",
      url: "url(assets/images/backgrounds/the-illusionist.png)"
    },
    {
      name: "Wild Sea",
      author: "Henry Daubrez",
      url: "url(assets/images/backgrounds/wild-sea.png)"
    },
    {
      name: "Seigaiha",
      author: "Olga Libby",
      url: "url(assets/images/backgrounds/seigaiha.png)"
    },
    {
      name: "White Wood",
      author: "Claudio Guglieri",
      url: "url(assets/images/backgrounds/white-wood.jpg)"
    },
    {
      name: "Plaid",
      author: "Alexey Tretina",
      url: "url(assets/images/backgrounds/plaid.jpg)"
    },
    {
      name: "Kale Salad",
      author: "Claudio Guglieri",
      url: "url(assets/images/backgrounds/kale-salad.jpg)"
    },
    {
      name: "Doodles",
      author: "Nicole Bennett",
      url: "url(assets/images/backgrounds/doodles.png)"
    },
    {
      name: "Naranjas",
      author: "Natalia De Frutos",
      url: "url(assets/images/backgrounds/naranjas.png)"
    },
    {
      name: "Bicycles",
      author: "Shaun Fox",
      url: "url(assets/images/backgrounds/bicycles.png)"
    }
  ];
  return patterns;
}

// Algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

function shuffleArray(originalArray) {
  "use strict";
  var counter, index, temp;
  counter = originalArray.length;
  while (counter) {
    index = Math.floor(Math.random() * counter);
    counter -= 1;
    temp = originalArray[counter];
    originalArray[counter] = originalArray[index];
    originalArray[index] = temp;
  }
}

function renderPatternsCounter() {
  "use strict";
  var counter, patterns;
  counter = document.getElementById("patterns_counter");
  patterns = getPatterns();
  counter.textContent = patterns.length;
}

function populateGrid() {
  "use strict";
  var grid, patternsObject, i, tile;
  grid = document.getElementById("grid");
  patternsObject = getPatterns();
  shuffleArray(patternsObject);
  for (i = 0; i < patternsObject.length; i += 1) {
    tile = document.createElement("div");
    tile.className = "tile";
    tile.style.backgroundImage = patternsObject[i].url;
    tile.innerHTML =
      "<div><h1>" +
      patternsObject[i].name +
      "</h1><h2>" +
      patternsObject[i].author +
      "</h2></div>";
    grid.appendChild(tile);
  }
}

function main() {
  "use strict";
  renderPatternsCounter();
  populateGrid();
}
main();
