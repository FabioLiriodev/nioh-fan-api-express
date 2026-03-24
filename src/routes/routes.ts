import { Router } from "express";
import * as PlayerController from "../controllers/players-controllers";
import * as ClanController from "../controllers/clans-controllers";

const router = Router();

router.get("/players", PlayerController.getPlayers);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.get("/clans", ClanController.getClans);


export default router;