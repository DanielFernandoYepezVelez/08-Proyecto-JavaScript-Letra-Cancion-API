export class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    async consultarApi() {
        /* El Fetch Construye automaticamente la promesa */
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);
        const response = await url.json();

        return {
            response
        }
    }
}