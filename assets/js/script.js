function getPatterns() {
  return [
    {
      name: "Ahoy",
      author: "Lorena G",
      url: "assets/images/backgrounds/ahoy.jpg"
    },
    {
      name: "Alchemy",
      author: "Anton Repponen",
      url: "assets/images/backgrounds/alchemy.gif"
    },
    {
      name: "Asteroids",
      author: "Sanja Kusturica",
      url: "assets/images/backgrounds/asteroids.jpg"
    },
    {
      name: "Pink Dust",
      author: "Park Chu El",
      url: "assets/images/backgrounds/pink-dust.png"
    },
    {
      name: "Brijan",
      author: "Brijan Powell",
      url: "assets/images/backgrounds/brijan.gif"
    },
    {
      name: "Bunting Flag",
      author: "Raul Varela",
      url: "assets/images/backgrounds/bunting-flag.png"
    },
    {
      name: "Memphis Colorful",
      author: "Raul Gaitan",
      url: "assets/images/backgrounds/memphis-colorful.png"
    },
    {
      name: "Random Grey Variations",
      author: "Stefan Aleksić",
      url: "assets/images/backgrounds/random-grey-variations.png"
    },
    {
      name: "Gaming",
      author: "Stephen Gheysens",
      url: "assets/images/backgrounds/gaming-pattern.png"
    },
    {
      name: "Sakura",
      author: "Aslan Zamanloo",
      url: "assets/images/backgrounds/sakura.png"
    },
    {
      name: "Canvas Orange",
      author: "Raul Varela",
      url: "assets/images/backgrounds/canvas-orange.jpg"
    },
    {
      name: "Worms",
      author: "Tomislava Babić",
      url: "assets/images/backgrounds/wormz.png"
    },
    {
      name: "Kiwis",
      author: "Natalia De Frutos",
      url: "assets/images/backgrounds/kiwis.png"
    },
    {
      name: "Graph Paper",
      author: "Tomislava Babić",
      url: "assets/images/backgrounds/graph-paper.png"
    },
    {
      name: "Ocean",
      author: "Jon Vlasach",
      url: "assets/images/backgrounds/ocean.jpg"
    },
    {
      name: "The Illusionist",
      author: "Henry Daubrez",
      url: "assets/images/backgrounds/the-illusionist.png"
    },
    {
      name: "Wild Sea",
      author: "Henry Daubrez",
      url: "assets/images/backgrounds/wild-sea.png"
    },
    {
      name: "Seigaiha",
      author: "Olga Libby",
      url: "assets/images/backgrounds/seigaiha.png"
    },
    {
      name: "White Wood",
      author: "Claudio Guglieri",
      url: "assets/images/backgrounds/white-wood.jpg"
    },
    {
      name: "Plaid",
      author: "Alexey Tretina",
      url: "assets/images/backgrounds/plaid.jpg"
    },
    {
      name: "Kale Salad",
      author: "Claudio Guglieri",
      url: "assets/images/backgrounds/kale-salad.jpg"
    },
    {
      name: "Doodles",
      author: "Nicole Bennett",
      url: "assets/images/backgrounds/doodles.png"
    },
    {
      name: "Naranjas",
      author: "Natalia De Frutos",
      url: "assets/images/backgrounds/naranjas.png"
    },
    {
      name: "Bicycles",
      author: "Shaun Fox",
      url: "assets/images/backgrounds/bicycles.png"
    }
  ];
}

function shuffleArray(array) {
  return array
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
}

const Title = (backgroundUrl, name, author) => `
  <div class="tile" style="background-image: url(${backgroundUrl});">
    <div class="tile-content">
      <h1 class="name">${name}</h1>
      <h2 class="author">${author}</h2>
    </div>
  </div>
`;

function populateGrid() {
  const grid = document.getElementById("grid");
  const patterns = shuffleArray(getPatterns());

  patterns.forEach(pattern => {
    grid.insertAdjacentHTML(
      "beforeend",
      Title(pattern.url, pattern.name, pattern.author)
    );
  });
}

function renderPatternsCounter() {
  const counter = document.getElementById("patternsCounter");
  const patterns = getPatterns();

  counter.textContent = patterns.length;
}

function main() {
  renderPatternsCounter();
  populateGrid();
}

main();
