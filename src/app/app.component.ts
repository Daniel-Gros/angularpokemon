import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId : string){
    const id = +pokemonId;
    const pokemon: Pokemon|undefined  = this.pokemonList.find(pokemon => pokemon.id == id)
    if(pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
    this.pokemonSelected = pokemon;
  } else {
    console.log(`Vous avez demandé un pokemon qui n'existe pas`)}
    this.pokemonSelected = pokemon;
  }
}
