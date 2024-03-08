

/**
 * Almacena instancias de imágenes con sus identificadores únicos y URLs.
 * @type {Array<Image>}
 */
const images = [];

const createImage = function(image){
    images.push(image);
}

/**
 * Esta función devuelve el número total de instancias de la clase Image creadas.
 * @returns {number} - Número de imágenes creadas.
 */
const countImage = function(){
    const count = images.length;
    return count;
};


/**
 * Esta función devuelve una instancia de la clase Image correspondiente al identificador proporcionado.
 * @param {number} imageId - Identificador único de la imagen que se desea obtener.
 * @returns {Image} - Retorna la instancia de la clase Image asociada al identificador.
 */
const getImageById = function(imageId){
    const image = images.find(({id}) => id === imageId);
    return image;
}

module.exports = {countImage, getImageById, createImage};