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
        
    
    }

    /**
    * Obtiene la URL de la imagen asociada al arma.
    * @returns {string} La URL de la imagen asociada al arma.
    */
    get getImageUrl(){
        const weaponImage = images.find(image => image.id === this.imageId);
        return weaponImage.url;
        
    }
}


module.exports = Weapon;