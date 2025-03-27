import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})
export default HTTP