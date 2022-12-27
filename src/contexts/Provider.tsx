import {createContext, useContext, useState} from "react";
import {MovieType, SeriesType} from "../types/types";
import axios from "axios";
import Api from "../api/apiConfig";

const context = createContext({
    error: false,
    setError: (val: boolean) => {
    },
    query: '',
    setQuery: (val: string) => {
    },
    searchType: '',
    setSearchType: (val: string) => {
    },
    setItem: (val: MovieType & SeriesType) => {
    },
    loading: true,
    setLoading: (val: boolean) => {
    }
});

export const Provider = ({children}: any) => {
    const api = new Api();
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");
    const [searchType, setSearchType] = useState("");
    const [loading, setLoading] = useState(true);
    // @ts-ignore
    const [item, setItem] = useState(JSON.parse(localStorage.getItem("ITEM")));

    function setItemInLocalstorage(data: any) {
        setItem(data);
        localStorage.setItem('ITEM', JSON.stringify(data))
    }

    const getMovieDetails = async (id: number | string, type: string) => {
        setLoading(true);
        setItemInLocalstorage(null);
        axios.get(api.getDetails(id, type)).then(async (res) => {
            await setItemInLocalstorage({...res.data, type});
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }).catch(() => {
            setTimeout(() => {
                setLoading(false);
                setError(true);
            }, 1000)
        });
    }
    return (
        <context.Provider
            value={{
                query,
                setQuery,
                searchType,
                setSearchType,
                error,
                setError,
                item,
                setItem,
                setItemInLocalstorage,
                loading,
                setLoading, getMovieDetails
            }}
        >
            {children}
        </context.Provider>
    );
};
export const UseContext = () => useContext(context);
