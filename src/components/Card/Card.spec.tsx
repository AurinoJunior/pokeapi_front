import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

const mockDataPokemon = {
  name: "mewtwo",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  abilities: ["pressure", "unnerve"],
};

describe("Card", () => {
  it("should render card", () => {
    render(
      <Card
        image={mockDataPokemon.img}
        name={mockDataPokemon.name}
        abilities={mockDataPokemon.abilities}
      />
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /mewtwo/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/habilidades/i)).toBeInTheDocument();
    expect(screen.getByText(/pressure/i)).toBeInTheDocument();
  });

  it("should render card without abilities", () => {
    render(<Card image={mockDataPokemon.img} name={mockDataPokemon.name} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /mewtwo/i,
      })
    ).toBeInTheDocument();
    expect(
      document.querySelector(".card-abilities__title")
    ).not.toBeInTheDocument();
  });
});
