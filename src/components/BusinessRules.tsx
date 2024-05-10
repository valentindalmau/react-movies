import { FunctionDTO } from './function.model';
import { MovieDTO } from './movies.model';

const TooManyInternationals = (functions: FunctionDTO[], movies: MovieDTO[], date: Date): boolean => {
    const internationalMovies = movies.filter(movie => !movie.isNational);
    const functionsOnDate = functions.filter(func => isSameDate(func.date, date));

    const internationalMovieTitles = internationalMovies.map(movie => movie.title);
    const internationalFunctions = functionsOnDate.filter(func => internationalMovieTitles.includes(func.movieTitle));

    return internationalFunctions.length >= 8;
};

const TooManyOfDirector = (functions: FunctionDTO[], movies: MovieDTO[], directorName: string, date: Date): boolean => {
    const functionsOnDate = functions.filter(func => isSameDate(func.date, date));

    const moviesByDirector = movies.filter(movie => movie.director === directorName);
    const movieTitlesByDirector = moviesByDirector.map(movie => movie.title);

    const functionsByDirector = functionsOnDate.filter(func => movieTitlesByDirector.includes(func.movieTitle));

    return functionsByDirector.length >= 10;
};

const isSameDate = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

export { TooManyInternationals, TooManyOfDirector };
