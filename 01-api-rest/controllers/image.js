const Image = require ('../models/Image');



/**
 * Maneja la solicitud para obtener todas las imágenes.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getAllImages = (req, res, next) => {
    const response = Image.getAll();
    res.json(response);
};



/**
 * Maneja la solicitud para crear una nueva imagen.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const createImage = (req, res, next) => {
    const id = req.body.id;
    const url = req.body.url;
    if(id && url ){
        const image = new Image (id, url);
        res.status(201).json(image);
    } else{
        res.status(400).json({error: {
            status: 400,
            message: 'no se ingresaron todas las propiedades.'
        }});
    }
}



/**
 * Maneja la solicitud para eliminar una imagen por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const deleteImage = (req, res, next) => {
    const deleteId = req.params.id;
    const imageDelete = Image.deleteById(deleteId);
    if (imageDelete){
        res.status(200).json({success: true});
    } else{
        next();
    }
}



/**
 * Maneja la solicitud para actualizar una imagen por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const updateImageById = (req,res,next) => {
    const imageId = req.params.id;
    const { url } = req.body;
    const imageUpdated = Image.updateById(imageId,url);
    if(imageUpdated){
        res.status(201).json(imageUpdated);
    } else{
        next();
    }
}



/**
 * Maneja la solicitud para obtener una imagen por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getImageById = (req, res, next) => {
    const buscarId = req.params.id;
    const searchImage = Image.getImageById(buscarId);
    if(searchImage){
        res.json(searchImage);
    } else{
        next();
    }
}


/**
 * Maneja la solicitud para obtener el conteo de imágenes.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const countImage = (req, res ,next) => {
    const response = Image.getCountImage();
    res.json({total: response});
}

module.exports = {getAllImages, createImage, deleteImage,updateImageById,getImageById,countImage}