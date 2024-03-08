const express = require ('express');
const handlerResponse = require ('./middlewares/handlerResponse');
const handlerRequest = require ('./middlewares/handlerRequest');
const weaponRoutes = require ('./routes/weapon');
const categoryRoutes = require('./routes/category');
const imageRoutes = require ('./routes/image');
const app = express();



//middlewares
app.use (express.json());
app.use(handlerRequest);

//enrutamiento
app.use('/weapon', weaponRoutes);
app.use('/category', categoryRoutes);
app.use('/image', imageRoutes);

//middlewares despues del enrutamiento para manejar informacion que no existe.
app.use(handlerResponse);



//servidor 
app.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000.')
})