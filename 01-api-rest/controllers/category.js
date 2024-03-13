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
const getAllCategory = async (req, res, next) => {
    try{
        const response = await Category.getAll();
        res.json(response);
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
};



/**
 * Maneja la solicitud para crear una nueva categoría.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const createCategory = async (req, res, next) => {

    try{
        const name = req.body.name;
        if(name){
            const category = await Category.create (name);
            res.status(201).json(category);
        } else{
            res.status(400).json({error: {
                status: 400,
                message: 'no se ingresaron todas las propiedades.'
            }});
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}



/**
 * Maneja la solicitud para eliminar una categoría por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const deleteCategory = async (req, res, next) => {

    try{
        const deleteId = req.params.id;
        const categoryDelete = await Category.deleteById(deleteId);
        if (categoryDelete){
            res.status(200).json({success: true});
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}



/**
 * Maneja la solicitud para obtener el conteo de categorías.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const countCategory = async (req, res ,next) => {
    try{
        const response = await Category.getCountCategory();
        res.json({total: response});
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}



/**
 * Maneja la solicitud para obtener una categoría por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getCategoryById = async (req, res, next) => {
    try{

        const buscarId = req.params.id;
        const searchCategory = await Category.getCategoryById(buscarId);
        if(searchCategory){
            res.json(searchCategory);
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message }); 
    }
}


/**
 * Maneja la solicitud para actualizar una categoría por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const updateCategoryById = async (req,res,next) => {
    try{
        const categoryId = req.params.id;
        const { name } = req.body;
        const categoryUpdated = await Category.updateById(categoryId,name);
        if(categoryUpdated){
            res.status(201).json(categoryUpdated);
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}

module.exports = {getAllCategory, createCategory, deleteCategory,updateCategoryById,countCategory,getCategoryById}