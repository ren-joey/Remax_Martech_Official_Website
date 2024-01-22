import { useContext } from 'react';
import './dotted-divider.scss';
import { GlobDataContext } from '../../../Context/GlobDataProvider';

const DottedDivider = () => {
    const { device } = useContext(GlobDataContext);

    return (
        <div
            id="dotted-divider"
            className={device}
        >
            <div className="line"></div>
            <div className="sailboat"></div>
            <div className="line"></div>
        </div>
    );
};

export default DottedDivider;