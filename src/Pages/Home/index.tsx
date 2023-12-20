import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './home.scss';

const Home = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, []);

    return (
        <div>
            {t('Home')}
        </div>
    );
};

export default Home;