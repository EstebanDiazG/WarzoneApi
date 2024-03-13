const connection = require ('../utils/lib/pg')


/**
 * Representa una imagen con su identificador único y URL.
 * @param {number} id Identificador único de la imagen.
 * @param {string} url URL de la imagen.
 */
class Image {
    constructor(id, url){
        
        this.id = id;
        this.url = url;
        return this;
        
    }
    
    
    /**
    * Obtiene todas las imágenes almacenadas.
    * @returns {Array} - Un arreglo con todas las imágenes.
    */
    static getAll = async () => {
        const query = await connection.query(`SELECT * FROM image`);
        return query.rows||[];     
    };



    /**
    * Elimina una imagen por su ID.
    * @param {number} id - El ID de la imagen a eliminar.
    * @returns {boolean} - Devuelve true si la imagen se eliminó correctamente, de lo contrario, false.
    */
    static deleteById = async (id)  => {
        const query = await connection.query(`DELETE FROM image WHERE id = $1`,[id]);
        return query.rows||[];
    }



    /**
    * Actualiza la URL de una imagen por su ID.
    * @param {number} id - El ID de la imagen a actualizar.
    * @param {string} url - La nueva URL para la imagen.
    * @returns {Object|null} - Devuelve la imagen actualizada si se encuentra, de lo contrario, devuelve null.
    */
    static updateById = async (id,url) =>{
        if(url){
            const response = await connection.query (
                `UPDATE image
                SET url = $1
                WHERE id = $2
                RETURNING id, url`,
                [ url, id]
            );
            return  response.rowCount ? response.rows[0] : null; 
        };   
    }


    /**
     * Crea una nueva URL de imagen en la base de datos.
     * @param {string} url - La URL de la imagen que se va a insertar.
     * @returns {Object|null} - Devuelve el objeto de la URL de imagen recién creada si la inserción fue exitosa, de lo contrario, devuelve null.
     */
    static create = async (url) => {
        
        if (url) {
        
            const response = await connection.query(
            `INSERT INTO image(
                url
            ) VALUES(
                $1
            ) RETURNING id, url`, [url]
            ); 
  
        return  response.rowCount ? response.rows[0] : null;   
    };
    }




    /**
    * Obtiene una imagen por su ID.
    * @param {number} id - El ID de la imagen a buscar.
    * @returns {Object|null} - La imagen encontrada o null si no se encuentra.
    */
    static getImageById  = async (id) => {
        const query = await connection.query(`SELECT * FROM image WHERE id = $1`,[id]);
        return query.rowCount ? query.rows[0] : null;
    }
    
    
    /**
    * Obtiene el conteo total de imágenes.
    * @returns {number} - El número total de imágenes.
    */
    static getCountImage = async () =>{
        const query = await connection.query(`SELECT COUNT(*) FROM image`);
        return query.rows||[];
    };



}// cierra la clase



module.exports = Image;  