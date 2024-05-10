import MovieContainer from './MovieContainer'
import movieList from '../utils/Movies'

function Theaters() {
    return (
        <div>
            <MovieContainer movies={movieList} />
        </div>
    )
}

export default Theaters