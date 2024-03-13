import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-type': 'application/json',
        'accept': '*/*'
    }
});

export const fetchData = ({ method = 'GET', url = '/', data = [], isAuth = true, backToken = null }) => {


    return new Promise((resolve, reject) => {
     
        if (isAuth && backToken != null) {
            
             const token = "vide"
           
            this.fetchBase.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        instance({
            method,
            url: `${url}`,
            data
        }).then((res) => {


            resolve(res)
        }).catch((err) => {
            console.log(err)
            reject(err)
        })
    })
}