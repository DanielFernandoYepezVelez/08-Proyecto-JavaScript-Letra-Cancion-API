/*APP tiene la funcionalidad Funcionalidad Principal */
import { API } from './01-api.js';
import * as UI from './02-interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    /* Obtener Datos De Los Inputs */
    const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        UI.divMensajes.innerHTML = 'Error.....Todos lo campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

    } else {
        const api = new API(artista, cancion);
        api.consultarApi()
            .then(data => {
                if (data.response.lyrics) {
                    const letra = data.response.lyrics;

                    UI.divResultado.textContent = letra;
                    UI.formularioBuscar.reset();

                } else {
                    UI.divMensajes.innerHTML = 'La Canción No Existe Prueba Con Otra Busquedad';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.innerHTML = '';
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();
                    }, 3000);
                }
            })
    }
});