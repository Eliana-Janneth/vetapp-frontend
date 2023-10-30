import { TSendRequestsPayload, TRejectRequestsPayload } from '../types';
import { service } from '../../service';
import { adaptRejectedRequest, adaptSendRequest } from '../adapters';

export const getSendRequest = async () => {
    const response = (await service.get('request/0')) as TSendRequestsPayload;
    return adaptSendRequest(response);
};
export const getRejectedRequest = async () => {
    const response = (await service.get('request/2')) as TRejectRequestsPayload;
    return adaptRejectedRequest(response);
};
