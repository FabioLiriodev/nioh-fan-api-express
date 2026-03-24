import { HttpResponse } from "../models/http-response-model";


export const statusOk = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    };
};

export const statusCreated = async(): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Successful"
        }
    }
}

export const statusNoContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const statusBadRequest = async (): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}