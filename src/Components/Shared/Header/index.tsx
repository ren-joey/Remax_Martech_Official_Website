import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './header.scss';
import ASScroll from '@ashthornton/asscroll';
import LangBtn from '../../Buttons/LangBtn';
import MenuBtn from '../../Buttons/MenuBtn';
import Menu, { MenuOption } from '../../Menu';
import { useNavigate } from 'react-router-dom';
import Martech from '../../Logos/Martech';
import Remax from '../../Logos/Remax';

export type Theme = 'light'|'dark';

interface HeaderProps {
    asscroll?: ASScroll|null,
    theme?: Theme
}


const Header = ({
    asscroll=null,
    theme='dark'
}: HeaderProps) => {
    const [pos, setPos] = useState(asscroll?.currentPos || window.scrollY);
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const [menuState, setMenuState] = useState(false);

    const options: MenuOption[] = [
        {
            i18n: 'home',
            name: 'Home',
            pathname: '/'
        },
        {
            i18n: 'about_us_title',
            name: 'About Us',
            pathname: '/about-us'
        },
        {
            i18n: 'service_1_title',
            name: 'HOT WORK',
            pathname: '/service/1'
        },
        {
            i18n: 'service_2_title',
            name: 'MAIN ENGINE OVERHAUL & GENERATOR OVERHAUL',
            pathname: '/service/2'
        },
        {
            i18n: 'service_3_title',
            name: 'ELECTRIC MOTOR & GENERATOR REPAIRING',
            pathname: '/service/3'
        },
        {
            i18n: 'service_4_title',
            name: 'HYDRAULIC MOTOR REPAIRING',
            pathname: '/service/4'
        },
        {
            i18n: 'service_5_title',
            name: 'MACHINERY MAINTENANCE & REPAIRING',
            pathname: '/service/5'
        },
        {
            i18n: 'service_6_title',
            name: 'CRANE LOAD TEST(LOAD CELL & WATER BAG)',
            pathname: '/service/6'
        },
        {
            i18n: 'service_7_title',
            name: 'NONDESTRUCTIVE-TESTING',
            pathname: '/service/7'
        },
        {
            i18n: 'service_8_title',
            name: 'UNDER-WATER SERVICES',
            pathname: '/service/8'
        },
        {
            i18n: 'service_9_title',
            name: 'STORE & MEAL SUPPLY',
            pathname: '/service/9'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPos((p) => {
                const currentPos = asscroll?.currentPos || window.scrollY;
                if (p !== currentPos) return currentPos;
                return p;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`header-container ${pos > 80 && menuState === false ? 'active' : ''} ${theme}`}>
            <div className="pillar left align-"></div>
            <div className="header">
                <div className="flex items-center">
                    <MenuBtn
                        onClickWhenClose={() => setMenuState(true)}
                        onClickWhenOpen={() => setMenuState(false)}
                        theme={theme}
                    />
                    <div className="mx-auto flex">
                        <div className="logo-container">
                            <Martech />
                        </div>
                        <div className="logo-container pt-1">
                            <Remax />
                        </div>
                    </div>
                    <LangBtn theme={theme} />
                </div>
            </div>
            <div className={`header-menu ${menuState ? 'active' : ''}`}>
                <Menu
                    options={options}
                    theme={theme}
                />
            </div>
            <div className="pillar right"></div>
        </div>
    );
};

export default Header;