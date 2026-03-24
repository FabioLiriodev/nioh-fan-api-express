import * as httpResponse from './../utils/http-helper';
import * as ClanRepository from "../repositories/clans-repository";

export const getClansService = async () => {
    const data = await ClanRepository.findPlayerClan();
    const response = httpResponse.statusOk(data);
    return response;
}