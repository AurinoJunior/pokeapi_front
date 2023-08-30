import { useState } from "react";
import { api } from "./services/api";
import { IPokemonResponse } from "./@types/pokemon";
import { Button, Card, Field } from "./components";

import pokeapiLogo from "./images/pokeapi-logo.png";
import shadowPokemon from "./images/shadow-pokemon.svg";
import "./PokePage.styles.scss";

export function PokePage() {
  const [pokemon, setPokemon] = useState<IPokemonResponse | null>();
  const [fieldValue, setFieldalue] = useState("");

  async function handleSubmitGetNewPokemon(
    evt: React.FormEvent<HTMLFormElement>
  ) {
    evt.preventDefault();
    const response: IPokemonResponse = await api.getPokemonAbilities(
      fieldValue
    );
    setPokemon(response);
  }

  return (
    <div className="poke-page">
      <img src={pokeapiLogo} />
      <form
        className="poke-page__form-field"
        onSubmit={handleSubmitGetNewPokemon}
      >
        <Field
          label="Nome do pokemon"
          name="pokemon-name"
          placeholder="Ex: pikachu"
          value={fieldValue}
          onChange={setFieldalue}
        />
        <Button>Buscar</Button>
      </form>

      {pokemon ? (
        <Card
          abilities={pokemon.abilities}
          image={pokemon.img}
          name={pokemon.name}
        />
      ) : (
        <Card image={shadowPokemon} name="Quem é esse pokemon?" />
      )}
    </div>
  );
}
