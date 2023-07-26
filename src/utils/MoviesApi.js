import { apiMoviesConfig } from '../utils/constants';
import { chechResponse } from '../utils/chechResponse';

export const getMoviesApi = async () => {
    const res = await fetch(apiMoviesConfig.url, {
        headers: apiMoviesConfig.headers,
    })
    return chechResponse(res);
}
