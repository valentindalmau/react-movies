import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FunctionDTO } from './function.model';
import { TooManyInternationals, TooManyOfDirector } from './BusinessRules';
import movieList from '../utils/Movies';
import { MovieDTO } from './movies.model';


const formatDate = (date: Date) => {
    if (!date) return '';
    return date.toISOString().slice(0, 16);
};

export default function ModalElement(props: ModalELementProps) {

    const [title, setTitle] = useState(props.defaultTitle);
    const [date, setDate] = useState(formatDate(props.defaultDate));
    const [price, setPrice] = useState(props.defaultPrice);

    const getDirectorNameForFunction = (func: FunctionDTO, movies: MovieDTO[]): string | undefined => {
        const movie = movies.find(movie => movie.title === func.movieTitle);
        console.log(func.movieTitle)
        console.log(props.defaultTitle)
        return movie ? movie.director : undefined;
    };

    useEffect(() => {
        setTitle(props.defaultTitle);
        setDate(formatDate(props.defaultDate));
        setPrice(props.defaultPrice);
    }, [props.defaultId, props.defaultTitle, props.defaultDate, props.defaultPrice]);

    const handleSaveChanges = () => {
        const functionData = {
            id: props.defaultId,
            movieTitle: title,
            date: new Date(date),
            price: price
        };
        const directorName = getDirectorNameForFunction(functionData, movieList)
        console.log(functionData)
        if (typeof directorName === 'string') {
            const tooManyInternationals = TooManyInternationals(props.functionsNow, movieList, functionData.date);
            const tooManyOfDirector = TooManyOfDirector(props.functionsNow, movieList, directorName, functionData.date);
            !tooManyInternationals && !tooManyOfDirector ? props.functionApply(functionData) : console.log('Se incumple alguna regla')
        } else {
            console.log('El nombre del director no está disponible para esta función.');
        }



        props.handleClose();
    };
    const defaultDateString = props.defaultDate.toISOString().slice(0, 16);

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Gestor de funciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label >ID</Form.Label>
                        <Form.Control type="text" readOnly defaultValue={props.defaultId} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control as="select" value={title} onChange={(e) => setTitle(e.target.value)}>
                            <option value="">Seleccionar película...</option>
                            {movieList.map((movie) => (
                                <option key={movie.title} value={movie.title}>
                                    {movie.title}
                                </option>
                            ))}
                        </Form.Control>

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Fecha y Hora</Form.Label>
                        <Form.Control type="datetime-local" defaultValue={defaultDateString} onChange={(e) => setDate(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" defaultValue={props.defaultPrice} onChange={(e) => setPrice(parseFloat(e.target.value))} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
interface ModalELementProps {
    defaultId: number
    defaultDate: Date
    defaultPrice: number
    defaultTitle: string
    handleClose: () => void
    show: boolean
    functionApply: (newFunction: FunctionDTO) => void
    functionsNow: FunctionDTO[]

}
