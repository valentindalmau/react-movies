import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';
import ModalElement from './ModalElement';
import { FunctionDTO } from './function.model';
import { addFunction, deleteFunction, getFunctions, updateFunction } from './apiService';

const defaultIDSequentially = (functionslist: FunctionDTO[]) => {
    if (functionslist.length > 0) {
        // Obtener el último elemento de la lista functions usando slice
        const lastFunction = functionslist.slice(-1)[0];

        // Acceder al ID del último elemento
        const lastFunctionId = lastFunction.id;
        return lastFunctionId + 1

    } else {
        const lastFunctionId = 1
        return lastFunctionId
    }

}
const FunctionTable = () => {
    const [showInsert, setShowInsert] = useState(false);
    const [functions, setFunctions] = useState<FunctionDTO[]>([]);
    const [editModalState, setEditModalState] = useState({
        show: false,
        functionId: 0,
        defaultTitle: '',
        defaultDate: new Date(),
        defaultPrice: 0
    });

    useEffect(() => {
        fetchFunctions();
    }, []);

    const fetchFunctions = async () => {
        try {
            const data = await getFunctions();
            const functionsWithDates = data.data.map((func: FunctionDTO) => ({
                ...func,
                date: new Date(func.date) // es necesario parsear la fecha a tipo date, el resto se deja como esta con ...func
            }));
            setFunctions(functionsWithDates);
        } catch (error) {
            console.error("Failed to fetch functions:", error);
        }
    };

    const handleCloseInsert = () => { setShowInsert(false); }
    const handleShowInsert = () => { setShowInsert(true); }
    const handleCloseEdit = () => { setEditModalState({ ...editModalState, show: false }); }
    const handleShowEdit = (func: FunctionDTO) => {
        setEditModalState({
            show: true,
            functionId: func.id,
            defaultTitle: func.movieTitle,
            defaultDate: func.date,
            defaultPrice: func.price
        });
    };


    const handleAddFunction = async (newFunction: FunctionDTO) => {
        try {
            await addFunction(newFunction);
            fetchFunctions();
        } catch (error) {
            console.error("Failed to add function:", error);
        }
        handleCloseInsert();
    };

    const handleUpdateFunction = async (newFunction: FunctionDTO) => {
        try {
            await updateFunction(newFunction.id, newFunction);
            fetchFunctions();
        } catch (error) {
            console.error("Failed to update function:", error);
        }
        handleCloseEdit();
    };

    const handleDeleteFunction = async (id: number) => {
        try {
            await deleteFunction(id);
            fetchFunctions();
        } catch (error) {
            console.error("Failed to delete function:", error);
        }
    };

    return (
        <>
            <Button onClick={handleShowInsert} className='w-25 m-2 btn btn-primary'> + </Button>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Fecha</th>
                        <th>Precio</th>
                        <th>Gestionar</th>
                    </tr>
                </thead>
                <tbody>
                    {functions.map((func) => (
                        <tr key={func.id}>
                            <td>{func.id}</td>
                            <td>{func.movieTitle}</td>
                            <td>{func.date.toLocaleString()}</td>
                            <td>{func.price}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Acciones
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleShowEdit(func)}>Editar</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDeleteFunction(func.id)}>Borrar</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <ModalElement
                defaultId={editModalState.functionId}
                defaultTitle={editModalState.defaultTitle}
                defaultDate={editModalState.defaultDate}
                defaultPrice={editModalState.defaultPrice}
                handleClose={() => setEditModalState({ ...editModalState, show: false })}
                show={editModalState.show}
                functionApply={handleUpdateFunction}
                functionsNow={functions}
            />

            <ModalElement
                defaultId={defaultIDSequentially(functions)}
                defaultTitle=""
                defaultDate={new Date()}
                defaultPrice={0}
                handleClose={handleCloseInsert}
                show={showInsert}
                functionApply={handleAddFunction}
                functionsNow={functions}
            />
        </>
    );
};

export default FunctionTable;
