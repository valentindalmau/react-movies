import { MovieDTO } from './movies.model'
import MovieCard from './MovieCard'

function MovieContainer({ movies }: { movies: MovieDTO[] }) {
    const cardsDisplay = movies.map((movie: MovieDTO) => <MovieCard key={movie.id} movie={movie} />)
    return (
        <div className='d-flex justify-content-center p-5 pt-3'>
            <div className='Movie-container'>
                {cardsDisplay}
            </div>
        </div>
    )
}

export default MovieContainer
