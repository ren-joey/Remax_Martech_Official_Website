import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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