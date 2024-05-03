"use server"
import { getTokenInCookies } from "@/lib/cookies";
import { getTrainer } from "@/routes/trainer";
import { redirect } from "next/navigation";
import CreateTrainerForm from "./components/create-trainer-form";
import DeleteTrainerButton from "./components/delete-trainer-button";
import Image from "next/image";
import { Separator } from "@/registry/new-york/ui/separator";
import { getPokemonList, Pokemon } from "@/routes/pokemons";
import { toast } from "@/registry/new-york/ui/use-toast";
import { PokemonSmCard } from "./components/pokemon-sm-card";

export default async function RegisterPage() {

    const token = await getTokenInCookies()
    if (token === undefined) {
      redirect("/")
    }

    const value = token?.value ? await getTrainer(token.value) : null;

    return (
      <div className="container mx-auto py-16 min-h-screen">
        {
          value ? "error" in value ?
          <CreateTrainerForm token={token.value} />
          :
            <>
              <h1 className="text-5xl font-extrabold dark:text-white">Votre dresseur pokemon</h1>
              <div className="grid lg:grid-cols-[65fr,35fr] gap-8 mt-8">
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold dark:text-white">Pokémons attrapés</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {(await getPokemonList(value.pkmnCatch).then(res => {
                    if ("error" in res) {
                      toast({
                        className: "bg-red-500 text-white",
                        title: "Invalid credentials",
                        description: "There was a problem with your request.",
                      });
                      return [];
                    }
                    else {
                      return res ?? [];
                    }
                  })).map((pkmn, index) => {
                    return (
                      <PokemonSmCard key={`pkmnCatch-${index}`} pokemon={pkmn}/>
                    )
                  })}
                  </div>

                  <h3 className="text-3xl font-bold dark:text-white">Pokémons vus</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {(await getPokemonList(value.pkmnSeen).then(res => {
                    if ("error" in res) {
                      toast({
                        className: "bg-red-500 text-white",
                        title: "Invalid credentials",
                        description: "There was a problem with your request.",
                      });
                      return [];
                    }
                    else {
                      return res ?? [];
                    }
                  })).map((pkmn: Pokemon, index) => {
                    return (
                      <PokemonSmCard key={`pkmnSeen-${index}`} pokemon={pkmn}/>
                    )
                  })}
                  </div>
                </div>
                <div className="-order-1 lg:order-1 w-full">
                  <div className="flex flex-col gap-4 h-full">
                    <h3 className="text-3xl font-bold dark:text-white">Profil</h3>
                    <div className="relative w-full h-auto aspect-square max-w-[30rem]">
                      <Image src={value.image} alt="" fill style={{objectFit: "cover"}}></Image>
                    </div>
                    <h2 className="text-4xl font-bold dark:text-white">{value.trainerName}</h2>
                    <Separator />
                    <div className="flex items-center justify-between w-full">
                      <p>Avatar de:</p>
                      <p>{value.username}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p>Date de création:</p>
                      <p>{new Date(value.creationDate).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p>Pokémons vus:</p>
                      <p>{value.pkmnSeen.length}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p>Pokémons attrapés:</p>
                      <p>{value.pkmnCatch.length}</p>
                    </div>
                    <Separator />
                    <DeleteTrainerButton token={token.value} />
                  </div>
                </div>
              </div>
            </>
          : null
        }
      </div>
    );
}