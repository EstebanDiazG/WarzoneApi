    /**
    * Almacena instancias de imágenes con sus identificadores únicos y URLs.
    * @type {Array<Image>}
    */
     let images = [];



/**
 * Representa una imagen con su identificador único y URL.
 * @param {number} id Identificador único de la imagen.
 * @param {string} url URL de la imagen.
 */
class Image {
    constructor(id, url){
        
        this.id = id;
        this.url = url;
        images.push(this);


        return this;
        
    }
    
    
    /**
    * Obtiene todas las imágenes almacenadas.
    * @returns {Array} - Un arreglo con todas las imágenes.
    */
    static getAll(){
        return images;
    }



    /**
    * Elimina una imagen por su ID.
    * @param {number} id - El ID de la imagen a eliminar.
    * @returns {boolean} - Devuelve true si la imagen se eliminó correctamente, de lo contrario, false.
    */
    static deleteById(id) {
        const buscarId = images.find(image => image.id === parseInt(id));

        if(buscarId){
        images = images.filter(image => image.id !== parseInt(id));
        return true;
        } else{
        return false;
        } 
    }



    /**
    * Actualiza la URL de una imagen por su ID.
    * @param {number} id - El ID de la imagen a actualizar.
    * @param {string} url - La nueva URL para la imagen.
    * @returns {Object|null} - Devuelve la imagen actualizada si se encuentra, de lo contrario, devuelve null.
    */
    static updateById (id,url){
        const buscarImage = images.find(image => image.id === parseInt(id));
        if(buscarImage){
        buscarImage.url = url;
        return buscarImage;
        } else{
            return null;
        }
    }



    /**
    * Obtiene una imagen por su ID.
    * @param {number} id - El ID de la imagen a buscar.
    * @returns {Object|null} - La imagen encontrada o null si no se encuentra.
    */
    static getImageById (id) {
        const buscarImageId = images.find(image => image.id === parseInt(id));
        return buscarImageId;
    }
    
    
    /**
    * Obtiene el conteo total de imágenes.
    * @returns {number} - El número total de imágenes.
    */
    static getCountImage (){
        const count = images.length;
        return count;
    };



}// cierra la clase



module.exports = Image;  