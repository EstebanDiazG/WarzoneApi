const Weapon = require ('../models/Weapon');


/**
 * Maneja la solicitud para obtener todas las armas.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getAllWeapons = (req, res, next) => {
    const response = Weapon.getAll();
    res.json(response);
}



/**
 * Maneja la solicitud para crear una nueva arma.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const createWeapon = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const categoryId = req.body.categoryId;
    const imageId = req.body.imageId;
    if(id && name && categoryId && imageId){
        const weapon = new Weapon (id, name, categoryId, imageId);
        res.status(201).json(weapon);
    } else{
        res.status(400).json({error: {
            status: 400,
            message: 'no se ingresaron todas las propiedades.'
        }});
    }
}



/**
 * Maneja la solicitud para actualizar un arma por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const updateWeaponById = (req,res,next) => {
    const weaponId = req.params.id;
    const { name, categoryId, imageId } = req.body;
    const weaponUpdated = Weapon.updateById(weaponId,name,categoryId,imageId);
    if(weaponUpdated){
        res.status(201).json(weaponUpdated);
    } else{
        next();
    }
}




/**
 * Maneja la solicitud para eliminar un arma por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const deleteWeapon = (req, res, next) => {
    const deleteId = req.params.id;
    const weaponDelete = Weapon.deleteById(deleteId);
    if (weaponDelete){
        res.status(200).json({success: true});
    } else{
        next();
    }

}

/**
 * Maneja la solicitud para obtener un arma por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getWeaponById = (req, res, next) => {
    const buscarId = req.params.id;
    const searchWeapon = Weapon.getWeaponById(buscarId);
    if(searchWeapon){
        res.json(searchWeapon);
    } else{
        next();
    }
}

/**
 * Maneja la solicitud para obtener el conteo de armas.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const countWeapon = (req, res ,next) => {
    const response = Weapon.getCountWeapon();
    res.json(response);
}



//aun no funciona.
const getImageUrl = (req, res ,next) => {
    const buscarId = req.params.id;
    const imageUrl = Weapon.getImageUrlByWeaponId(buscarId);
    if(imageUrl){
        res.json(imageUrl);
    } else{
        next();
    }
}

module.exports = {getAllWeapons, createWeapon, deleteWeapon,getWeaponById,updateWeaponById,countWeapon,getImageUrl}