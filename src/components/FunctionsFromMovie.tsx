import { Link, useParams } from 'react-router-dom'
import { MovieDTO } from './movies.model'
import functionList from '../utils/Functions'
import movieList from '../utils/Movies'
import { FunctionDTO } from './function.model'
import { Button, Table } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

function FunctionsFromMovie() {
    const { id }: any = useParams();
    const movieId = parseInt(id);

    const movieWithId: MovieDTO | undefined = movieList.find(movie => movie.id === movieId);

    if (!movieWithId) {
        return <div>¡Película no encontrada!</div>;
    }

    const filteredFunctions: FunctionDTO[] = functionList.filter(func => func.movieTitle === movieWithId.title);

    const handleNavigate = () => {
        window.location.href = `/cartelera`;
        //Tampoco deberia ser asi
    };

    return (
        <div className='p-5 d-flex justify-content-evenly vh-100'>
            <div className='w-100' style={{ maxWidth: '400px' }}>
                <Image src={movieWithId.poster} className='img-fluid w-100 h-100' fluid />

            </div>
            <div style={{ minWidth: '600px' }}>
                <h2 className='text-white p-3'>{movieWithId.title}</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>

                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFunctions.map((func) => (
                            <tr key={func.id}>

                                <td><Badge bg="secondary">{func.date.toLocaleString()}</Badge>
                                </td>
                                <td>{func.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <button onClick={handleNavigate} className="btn btn-primary">
                    Volver a cartelera
                </button>
            </div>

        </div>
    );
}

export default FunctionsFromMovie;