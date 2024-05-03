"use client"

import { Button } from "@/registry/new-york/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/new-york/ui/tooltip";
import { toast } from "@/registry/new-york/ui/use-toast";
import { markTrainer } from "@/routes/trainer";
import { OrbitIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PokemonCatchButton({token, pkmnId}: {token: string, pkmnId: string}) {
  const router = useRouter()

  const seenIcon = async () => {
    await markTrainer(token, pkmnId, true);
    toast({
      title: "Pokemon attrapé avec succès",
      description: "Le pokemon a été ajouté à votre collection.",
    })
    router.refresh()
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={seenIcon} className="absolute top-[17rem] right-4 w-12 h-12 cursor-pointer" variant="outline">
          <OrbitIcon className="scale-150 stroke-green-500"/>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Attraper le pokemon</p>
      </TooltipContent>
    </Tooltip>

  )
}