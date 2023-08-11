import { API_MOVIES_CONFIG } from '../utils/constants';
import { chechResponse } from '../utils/chechResponse';

export const getMoviesApi = async () => {
    const res = await fetch(API_MOVIES_CONFIG.url, {
        headers: API_MOVIES_CONFIG.headers,
    })
    return chechResponse(res);
}
