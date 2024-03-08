
const { images } = require('./Image');


    /**
    * Almacena instancias de armas con sus identificadores únicos, nombres, categorías a las que pertenecen y las identificaciones de las imágenes asociadas.
    * @type {Array<Weapon>}
    */
    let weapons = [];

/**
 * Representa un arma con su identificador único, nombre, categoría a la que pertenece y la identificación de la imagen asociada.
 *  @param {number} id Identificador único del arma.
 *  @param {string} name Nombre del arma.
 *  @param {number} categoryId Identificador de la categoria a la que pertenece el arma.
 *  @param {number} imageId Identificador de la imagen asociada al arma.
 */
class Weapon {
    constructor(id, name, categoryId, imageId){
        
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.imageId = imageId;
        weapons.push(this);

        return this;
    
    }



    /**
    * Obtiene todas las armas almacenadas.
    * @returns {Array} - Un arreglo con todas las armas.
    */
    static getAll(){
        return weapons;
    }



    /**
    * Elimina un arma por su ID.
    * @param {number} id - El ID del arma a eliminar.
    * @returns {boolean} - Devuelve true si el arma se eliminó correctamente, de lo contrario, false.
    */
    static deleteById(id) {
        const buscarWeapon = weapons.find(weapon => weapon.id === parseInt(id));
    
        if (buscarWeapon) {
            weapons = weapons.filter(weapon => weapon.id !== parseInt(id));
            return true;
        } else {
            return false;
        }
    }




    /**
    * Actualiza las propiedades de un arma por su ID.
    * @param {number} id - El ID del arma a actualizar.
    * @param {string} name - El nuevo nombre para el arma.
    * @param {number} categoryId - El nuevo ID de la categoría para el arma.
    * @param {number} imageId - El nuevo ID de la imagen para el arma.
    * @returns {Object|null} - Devuelve el arma actualizada si se encuentra, de lo contrario, devuelve null.
    */
    static updateById (id,name,categoryId,imageId){
        const buscarWeapon = weapons.find(weapon => weapon.id === parseInt(id));
        if(buscarWeapon){
        buscarWeapon.name = name;
        buscarWeapon.categoryId = categoryId;
        buscarWeapon.imageId = imageId;
        return buscarWeapon;
        } else{
            return null;
        }
    }


    /**
    * Obtiene un arma por su ID.
    * @param {number} id - El ID del arma a buscar.
    * @returns {Object|null} - El arma encontrada o null si no se encuentra.
    */
    static getWeaponById (id) {
        const buscarWeaponId = weapons.find(weapon => weapon.id === parseInt(id));
        return buscarWeaponId;
    }
    
    


    /**
    * Obtiene el conteo total de armas.
    * @returns {number} - El número total de armas.
    */
    static getCountWeapon (){
        const count = weapons.length;
        return count;
    };

    

    //en desarrollo
    static getImageUrlByWeaponId(weaponId){
        const weapon = weapons.find(weapon => weapon.id === weaponId);
        const image = images.find(image => image.id === weapon.imageId);
        if(image){
        return image;
        } else{
            return null;
        }
    }
 
}


module.exports = Weapon;