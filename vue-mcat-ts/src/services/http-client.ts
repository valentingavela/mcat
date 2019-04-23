import axios from 'axios'

export class HttpClient {
    static data = axios.get('https://pokeapi.co/api/v2/pokemon/ditto/');

    static async getData() {
        return await this.data;
    }
}