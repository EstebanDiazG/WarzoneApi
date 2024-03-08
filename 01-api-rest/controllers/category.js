const Category = require ('../models/Category');



/**
 * Maneja la solicitud para obtener todas las categorías.
 * 
 * Esta función utiliza el método getAll() de la clase Category
 * para obtener todas las categorías y luego responde con
 * la lista de categorías en formato JSON.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getAllCategory = (req, res, next) => {
    const response = Category.getAll();
    res.json(response);
};



/**
 * Maneja la solicitud para crear una nueva categoría.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const createCategory = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    if(id && name ){
        const category = new Category (id, name);
        res.status(201).json(category);
    } else{
        res.status(400).json({error: {
            status: 400,
            message: 'no se ingresaron todas las propiedades.'
        }});
    }
}



/**
 * Maneja la solicitud para eliminar una categoría por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const deleteCategory = (req, res, next) => {
    const deleteId = req.params.id;
    const categoryDelete = Category.deleteById(deleteId);
    if (categoryDelete){
        res.status(200).json({success: true});
    } else{
        next();
    }
}



/**
 * Maneja la solicitud para obtener el conteo de categorías.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const countCategory = (req, res ,next) => {
    const response = Category.getCountCategory();
    res.json(response);
}



/**
 * Maneja la solicitud para obtener una categoría por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getCategoryById = (req, res, next) => {
    const buscarId = req.params.id;
    const searchCategory = Category.getCategoryById(buscarId);
    if(searchCategory){
        res.json(searchCategory);
    } else{
        next();
    }
}


/**
 * Maneja la solicitud para actualizar una categoría por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const updateCategoryById = (req,res,next) => {
    const categoryId = req.params.id;
    const { name } = req.body;
    const categoryUpdated = Category.updateById(categoryId,name);
    if(categoryUpdated){
        res.status(201).json(categoryUpdated);
    } else{
        next();
    }
}

module.exports = {getAllCategory, createCategory, deleteCategory,updateCategoryById,countCategory,getCategoryById}