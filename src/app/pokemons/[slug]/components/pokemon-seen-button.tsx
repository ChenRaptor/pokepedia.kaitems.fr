"use client"

import { Button } from "@/registry/new-york/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/new-york/ui/tooltip";
import { toast } from "@/registry/new-york/ui/use-toast";
import { markTrainer } from "@/routes/trainer";
import { EyeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PokemonSeenButton({token, pkmnId}: {token: string, pkmnId: string}) {
  const router = useRouter()

  const seenIcon = async () => {
    await markTrainer(token, pkmnId, false);
    toast({
      title: "Nouvelle rencontre",
      description: "Vous avez vu un nouveau pokemon.",
    })
    router.refresh()
  }

  return (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button onClick={seenIcon} className="absolute top-52 right-4 w-12 h-12 cursor-pointer" variant="outline">
        <EyeIcon className="scale-150 stroke-green-500"/>
      </Button>
    </TooltipTrigger>
    <TooltipContent side="left">
      <p>Voir le pokemon</p>
    </TooltipContent>
  </Tooltip>
  )
}