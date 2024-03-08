/**
 * Representa una imagen con su identificador único y URL.
 * @param {number} id Identificador único de la imagen.
 * @param {string} url URL de la imagen.
 */
class Image {
    constructor(id, url){
        
        this.id = id;
        this.url = url;
        
    }
}



module.exports = Image;  