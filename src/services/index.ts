import * as request from './vetappApi/requests';
import * as socket from './socket';
export const vetappApi = {
    ...request,
    ...socket,
};
export * from './vetappApi/types';
