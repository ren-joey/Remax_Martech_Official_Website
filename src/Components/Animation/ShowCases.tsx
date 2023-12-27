import './show-cases.scss';
import { useEffect, useRef } from 'react';
import staticAnimation from './staticAnimation';
import useOnScreen from '../../Hooks/useOnScreen';
import useAssets from './loader';


const ShowCases = () => {
    const ref = useRef(null);
    const tl = useRef<undefined|gsap.core.Timeline>(undefined);
    const isVisible = useOnScreen(ref);
    const { projects, loader } = useAssets();

    useEffect(() => {
        if (isVisible && tl.current) {
            tl.current.play(0);
        }
    }, [isVisible, tl]);

    useEffect(() => {
        loader().then(() => {
            const _tl = staticAnimation(projects);
            tl.current = _tl;
        });
    }, []);

    return (
        <div
            className="show-cases"
            ref={ref}
        >
            <canvas
                id="show-cases-stage"
                title="Show Cases"
            />
        </div>
    );
};

export default ShowCases;