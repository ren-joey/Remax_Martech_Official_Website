import Messenger from '../Messenger';
import { useContext, useEffect, useRef } from 'react';
import Header, { Theme } from './Header';
import Footer from './Footer';
import './wrapper.scss';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import { ScrollTrigger } from 'gsap/all';
import { localStorageKey } from '../Sections/Section1';
import { useLocation } from 'react-router-dom';
import { GlobDataContext } from '../../Context/GlobDataProvider';

export type ScrollTarget = 1|2|3|4|5|string;
export type ScrollToTarget = (t: ScrollTarget) => void;

interface WrapperProps {
    children: JSX.Element,
    theme?: Theme
}


const Wrapper = ({
    children,
    theme='dark'
}: WrapperProps) => {
    const location = useLocation();
    const containerRef = useRef(null);
    const { setScroller, device } = useContext(GlobDataContext);
    const prevDevice = useRef(device);

    useEffect(() => {
        let scroller: any;
        window.scrollTo(0, 0);

        setTimeout(() => {
            import('locomotive-scroll').then((locomotiveModule) => {
                scroller = new locomotiveModule.default({
                    el: containerRef.current as any,
                    smooth: true
                });

                scroller.on('scroll', ScrollTrigger.update);
                ScrollTrigger.scrollerProxy(containerRef.current, {
                    scrollTop(value) {
                        return arguments.length
                            ? scroller.scrollTo(value, 0, 0)
                            : scroller.scroll.instance.scroll.y;
                    },
                    getBoundingClientRect() {
                        return {
                            left: 0,
                            top: 0,
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                    }
                });

                if (location.pathname === '/') {
                    if (localStorage.getItem(localStorageKey) !== '1') {
                        scroller.stop();
                        setTimeout(() => {
                            scroller.start();
                        }, 6000);
                    } else {
                        // section.current += 1;
                        // scroller?.scrollTo(`#section-${section.current}`, { offset: 100 });
                        // scroller.stop();
                        // setTimeout(() => scroller.start(), 3000);
                    }

                    setScroller(scroller);
                }
            });
        }, 100);

        return () => {
            if (scroller) scroller.destroy();
        };
    }, []);

    useEffect(() => {
        if (device !== undefined && device !== prevDevice.current) {
            window.location.reload();
        }
        prevDevice.current = device;
    }, [device]);

    return (
        <div className="main-wrapper">
            <Header theme={theme} />
            <div
                id="scroll-container"
                className="local-scroll-container"
                ref={containerRef}
            >
                { children }

                {
                    location.pathname === '/' ? (
                        <Footer />
                    ) : ''
                }
            </div>
            <Messenger />
        </div>
    );
};

export default Wrapper;