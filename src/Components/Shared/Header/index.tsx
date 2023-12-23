import { useEffect, useState } from 'react';
import './header.scss';
import ASScroll from '@ashthornton/asscroll';

interface HeaderProps {
    asscroll: ASScroll
}

const Header = ({ asscroll }: HeaderProps) => {
    const [pos, setPos] = useState(asscroll.currentPos);

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
        <div className={`header-container ${pos > 80 ? 'active' : ''}`}>
            <div className="pillor left"></div>
            <div className="header"></div>
            <div className="pillor right"></div>
        </div>
    );
};

export default Header;