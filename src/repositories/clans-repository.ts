import { ClanModel } from "../models/clans-model";
import fs from "fs/promises";

const database = [
  { "id": 1, "name": "William Adams", "clan": "Tokugawa" },
  { "id": 2, "name": "Okatsu", "clan": "Tokugawa" },
  { "id": 3, "name": "Hattori Hanzo", "clan": "Tokugawa" },
  { "id": 4, "name": "Fuku", "clan": "Saito" },
  { "id": 5, "name": "Honda Tadakatsu", "clan": "Honda" },
  { "id": 6, "name": "Ii Naomasa", "clan": "Ii" },
  { "id": 7, "name": "Oda Nobunaga", "clan": "Oda" },
  { "id": 8, "name": "Tenkai", "clan": "Akechi" },
  { "id": 9, "name": "Edward Kelley", "clan": "Nenhum (Alquimista)" },
  { "id": 10, "name": "Tokugawa Ieyasu", "clan": "Tokugawa" }
    ]

export const findPlayerClan = async (): Promise<ClanModel[]> => {
    const data = await fs.readFile("./src/database/clans-database.json", "utf-8");
    const clans: ClanModel[] = JSON.parse(data);
     return clans;
}