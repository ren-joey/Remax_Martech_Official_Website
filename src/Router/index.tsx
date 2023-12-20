import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Service from '../Pages/Service';

const Router = () => {
    return (
        <BrowserRouter>
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