import React, { useState } from 'react';
import { Button, Dropdown, Form, Modal, Table } from 'react-bootstrap';
import functionList from '../utils/Functions';
import ModalElement from './ModalElement';
import { FunctionDTO } from './function.model';

const FunctionTable = () => {
    const [showInsert, setShowInsert] = useState(false);
    const handleCloseInsert = () => setShowInsert(false);
    const handleShowInsert = () => setShowInsert(true);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const initialFunctions = functionList
    const [functions, setFunctions] = useState(initialFunctions);

    const [editModalState, setEditModalState] = useState({
        show: false,
        functionId: 0,
        defaultTitle: '',
        defaultDate: new Date(),
        defaultPrice: 0
    });
    const deleteFunction = (id: number) => {
        const updatedFunctions = functions.filter(func => func.id !== id);
        const updatedFunctionsWithSequentialIds = updatedFunctions.map((func, index) => ({
            ...func,
            id: index + 1
        }));
        setFunctions(updatedFunctionsWithSequentialIds);
    }
    const addFunction = (newFunction: FunctionDTO) => {
        setFunctions([...functions, newFunction]);
    };
    const updateFunction = (newFunction: FunctionDTO) => {
        console.log(functions[newFunction.id - 1])
        functions[newFunction.id - 1] = newFunction
        setFunctions(functions);
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
                                        <Dropdown.Item onClick={() => {
                                            setEditModalState({
                                                show: true,
                                                functionId: func.id,
                                                defaultTitle: func.movieTitle,
                                                defaultDate: func.date,
                                                defaultPrice: func.price
                                            });
                                        }}>Editar</Dropdown.Item>
                                        <Dropdown.Item onClick={() => deleteFunction(func.id)}>Borrar</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* <ModalElement defaultId={functions.length + 1} defaultTitle={''} defaultDate={new Date} defaultPrice={0} handleClose={handleCloseInsert} show={showInsert} setShow={setShowInsert} functionApply={addFunction} />
                                <ModalElement defaultId={editFunctionId} defaultTitle={editFunctionTitle} defaultDate={editFunctionDate} defaultPrice={editFunctionPrice} handleClose={handleCloseEdit} show={showEdit} setShow={setShowEdit} functionApply={updateFunction} /> */}

                                {/* Modal para editar función */}
                                <ModalElement
                                    defaultId={editModalState.functionId}
                                    defaultTitle={editModalState.defaultTitle}
                                    defaultDate={editModalState.defaultDate}
                                    defaultPrice={editModalState.defaultPrice}
                                    handleClose={() => setEditModalState({ ...editModalState, show: false })}
                                    show={editModalState.show}
                                    functionApply={updateFunction}
                                    functionsNow={functions}
                                />

                                {/* Modal para agregar nueva función */}
                                <ModalElement
                                    defaultId={functions.length + 1}
                                    defaultTitle=""
                                    defaultDate={new Date()}
                                    defaultPrice={0}
                                    handleClose={handleCloseInsert}
                                    show={showInsert}
                                    functionApply={addFunction}
                                    functionsNow={functions}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default FunctionTable;
