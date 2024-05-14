import Card from 'react-bootstrap/Card';
import { MovieDTO } from './movies.model';

interface MovieCardProps {
    movie: MovieDTO;
}

export default function MovieCard(props: MovieCardProps) {
    const handleNavigate = () => {
        window.location.href = `/cartelera/funciones/${props.movie.id}`;
    };
    // no deberia ser asi
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='img-fluid h-75' variant="top" src={props.movie.poster} />
                <Card.Body style={{ minHeight: '13rem' }} className='d-flex flex-column justify-content-between'>
                    <Card.Title>Titulo: {props.movie.title}</Card.Title>
                    <Card.Text>
                        Dirigida por: {props.movie.director}
                    </Card.Text>
                    <Card.Text>
                        {props.movie.isNational ? "Nacional" : "Extranjera"}
                    </Card.Text>
                    <button onClick={handleNavigate} className="btn btn-primary">
                        Ver funciones disponibles
                    </button>
                </Card.Body>
            </Card>
        </>
    )
}

