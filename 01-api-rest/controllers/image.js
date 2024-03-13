const Image = require ('../models/Image');



/**
 * Maneja la solicitud para obtener todas las imágenes.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getAllImages = async (req, res, next) => {
    try{
        const response =  await Image.getAll();
        return res.status(200).json(response);

    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
};



/**
 * Maneja la solicitud para crear una nueva imagen.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const createImage = async (req, res, next) => {

    try{
        const url = req.body.url;
        if(url){
            const image = await Image.create (url);
            res.status(201).json(image);
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
 * Maneja la solicitud para eliminar una imagen por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const deleteImage = async (req, res, next) => {
    
    try {

        const deleteId = req.params.id;
        const imageDelete = await Image.deleteById(deleteId);
        if (imageDelete){
            res.status(200).json({success: true});
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message }); 
    }
}



/**
 * Maneja la solicitud para actualizar una imagen por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const updateImageById = async (req,res,next) => {
    try {
        const imageId = req.params.id;
        const { url } = req.body;
        const imageUpdated = await Image.updateById(imageId,url);
        if(imageUpdated){
            res.status(201).json(imageUpdated);
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}



/**
 * Maneja la solicitud para obtener una imagen por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getImageById = async (req, res, next) => {

    try{
        const buscarId = req.params.id;
        const searchImage = await Image.getImageById(buscarId);
        if(searchImage){
            res.json(searchImage);
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}


/**
 * Maneja la solicitud para obtener el conteo de imágenes.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const countImage = async (req, res ,next) => {
    try{
        const response = await Image.getCountImage();
        res.json({total: response});
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}

module.exports = {getAllImages, createImage, deleteImage,updateImageById,getImageById,countImage}