"use client"
import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"

import { Pokemon } from "@/routes/pokemons"
import Image from "next/image"
import colorTypes from "@/config/type"
import {useRouter} from "next/navigation"

interface PokemonCardProps {
  pokemon: Pokemon
}

export function PokemonSmCard({pokemon} : PokemonCardProps) {
  const router = useRouter()

  return (
    <Card className={`group ${pokemon.types[0] && colorTypes[pokemon.types[0]].bg} cursor-pointer grayscale-[50%] hover:grayscale-0 transition-all`} onClick={() => router.push(`http://localhost:3000/pokemons/${pokemon.name}`)}>
      <CardHeader className="p-2">
        <CardTitle className="text-lg">{pokemon.name}</CardTitle>
      </CardHeader>
      <CardContent className="relative w-full aspect-square">
        <Image src={pokemon.image} alt="alt" fill style={{objectFit: "cover"}}/>
      </CardContent>
    </Card>
  )
}
