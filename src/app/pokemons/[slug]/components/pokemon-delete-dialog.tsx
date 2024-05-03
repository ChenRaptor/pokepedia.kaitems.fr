"use client"
import { Button } from "@/registry/new-york/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import { TrashIcon } from "lucide-react"

interface PokemonEditDialogProps {
  pkmn: Pokemon
  token: string
}

import { useRouter } from "next/navigation"

import { deletePokemon, Pokemon } from "@/routes/pokemons"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/new-york/ui/tooltip"
import { toast } from "@/registry/new-york/ui/use-toast"
export function PokemonDeleteDialog({pkmn, token}: PokemonEditDialogProps) {
  const router = useRouter()

  const deleteCallback = async () => {
    const data = await deletePokemon(token, pkmn.name);
    if ("error" in data) {
      toast({
        className: "bg-red-500 text-white",
        title: "Invalid credentials",
        description: "There was a problem with your request.",
      })
    }
    else {
      router.push("/")
      toast({
        title: "Supression réussie",
        description: "Vous avez supprimé le pokemon avec succès.",
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="absolute top-36 right-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className=" w-12 h-12 cursor-pointer" variant="outline">
              <TrashIcon className="scale-150 stroke-red-500"/>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Supprimer le pokemon</p>
          </TooltipContent>
        </Tooltip>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Supprimer ce pokemon</DialogTitle>
          <DialogDescription>
            Delete this pokemon here. Click on delete.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={deleteCallback}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
