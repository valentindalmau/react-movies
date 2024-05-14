from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import json
from fastapi.responses import JSONResponse
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

functions_file_path = os.path.join(current_dir, 'Functions.json')

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Function(BaseModel):
    id: int
    movieTitle: str
    date: str
    price: float


@app.get("/funciones", tags=["Functions"])
async def get_functions() -> dict:
    try:
        with open(functions_file_path, 'r') as f:
            functions = json.load(f)
        return { "data": functions }
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="No se encontraron funciones.")

@app.post("/funciones", tags=["Functions"])
async def add_function(function: Function) -> dict:
    try:
        with open(functions_file_path, 'r') as f:
            functions = json.load(f)
    except FileNotFoundError:
        functions = []

    functions.append(function.model_dump())

    with open(functions_file_path, 'w') as f:
        json.dump(functions, f, indent=4)

    return { "data": "Función agregada exitosamente." }


@app.put("/funciones/{id}", tags=["Functions"])
async def update_function(id: int, function: Function) -> dict:
    try:
        with open(functions_file_path, 'r') as f:
            functions = json.load(f)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="No se encontraron funciones.")

    for func in functions:
        if func["id"] == id:
            func.update(function.model_dump())
            with open(functions_file_path, 'w') as f:
                json.dump(functions, f, indent=4)
            return { "data": f"Función con ID {id} actualizada exitosamente." }

    raise HTTPException(status_code=404, detail=f"No se encontró la función con ID {id}.")

@app.delete("/funciones/{id}", tags=["Functions"])
async def delete_function(id: int) -> dict:
    try:
        with open(functions_file_path, 'r') as f:
            functions = json.load(f)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="No se encontraron funciones.")

    for i, func in enumerate(functions):
        if func["id"] == id:
            del functions[i]
            with open(functions_file_path, 'w') as f:
                json.dump(functions, f, indent=4)
            return { "data": f"Función con ID {id} eliminada exitosamente." }

    raise HTTPException(status_code=404, detail=f"No se encontró la función con ID {id}.")

@app.exception_handler(Exception)
async def exception_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"message": "Error interno del servidor"},
    )
