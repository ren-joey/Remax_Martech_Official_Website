import { useRef } from 'react';
import './wave-divider.scss';
import useOnScreen from '../../../Hooks/useOnScreen';

const WaveDivider = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div
            id="wave-divider"
            className={`${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="freighter">
                <div className="freighter-icon"></div>
            </div>
            <div className="wave"></div>
        </div>
    );
};

export default WaveDivider;