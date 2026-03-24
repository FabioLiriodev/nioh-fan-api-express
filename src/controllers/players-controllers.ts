import { Request, Response, json } from "express"
import * as service from "../services/players-service";
import { AttributesModel } from '../models/attributes-model';


export const getPlayers = async (req: Request, res: Response) => {

    const httpResponse = await service.getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

type params = {
    id: string;
}

export const getPlayerById = async (req: Request<params>, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await service.getPlayerByIdService(id);

    if (isNaN(id)) return res.status(httpResponse.statusCode).json({ message: "Invalid ID" });
    
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    
    const httpResponse = await service.createPlayerService(bodyValue);
    console.log(bodyValue);
    
    if(httpResponse) return res.status(httpResponse.statusCode).json(httpResponse.body);

    }

    export const deletePlayer = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const httpResponse = await service.deletePlayerService(id);

        return res.status(httpResponse.statusCode).json(httpResponse.body);
    }
export const updatePlayer = async (req:Request, res: Response) => {
        const id = Number(req.params.id);
        const bodyValue: AttributesModel = req.body;

        const httpResponse = await service.updatePlayerService(id, bodyValue);

        return res.status(httpResponse.statusCode).json(httpResponse.body);
}

