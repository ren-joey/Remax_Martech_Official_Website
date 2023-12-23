import { useState } from 'react';
import './menu-btn.scss';

interface MenuBtnProps {
    onClickWhenClose?: () => void,
    onClickWhenOpen?: () => void
}

const MenuBtn = ({
    onClickWhenClose=() => {},
    onClickWhenOpen=() => {}
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
            className="menu"
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