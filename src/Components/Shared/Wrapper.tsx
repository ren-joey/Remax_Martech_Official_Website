import Messager from '../Messager';
import { useEffect, useRef, useState } from 'react';
import Header, { Theme } from './Header';
import Footer from './Footer';
import './wrapper.scss';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import { ScrollTrigger } from 'gsap/all';
import { localStorageKey } from '../Sections/Section1';
import LocomotiveScroll from 'locomotive-scroll';
import { useLocation } from 'react-router-dom';

export type ScrollTarget = 1|2|3|4|5|string;
export type ScrollToTarget = (t: ScrollTarget) => void;

interface WrapperProps {
    children: JSX.Element,
    theme?: Theme
}

const offsets = [0, 100, 100, 100, -100];

const Wrapper = ({
    children,
    theme='dark'
}: WrapperProps) => {
    const location = useLocation();
    const section = useRef(1);
    const scrolling = useRef(false);
    const containerRef = useRef(null);
    const [scroll, setScroll] = useState<null|LocomotiveScroll>(null);
    const prevPos = useRef(window.scrollY);
    const [pos, setPos] = useState(window.scrollY);

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
        
        
                    scroller.on('scroll', (args: any) => {
                        if (!scrolling.current) {
                            if (prevPos.current < args.scroll.y) {
                                if (section.current < 5) {
                                    section.current += 1;
                                    scrolling.current = true;
                                    scroller?.scrollTo(
                                        `#section-${section.current}`,
                                        { offset: offsets[section.current - 1]}
                                    );
                                    scroller.stop();
                                    setTimeout(() => {
                                        scroller.start();
                                        scrolling.current = false;
                                    }, 2000);
                                } else {
                                    //
                                }
                            } else {
                                if ((section.current < 5 && section.current > 1)
                                    || (section.current === 5 && args.scroll.y < 6000)) {
                                    section.current -= 1;
                                    scrolling.current = true;
                                    scroller?.scrollTo(
                                        `#section-${section.current}`,
                                        { offset: offsets[section.current - 1]}
                                    );
                                    scroller.stop();
                                    setTimeout(() => {
                                        scroller.start();
                                        scrolling.current = false;
                                    }, 2000);
                                } else {
                                    //
                                }
                            }
                        }
                    });

                    // ScrollTrigger.addEventListener('refresh', () => scroller.update()); // error: TypeError: Cannot read properties of undefined (reading 'match')
                    // ScrollTrigger.refresh();

                    scroller.on('scroll', (args: any) => {
                        setPos((y) => {
                            prevPos.current = y;
                            return args.scroll.y;
                        });
                    });
        
                    setScroll(scroller);
                }
            });
        }, 100);

        return () => {
            if (scroller) scroller.destroy();
        };
    }, []);

    const scrollToTarget: ScrollToTarget = (target) => {
        if (scroll) {
            scrolling.current = true;
            if (typeof target === 'string') {
                section.current = 5;
                scroll.scrollTo(
                    target,
                    { offset: -100}
                );
            } else {
                section.current = target;
                scroll.scrollTo(
                    `#section-${target}`,
                    { offset: offsets[target - 1]}
                );
            }
            scroll.stop();
            setTimeout(() => {
                scroll.start();
                scrolling.current = false;
            }, 2000);
        }
    };

    return (
        <div className="main-wrapper">
            <Header
                pos={pos}
                scroller={scroll}
                theme={theme}
                scrollToTarget={scrollToTarget}
            />
            <div
                id="scroll-container"
                className="scroll-container"
                ref={containerRef}
            >
                { children }

                {
                    location.pathname === '/' ? (
                        <Footer
                            scroller={scroll}
                            scrollToTarget={scrollToTarget}
                        />
                    ) : ''
                }
            </div>
            <Messager />
        </div>
    );
};

export default Wrapper;