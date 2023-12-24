import { useState } from 'react';
import './menu-btn.scss';
import { Theme } from '../../Shared/Header';

interface MenuBtnProps {
    onClickWhenClose?: () => void,
    onClickWhenOpen?: () => void,
    theme?: Theme
}

const MenuBtn = ({
    onClickWhenClose=() => {},
    onClickWhenOpen=() => {},
    theme='dark'
}: MenuBtnProps) => {
    const [state, setState] = useState(false);

    const onClick = () => {
        setState(b => !b);
        if (state === false) {
            onClickWhenClose();
        } else {
            onClickWhenOpen();
        }
    };

    return (
        <div
            id="menu-btn"
            className={theme}
            onClick={onClick}
        >
            <div className={`menu-icon-container ${state ? 'active' : ''}`}>
                <div className="bar idx-1"></div>
                <div className="bar idx-2"></div>
                <div className="bar idx-3"></div>
            </div>
        </div>
    );
};

export default MenuBtn;