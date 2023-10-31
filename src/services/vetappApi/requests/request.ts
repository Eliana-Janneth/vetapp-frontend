import { TSendRequestPayload, TRejectRequestPayload } from '../types';
import { service } from '../../service';
import { adaptRejectedRequest, adaptSendRequest } from '../adapters';

export const getSendRequest = async () => {
    const response = (await service.get('request/0/')) as TSendRequestPayload[];
    return adaptSendRequest(response);
};
export const getRejectedRequest = async () => {
    const response = (await service.get('request/2/')) as TRejectRequestPayload[];
    return adaptRejectedRequest(response);
};
