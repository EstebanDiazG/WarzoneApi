const {Router} = require ('express');
const {getAllImages, createImage, deleteImage,updateImageById,getImageById,countImage} = require('../controllers/image');


const imageRoutes = Router();
imageRoutes.get('/', getAllImages);
imageRoutes.get('/:id', getImageById);
imageRoutes.get('/count', countImage);
imageRoutes.post('/', createImage);
imageRoutes.delete('/:id', deleteImage);
imageRoutes.put('/:id', updateImageById);

module.exports = imageRoutes;