// LIBRARIES 
import { Router } from "express";
// CONTROLLERS
import productController from "./controller"; 
// MIDDLEWARES
import schemaValidator from "../../middleware/schemaValidators.middlewares";
// VALIDATORS
//import { productCreatePayloadValidator, productUpdatePayloadValidator } from "./validator"; 

const productRouter = Router();

// Crear un nuevo producto (solo accesible para roles de administrador o vendedor)
productRouter.post(
    "/create",
    productController.create
);

// Obtener todos los productos
productRouter.get(
    "/",
    productController.getAllProducts
);

// Obtener un producto por su ID
productRouter.get(
    "/:id",
    productController.getById
);

// Actualizar un producto por su ID (solo accesible para roles de administrador o vendedor)
productRouter.put(
    "/:id",
    productController.update
);

// Eliminar un producto por su ID (solo accesible para roles de administrador o vendedor)
productRouter.delete(
    "/:id",
    productController.delete
);

export default productRouter;
