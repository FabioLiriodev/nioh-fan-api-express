import * as service from "../services/clans-service";
import { Request, Response} from "express";


export const getClans = async (req: Request, res: Response) => {
    
    const response = await service.getClansService();

    res.status(response.statusCode).json(response.body);
}