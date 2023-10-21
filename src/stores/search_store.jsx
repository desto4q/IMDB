import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


export const  useSearchStore = create(persist(
    (set)=>{
        return ({
            search:"",
            setSearch: (string)=> {
                set({search: string})
            }
        })
    }, {
        name:"search-term",
        storage: createJSONStorage(()=> sessionStorage),
    }
))