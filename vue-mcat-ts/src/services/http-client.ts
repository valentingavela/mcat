import axios from 'axios';

export class HttpClient {
    static data = axios.get('https://3s06oj11m3.execute-api.us-east-1.amazonaws.com/prod/get-audios');

    static async getData(): Promise<any> {
        return await this.data;
    }
}