import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");

  const getPokemon = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      console.log(res.data);
      setPokemon(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <div className="App">
      <div className="pokedex">
        <div className="main-container">
          <div className="hinge"></div>
          <div className="blue-light"></div>
          <div className="lights">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="screen-border">
            <div className="corner-triangle"></div>
            <div className="red-dot-1"></div>
            <div className="red-dot-2"></div>
            <div className="screen">
              <img
                className="pokemon-picture"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt=""
              />
            </div>
            <div className="red-dot-3"></div>
            <div className="speakerbars">
              <div className="speakerbar"></div>
              <div className="speakerbar"></div>
              <div className="speakerbar"></div>
              <div className="speakerbar"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div onClick={handleSubmit} className="black-button"></div>
            <input
              className="number-input"
              type="number"
              placeholder="000"
              maxLength="3"
              min="1"
              max="898"
              value={pokemon}
              onChange={handleChange}
            />
          </form>
          <div className="red-pill-button"></div>
          <div className="blue-pill-button"></div>
          <div className="d-pad">
            <div className="circle"></div>
          </div>
        </div>
        <div className="flap-container">
          <div className="large-screen">
            <p>
              Name: <span>{pokemon.name}</span>
            </p>
            <p>
              Height:{" "}
              <span>
                {pokemon.weight && pokemon.weight * 10 + " cm"}
              </span>
            </p>
            <p>
              Weight:{" "}
              <span>
                {pokemon.weight && pokemon.weight / 10 + " kg"}
              </span>
            </p>
          </div>
          <div className="blue-buttons">
            <div className="blue-button"></div>
            <div className="blue-button"></div>
            <div className="blue-button"></div>
            <div className="blue-button"></div>
            <div className="blue-button"></div>
            <div className="blue-button"></div>
            <div className="blue-button"></div>
            <div className="blue-button"></div>
            <div className="blue-button"></div>
            <div className="blue-button"></div>
          </div>
          <div className="black-pill-buttons">
            <div className="black-pill-button"></div>
            <div className="black-pill-button"></div>
          </div>
          <div className="white-buttons">
            <div className="white-button"></div>
            <div className="white-button"></div>
          </div>
          <div className="yellow-light"></div>
          <div className="small-screens">
            <div className="small-screen-flap">
              <p id="type-1">{pokemon.types && pokemon.types[0].type.name}</p>
            </div>
            <div className="small-screen-flap">
              <p id="type-2">
                {pokemon.types &&
                  pokemon.types[1] &&
                  pokemon.types[1].type.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
