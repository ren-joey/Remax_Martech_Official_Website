import Messager from '../Messager';
import { useEffect, useRef, useState } from 'react';
import Header, { Theme } from './Header';
import Footer from './Footer';
import './wrapper.scss';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import { ScrollTrigger } from 'gsap/all';


interface WrapperProps {
    children: JSX.Element,
    theme?: Theme
}

const Wrapper = ({
    children,
    theme='dark'
}: WrapperProps) => {
    const containerRef = useRef(null);
    const [scroll, setScroll] = useState(null);
    const [pos, setPos] = useState(window.scrollY);

    useEffect(() => {
        let scroller: any;

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
            scroller.stop();

            setTimeout(() => {
                scroller.scrollTo(1580 + 100, { duration: 2000 });
                // scroller.start();
            }, 10000);

            scroller.on('scroll', (args: any) => {
                console.log('1');
                setPos(args.scroll.y);
            });

            ScrollTrigger.addEventListener('refresh', () => scroller.update()); // error: TypeError: Cannot read properties of undefined (reading 'match')
            ScrollTrigger.refresh();

            setScroll(scroller);
        });

        return () => {
            if (scroller) scroller.destroy();
        };
    }, []);

    return (
        <div className="main-wrapper">
            <Header
                pos={pos}
                scroller={scroll}
                theme={theme}
            />
            <div
                className="scroll-container"
                ref={containerRef}
            >
                { children }
                <Footer scroller={scroll} />
            </div>
            <Messager />
        </div>
    );
};

export default Wrapper;