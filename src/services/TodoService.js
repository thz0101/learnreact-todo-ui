import axios from "axios"
import { getToken } from "./AuthService";

const BASE_REST_API ='http://localhost:9090/api/todos';

// export function getAllTodos(){
//     return axios.get(BASE_REST_API);
// }

axios.interceptors.request.use(function(config){
    console.log('123')
    config.headers['Authorization'] = getToken()
    return config; 
},function(error){
    return Promise.reject(error)
})

export const getAllTodos = ()=> {return axios.get(BASE_REST_API)}

export const saveTodo = (todo)=> {return axios.post(BASE_REST_API,todo)}

export const getTodo = (id)=> {return axios.get(BASE_REST_API+'/'+id)}

export const updateTodo = (id,todo)=> {return axios.put(BASE_REST_API+'/'+id,todo)}

export const deleteTodo = (id)=> {return axios.delete(BASE_REST_API+'/'+id)}

export const completeTodo = (id)=> {return axios.patch(BASE_REST_API+'/'+id+'/complete')}
export const inCompleteTodo = (id)=> {return axios.patch(BASE_REST_API+'/'+id+'/in-complete')}