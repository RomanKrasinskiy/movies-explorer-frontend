import { SHORTS_DURATION } from "./constants";

export const filteringMovies = (movies, searchParams, setSearchError) => {
    const searchResult = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchParams.keyWords.toLowerCase());
    });
    if (searchParams.isGlobalSearch) {
        localStorage.setItem('movieSearch', JSON.stringify(searchResult));
        localStorage.setItem('shortsMovies', JSON.stringify(searchParams.shortsState));
    }

    if (searchResult.length < 1) {
        setSearchError({
            isError: true,
            text: 'Ничего не найдено',
        })
        return [];
    };

    if (searchParams.shortsState) {
        const filterResult = searchResult.filter(({ duration }) => duration <= SHORTS_DURATION);
        localStorage.setItem('movieSearch', JSON.stringify(filterResult));
        setSearchError(filterResult < 1 ?
            { isError: true, text: 'Ничего не найдено' } :
            { isError: false, text: '' });
        return filterResult;
    }

    setSearchError({ isError: false, text: '' });
    return searchResult;
}