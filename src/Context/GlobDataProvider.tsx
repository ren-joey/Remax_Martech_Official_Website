import LocomotiveScroll from 'locomotive-scroll';
import React, { ReactElement, useEffect, useRef, useState } from 'react';

export type ScrollTarget = 1|2|3|4|5|string;
export type ScrollToTarget = (t: ScrollTarget) => void;
export type Device = undefined|'desktop'|'mobile';

interface GlobDataContextProps {
    device: Device
    // setDevice: React.Dispatch<React.SetStateAction<Device>>
    scroller: null|LocomotiveScroll
    setScroller: React.Dispatch<React.SetStateAction<null|LocomotiveScroll>>
    scrollToTarget: ScrollToTarget,
    prevLocation: ScrollTarget,
    setPrevLocation: (t: ScrollTarget) => void,
    pos: number
}

export const GlobDataContext = React.createContext<GlobDataContextProps>({
    device: undefined,
    scroller: null,
    setScroller: () => {},
    scrollToTarget: () => {},
    prevLocation: 1,
    setPrevLocation: () => {},
    pos: NaN
});

const offsets = [0, 30, 30, 30, 0];
const duration = 1000;

const GlobDataProvider = ({ children }:{
    children: ReactElement
}) => {
    const [prevLocation, setPrevLocation] = useState<ScrollTarget>(1);
    const section = useRef<1|2|3|4|5>(1);
    const scrolling = useRef(false);
    const prevPos = useRef(window.scrollY);
    const [pos, setPos] = useState(window.scrollY);
    const [scroller, setScroller] = useState<null|LocomotiveScroll>(null);
    const [device, setDevice] = useState<Device>(undefined);

    const scrollToTarget: ScrollToTarget = (target) => {
        if (scroller) {
            scrolling.current = true;
            if (typeof target === 'string') {
                section.current = 5;
                scroller.scrollTo(
                    target,
                    {
                        offset: -100,
                        duration: duration - 500,
                        disableLerp: true
                    }
                );
            } else {
                section.current = target;
                scroller.scrollTo(
                    `#section-${target}`,
                    {
                        offset: offsets[target - 1],
                        duration: duration - 500,
                        disableLerp: true
                    }
                );
            }
            scroller.stop();
            setTimeout(() => {
                scroller.start();
                scrolling.current = false;
            }, duration);
        }
    };

    const refreshDevice = () => {
        let device: Device = undefined;
        const width = Math.min(window.innerWidth, screen.width);
        if (width < 1440) {
            device = 'mobile';
        } else device = 'desktop';
        setDevice(device);
        return device;
    };

    useEffect(() => {
        window.onresize = refreshDevice;
        return () => {
            window.onresize = () => {};
        };
    }, []);

    useEffect(() => {
        section.current = 1;
        const device = refreshDevice();

        if (scroller) {
            if (device === 'desktop') {
                scroller.on('scroll', (args: any) => {
                    if (!scrolling.current) {
                        if (prevPos.current < args.scroll.y) {
                            if (section.current < 5) {
                                section.current += 1;
                                scrollToTarget(section.current as ScrollTarget);
                            }
                        } else {
                            if ((section.current < 5 && section.current > 1)
                                || (section.current === 5 && args.scroll.y < 5300)) {
                                section.current -= 1;
                                scrollToTarget(section.current as ScrollTarget);
                            }
                        }
                    }
                });
            }

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
                device,
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