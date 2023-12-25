import { useTranslation } from 'react-i18next';
import { Theme } from '../../Shared/Header';
import './lang-btn.scss';

interface LangBtnProps extends ToggleBtnProps {
    theme?: Theme
}

const LangBtn = ({
    theme='dark'
}: LangBtnProps) => {
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
            id="lang"
            className={theme}
            onClick={toggleLang}
        >
            {text()}
        </div>
    );
};

export default LangBtn;