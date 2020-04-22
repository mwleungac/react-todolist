import axios from 'axios';

export default class TodoApi{
    static getTodoList(){
        return axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
    }
}