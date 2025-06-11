import './App.css';
import Card from './card.jsx';

const cardsData = [
  { title: "Pikachu Sighting!", location: "Viridian Forest", details: "Spotted near the trees.", image: "pikachu.jpg" },
  { title: "Charizard in Action!", location: "Cinnabar Island", details: "Flying over volcano.", image: "charizard.jpg" },
  { title: "Squirtle Squad!", location: "Cerulean City", details: "Near the water fountain.", image: "squirtle.jpg" },
  { title: "Eevee Evolution!", location: "Celadon City", details: "Shopping district sighting.", image: "eevee.jpg" },
  { title: "Mewtwo Encounter!", location: "Unknown Cave", details: "An eerie presence detected.", image: "mewtwo.jpg" },
  { title: "Bulbasaur Bloom!", location: "Viridian Forest", details: "Among the flowers.", image: "bulbasaur.jpg" },
  { title: "Gengar's Shadow!", location: "Lavender Town", details: "Haunting the area.", image: "gengar.jpg" },
  { title: "Snorlax Nap!", location: "Route 12", details: "Blocking the road.", image: "snorlax.jpg" },
  { title: "Jigglypuff Concert!", location: "Goldenrod City", details: "Drawing a sleepy crowd.", image: "jigglypuff.jpg" },
  { title: "Rayquaza in the Sky!", location: "Sky Pillar", details: "A legendary sighting.", image: "rayquaza.jpg" },
];

const App = () => {

  return (
    <div className="App">
        <div className="header">
          <h1>Where's that Pokemon!</h1>
          <h2>use our resources to be the very best and to find them all</h2>
        </div>
        <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
        
      
    </div>
  )
}

export default App
