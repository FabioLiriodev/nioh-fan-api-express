import { AttributesModel } from "../models/attributes-model";
import { PlayerModel } from "../models/players-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";



export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if(data) {
         response = await httpResponse.statusOk(data);
    } else {
        response = await httpResponse.statusNoContent();
    }

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data) {
        response = await httpResponse.statusOk(data)
    } else {
        response = await httpResponse.statusNoContent();
    }
    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if(Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);
        response = await httpResponse.statusCreated();
    } else {
        response = await httpResponse.statusBadRequest();
    }
    return response;
}

export const deletePlayerService = async (id: number) => {
    let response = null;
    
    const isDeleted = await PlayerRepository.deletePlayer(id);

    if(isDeleted) {
        response = await httpResponse.statusOk({message: "Player delete confirm"});
    } else {
        response = await httpResponse.statusBadRequest();
    }

    

    return response;
}

export const updatePlayerService = async (id: number, attributes: AttributesModel) => {
    let response = null;

    const data = await PlayerRepository.findAndModifyPlayer(id, attributes);

    if(Object.keys(data).length === 0) {
        return await httpResponse.statusBadRequest();
    } else {
        response = await httpResponse.statusOk(data);
    }

    

    return response;
}