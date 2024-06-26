import { fetchApi } from "."

const prefix = "trainer"

interface Trainer {
  trainerName: string,
  id: string,
  creationDate: string,
  pkmnSeen: [],
  pkmnCatch: [],
  username: string,
  image: string
}

interface TrainerDTO {
  imgUrl: string,
  trainerName: string
}

async function getTrainer(token: string) : Promise<Trainer | {error: string}> {
  return await fetchApi('GET',`${prefix}`, {token}) as unknown as Trainer | {error: string}
}

async function createTrainer(token: string, trainerDTO: TrainerDTO) : Promise<Trainer | {error: string}> {
  return await fetchApi('POST',`${prefix}`, {body: trainerDTO, token}) as unknown as Trainer | {error: string}
}

async function deleteTrainer(token: string) : Promise<Trainer | {error: string}> {
  return await fetchApi('DELETE',`${prefix}`, {token}) as unknown as Trainer | {error: string}
}

async function markTrainer(token: string, pkmnId: string, captured: boolean) : Promise<{error: string}> {
  return await fetchApi('POST',`${prefix}/mark?captured=${captured}&pkmnId=${pkmnId}`, {token, noreturn: true}) as unknown as {error: string}
}

export { getTrainer, createTrainer, deleteTrainer, markTrainer }

export type {TrainerDTO, Trainer}