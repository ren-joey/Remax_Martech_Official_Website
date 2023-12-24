import { useTranslation } from 'react-i18next';
import './menu.scss';
import { Theme } from '../Shared/Header';


export interface MenuOption {
    i18n: string,
    name: string,
    subMenu?: MenuOption[],
    onClick: () => void
}

interface MenuProps {
    options?: MenuOption[],
    theme?: Theme
}


const Menu = ({
    options=[],
    theme='dark'
}: MenuProps) => {
    const { t } = useTranslation();

    return (
        <div
            id="menu"
            className={theme}
        >
            <div className="menu-container">
                {
                    options.map((opt) => (
                        <div
                            className="menu-item"
                            onClick={opt.onClick}
                            key={opt.i18n}
                        >
                            { t(opt.i18n) }
                            <div className="hover-bg"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Menu;