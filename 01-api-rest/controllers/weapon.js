const Weapon = require ('../models/Weapon');


/**
 * Maneja la solicitud para obtener todas las armas.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getAllWeapons = async (req, res, next) => {
    try{
        const response =  await Weapon.getAll();
        return res.status(200).json(response);

    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}



/**
 * Maneja la solicitud para crear una nueva arma.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const createWeapon = async (req, res, next) => {

    try{

        const name = req.body.name;
        const categoryId = req.body.categoryId;
        const imageId = req.body.imageId;
        if(name && categoryId && imageId){
            const weapon = await Weapon.create (name, categoryId, imageId);
            res.status(201).json(weapon);
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
 * Maneja la solicitud para actualizar un arma por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const updateWeaponById = async (req,res,next) => {

    try {
        const weaponId = req.params.id;
        const { name, categoryId, imageId } = req.body;
        const weaponUpdated = await Weapon.updateById(weaponId,name,categoryId,imageId);
        if(weaponUpdated){
            res.status(201).json(weaponUpdated);
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}




/**
 * Maneja la solicitud para eliminar un arma por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const deleteWeapon = async (req, res, next) => {

    try {

        const deleteId = req.params.id;
        const weaponDelete = await Weapon.deleteById(deleteId);
        if (weaponDelete){
            res.status(200).json({success: true});
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    };
};

/**
 * Maneja la solicitud para obtener un arma por su ID.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const getWeaponById = async (req, res, next) => {

    try{

    const buscarId = req.params.id;
    const searchWeapon = await Weapon.getWeaponById(buscarId);
    if(searchWeapon){
        res.json(searchWeapon);
    } else{
        next();
    }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}

/**
 * Maneja la solicitud para obtener el conteo de armas.
 * 
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
const countWeapon = async (req, res ,next) => {
    try{
        const response = await Weapon.getCountWeapon();
        res.json({total : Number(response)});
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
}



//aun no funciona.
const getImageUrl = async (req, res ,next) => {

    try{
        const buscarId = req.params.id;
        const imageUrl = await Weapon.getImageUrlByWeaponId(buscarId);
        if(imageUrl){
            res.json(imageUrl);
        } else{
            next();
        }
    } catch(e){
        return res.status(500).json({ success: false, data: null, error: e.message });
    }
       
}

module.exports = {getAllWeapons, createWeapon, deleteWeapon,getWeaponById,updateWeaponById,countWeapon,getImageUrl}