import { useTranslation } from 'react-i18next';
import './menu.scss';
import { Theme } from '../Shared/Header';
import { useLocation, useNavigate } from 'react-router-dom';


export interface MenuOption {
    i18n: string,
    name: string,
    subMenu?: MenuOption[],
    pathname: string
}

interface MenuProps {
    options?: MenuOption[],
    theme?: Theme,
    onClick?: () => void
}


const Menu = ({
    options=[],
    theme='dark',
    onClick=() => {}
}: MenuProps) => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    // TODO:
    // 改用滾動事件
    return (
        <div
            id="menu"
            className={theme}
        >
            <div className="menu-container">
                {
                    options.map((opt) => (
                        <div
                            className={`menu-item ${location.pathname === opt.pathname ? 'active' : ''}`}
                            onClick={() => {
                                navigate(opt.pathname);
                                onClick();
                            }}
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