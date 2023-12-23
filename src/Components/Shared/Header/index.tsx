import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './header.scss';
import ASScroll from '@ashthornton/asscroll';
import LangBtn from '../../Buttons/LangBtn';
import MenuBtn from '../../Buttons/MenuBtn';
import Menu, { MenuOption } from '../../Menu';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    asscroll: ASScroll
}


const Header = ({ asscroll }: HeaderProps) => {
    const [pos, setPos] = useState(asscroll.currentPos);
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const [menuState, setMenuState] = useState(false);

    const options: MenuOption[] = [
        {
            i18n: 'about_us_title',
            name: 'About Us',
            onClick: () => navigate('/about-us')
        },
        {
            i18n: 'service_1_title',
            name: 'HOT WORK',
            onClick: () => navigate('/service/1')
        },
        {
            i18n: 'service_2_title',
            name: 'MAIN ENGINE OVERHAUL & GENERATOR OVERHAUL',
            onClick: () => navigate('/service/2')
        },
        {
            i18n: 'service_3_title',
            name: 'ELECTRIC MOTOR & GENERATOR REPAIRING',
            onClick: () => navigate('/service/3')
        },
        {
            i18n: 'service_4_title',
            name: 'HYDRAULIC MOTOR REPAIRING',
            onClick: () => navigate('/service/4')
        },
        {
            i18n: 'service_5_title',
            name: 'MACHINERY MAINTENANCE & REPAIRING',
            onClick: () => navigate('/service/5')
        },
        {
            i18n: 'service_6_title',
            name: 'CRANE LOAD TEST(LOAD CELL & WATER BAG)',
            onClick: () => navigate('/service/6')
        },
        {
            i18n: 'service_7_title',
            name: 'NONDESTRUCTIVE-TESTING',
            onClick: () => navigate('/service/7')
        },
        {
            i18n: 'service_8_title',
            name: 'UNDER-WATER SERVICES',
            onClick: () => navigate('/service/8')
        },
        {
            i18n: 'service_9_title',
            name: 'STORE & MEAL SUPPLY',
            onClick: () => navigate('/service/9')
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPos((p) => {
                if (p !== asscroll.currentPos) return asscroll.currentPos;
                return p;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`header-container ${pos > 80 && menuState === false ? 'active' : ''}`}>
            <div className="pillor left"></div>
            <div className="header">
                <div className="flex">
                    <div className="mr-auto">
                        <MenuBtn
                            onClickWhenClose={() => setMenuState(true)}
                            onClickWhenOpen={() => setMenuState(false)}
                        />
                    </div>
                    <LangBtn />
                </div>
            </div>
            <div className={`header-menu ${menuState ? 'active' : ''}`}>
                <Menu options={options} />
            </div>
            <div className="pillor right"></div>
        </div>
    );
};

export default Header;