import axios from 'axios';
import React, { ReactElement, useMemo, useState } from 'react';
import JSON_en from '../i18n/en.json';
import JSON_zh_TW from '../i18n/zh-TW.json';
import JSON_photo from './photos';

interface APIProviderProps {
    host: string,
    APIhost: string
    en: I18nRoot
    zh_TW: I18nRoot
    photos: FilesAPIResponse
    fetchEN: () => Promise<I18nTranslation>
    fetchTW: () => Promise<I18nTranslation>
    fetchPhoto: () => Promise<FilesAPIResponse>
    loaded: boolean
}

export type LangType = 'en'|'zh-TW';

const host = 'http://127.0.0.1';
const APIRoute = '/api';
const APIhost = `${host}${APIRoute}`;
export const APIProviderContext = React.createContext<APIProviderProps>({
    host,
    APIhost,
    en: JSON_en,
    zh_TW: JSON_zh_TW,
    photos: JSON_photo,
    fetchEN: (() => {}) as any,
    fetchTW: (() => {}) as any,
    fetchPhoto: (() => {}) as any,
    loaded: false
});

const fetchLang = (lang: LangType) => (
    axios<I18nTranslation>({
        method:'GET',
        url: `${host}${APIRoute}/i18n/${lang}`
    })
);

const APIProvider = ({ children }:{
    children: ReactElement
}) => {
    const [en, setEN] = useState<I18nRoot>(JSON_en);
    const [zh_TW, setTW] = useState<I18nRoot>(JSON_zh_TW);
    const [photos, setPhotos] = useState<FilesAPIResponse>(JSON_photo);
    const [fetched, setFetched] = useState([false, false, false]);
    const loaded = useMemo(() => {
        return !fetched.includes(false);
    }, [fetched]);

    const setFetchedIdx = (idx: 0|1|2) => {
        setFetched(a => {
            const arr = [...a];
            arr[idx] = true;
            return arr;
        });
    };

    const fetchEN = () => (
        new Promise<I18nTranslation>((res) => {
            fetchLang('en').then((response) => {
                setEN({
                    translation: response.data
                });
                res(response.data);
                
            }).catch(() => {}).finally(() => setFetchedIdx(0));
        })
    );

    const fetchTW = () => (
        new Promise<I18nTranslation>((res) => {
            fetchLang('zh-TW').then((response) => {
                setTW({
                    translation: response.data
                });
                res(response.data);
            }).catch(() => {}).finally(() => setFetchedIdx(1));
        })
    );

    const fetchPhoto = () => (
        new Promise<FilesAPIResponse>((res) => {
            axios({
                method: 'GET',
                url: `${APIhost}/files`
            }).then((response) => {
                const keys = Object.keys(response.data);

                keys.forEach((key) => {
                    response.data[key] = `${host}${response.data[key]}`;
                });

                res(response.data);
                setPhotos(response.data);
            }).catch(() => {}).finally(() => setFetchedIdx(2));
        })
    );

    return (
        <APIProviderContext.Provider
            value={{
                host,
                APIhost,
                en,
                zh_TW,
                photos,
                fetchEN,
                fetchTW,
                fetchPhoto,
                loaded
            }}
        >
            {children}
        </APIProviderContext.Provider>
    );
};

export default APIProvider;