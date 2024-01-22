import { useTranslation } from 'react-i18next';
import './menu.scss';
import { Theme } from '../Shared/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobDataContext } from '../../Context/GlobDataProvider';


export interface MenuOption {
    i18n: string,
    name: string,
    subMenu?: MenuOption[],
    pathname?: string,
    onClick?: () => void
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
    const { device } = useContext(GlobDataContext);

    return (
        <div
            id="menu"
            className={`${theme} ${device}`}
        >
            <div className="menu-container">
                {
                    options.map((opt) => (
                        <div
                            className={`menu-item ${location.pathname === opt.pathname ? 'active' : ''}`}
                            onClick={() => {
                                onClick();
                                if (location.pathname === '/') {
                                    if (opt.onClick) opt.onClick();
                                    else navigate(opt?.pathname || '/');
                                } else {
                                    navigate(opt?.pathname || '/');
                                }
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