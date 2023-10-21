import { json } from "react-router-dom";
import { auth } from "./api_keys";




let options = {
 header: {
    headers: {
        Authorization: `Bearer ${auth}`
    }
 }
}

let fetch_func = async (url,options) =>{
    let data =await fetch(url, options).then((resp)=>{
        return (resp.json())
    })
    return data
}
export let fetch_movie  = async () =>{
    let url = "https://api.themoviedb.org/3/movie/11?api_key=646ee4899ba4e1e81bf45f185cbe081e"
    return fetch_func(url,options)
    
}



export let top_rated = async ()  => {
    let url = "https://api.themoviedb.org/3/movie/top_rated"
    return fetch_func(url,options)

}


export let popular = async ()  => {
    let url = "https://api.themoviedb.org/3/movie/popular"
    return fetch_func(url,options)

}

