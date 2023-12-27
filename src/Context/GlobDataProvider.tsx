import LocomotiveScroll from 'locomotive-scroll';
import React, { ReactElement, useEffect, useRef, useState } from 'react';

export type ScrollTarget = 1|2|3|4|5|string;
export type ScrollToTarget = (t: ScrollTarget) => void;

interface GlobDataContextProps {
    scroller: null|LocomotiveScroll
    setScroller: React.Dispatch<React.SetStateAction<null|LocomotiveScroll>>
    scrollToTarget: ScrollToTarget,
    prevLocation: ScrollTarget,
    setPrevLocation: (t: ScrollTarget) => void,
    pos: number
}

export const GlobDataContext = React.createContext<GlobDataContextProps>({
    scroller: null,
    setScroller: () => {},
    scrollToTarget: () => {},
    prevLocation: 1,
    setPrevLocation: () => {},
    pos: NaN
});

const offsets = [0, 100, 100, 100, -100];

const GlobDataProvider = ({ children }:{
    children: ReactElement
}) => {
    const [prevLocation, setPrevLocation] = useState<ScrollTarget>(1);
    const section = useRef<1|2|3|4|5>(1);
    const scrolling = useRef(false);
    const prevPos = useRef(window.scrollY);
    const [pos, setPos] = useState(window.scrollY);
    const [scroller, setScroller] = useState<null|LocomotiveScroll>(null);

    const scrollToTarget: ScrollToTarget = (target) => {
        if (scroller) {
            scrolling.current = true;
            if (typeof target === 'string') {
                section.current = 5;
                scroller.scrollTo(
                    target,
                    { offset: -100}
                );
            } else {
                section.current = target;
                scroller.scrollTo(
                    `#section-${target}`,
                    { offset: offsets[target - 1]}
                );
            }
            scroller.stop();
            setTimeout(() => {
                scroller.start();
                scrolling.current = false;
            }, 2000);
        }
    };

    useEffect(() => {
        section.current = 1;

        if (scroller) {
            scroller.on('scroll', (args: any) => {
                if (!scrolling.current) {
                    if (prevPos.current < args.scroll.y) {
                        if (section.current < 5) {
                            section.current += 1;
                            scrolling.current = true;
                            scrollToTarget(section.current as ScrollTarget);
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
                            || (section.current === 5 && args.scroll.y < 5800)) {
                            section.current -= 1;
                            scrolling.current = true;
                            scrollToTarget(section.current as ScrollTarget);
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

            scroller.on('scroll', (args: any) => {
                setPos((y) => {
                    prevPos.current = y;
                    return args.scroll.y;
                });
            });

            if (prevLocation !== 1) {
                scrollToTarget(prevLocation);
                setPrevLocation(1);
            }
        }
    }, [scroller]);

    return (
        <GlobDataContext.Provider
            value={{
                scroller,
                setScroller,
                scrollToTarget,
                prevLocation,
                setPrevLocation,
                pos
            }}
        >
            {children}
        </GlobDataContext.Provider>
    );
};

export default GlobDataProvider;