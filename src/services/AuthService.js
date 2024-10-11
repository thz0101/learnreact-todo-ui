import axios from "axios"

const AUTH_REST_API_BASE_URL ='http://localhost:9090/api/auth';

export const registerAPICall= (registerDto)=> axios.post(AUTH_REST_API_BASE_URL+'/register', registerDto);

export const loginAPICall = (loginDto) =>axios.post(AUTH_REST_API_BASE_URL+'/login',loginDto)

export const storeToken = (token) => localStorage.setItem("token",token)

export const getToken = () => localStorage.getItem("token")

export const saveLoggedInUser = (username,role) =>{
    
    sessionStorage.setItem('authenicatedUser',username)
    console.log(role)
    sessionStorage.setItem('role',role);
}

export const isUserLoggedIn = () =>{
    const username = sessionStorage.getItem('authenicatedUser')
    if(username==null){
        return false;
    }else{
        return true;
    }
}

export const getLoggedInUser = () =>{
    const username = sessionStorage.getItem('authenicatedUser')
    return username
}

export const logout = () =>{
    localStorage.clear();
    sessionStorage.clear();
    // window.location.reload(false)
}

export const isAdminUser = () =>{
    let role = sessionStorage.getItem('role');

    if(role!=null && role==='ROLE_ADMIN'){
        return true;
    }else{

        return false;
    }
}