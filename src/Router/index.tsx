import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Service from '../Pages/Service';
import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { APIProviderContext } from '../Context/APIProvider';

const Router = () => {
    const { i18n } = useTranslation();
    const {
        fetchEN,
        fetchTW,
        fetchPhoto
    } = useContext(APIProviderContext);

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);

        fetchEN().then((en) => {
            i18n.addResources('en', 'translation', {...en});
            i18n.addResources('en-US', 'translation', {...en});
        });

        fetchTW().then((tw) => {
            i18n.addResources('zh-TW', 'translation', {...tw});
        });

        fetchPhoto();
    }, []);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about-us"
                    element={<AboutUs />}
                />
                <Route
                    path="/service/:service"
                    element={<Service />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;