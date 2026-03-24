import { AttributesModel } from '../models/attributes-model';
import { PlayerModel } from '../models/players-model';
import fs from "fs/promises";


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  const data = await fs.readFile("./src/database/players-database.json", "utf-8");
  const database: PlayerModel[] = JSON.parse(data);
  return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const database = await findAllPlayers();
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (player:PlayerModel) => {
    const database = await findAllPlayers();
    database.push(player);
    await fs.writeFile("./src/database/players-database.json",JSON.stringify(database, null, 2), "utf-8");
    return database;
}

export const deletePlayer = async (id: number) => {
    const database = await findAllPlayers();
    const index = database.findIndex(player => player.id === id);

    if(index !== -1) {
      database.splice(index, 1);
      await fs.writeFile("./src/database/players-database.json", JSON.stringify(database, null, 2), "utf-8");
      return true;
    } 
      return false;
}

export const findAndModifyPlayer = async (id: number, attributes: AttributesModel): Promise<PlayerModel> => {
  const database = await findAllPlayers();  
  const playerIndex = database.findIndex(player => player.id === id);

    if(playerIndex !== -1) {
      database[playerIndex].attributes = attributes;
      await fs.writeFile("./src/database/players-database.json", JSON.stringify(database, null, 2), "utf-8"); 
    }

    return database[playerIndex];
}
