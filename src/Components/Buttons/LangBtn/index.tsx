import { useTranslation } from 'react-i18next';
import './lang-btn.scss';

const LangBtn = () => {
    const { i18n } = useTranslation();

    const text = () => {
        switch(i18n.language) {
            case 'en':
            case 'en-US':
                return '中';
            case 'zh':
            case 'zh-TW':
                return 'EN';
            default:
                return '--';
        }
    };

    const toggleLang = () => {
        switch(i18n.language) {
            case 'en':
            case 'en-US':
                i18n.changeLanguage('zh-TW');
                break;
            case 'zh':
            case 'zh-TW':
                i18n.changeLanguage('en');
                break;
            default:
                i18n.changeLanguage('en');
        }
    };

    return (
        <div
            className="lang"
            onClick={toggleLang}
        >
            {text()}
        </div>
    );
};

export default LangBtn;