"use client";

import { TooltipProvider } from '@/registry/new-york/ui/tooltip';
import { PokemonEditDialog } from './pokemon-edit-dialog';
import { PokemonDeleteDialog } from './pokemon-delete-dialog';
import PokedexVoiceSpeak from './text-to-speech';
import PokemonSeenButton from './pokemon-seen-button';
import PokemonCatchButton from './pokemon-catch-button';

export default function TooltipWrapper({ token, pokemon, audioText }: { token: any, pokemon: any, audioText: string}) {
  return (
    <TooltipProvider>
      <PokemonEditDialog pkmn={pokemon}/>
      {token && <PokemonDeleteDialog pkmn={pokemon} token={token.value}/>}
      <PokedexVoiceSpeak text={audioText}/>
      {token && <>
        <PokemonSeenButton pkmnId={pokemon.id} token={token.value}/>
        <PokemonCatchButton pkmnId={pokemon.id} token={token.value}/>
      </>}
    </TooltipProvider>
  )
}