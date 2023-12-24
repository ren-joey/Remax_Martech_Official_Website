import { useTranslation } from 'react-i18next';
import './section.scss';
import './section1.scss';
import Martech from '../Logos/Martech';
import Remax from '../Logos/Remax';
import { useEffect, useMemo, useState } from 'react';
import gsap from 'gsap';

const localStorageKey = 'REMAX_MARTECH_OFFICIAL_WEBSITE_LOADED';

const Section1 = () => {
    const { t } = useTranslation();
    const titles = useMemo(() => {
        return t('section_1_title').split('\n');
    }, [t]);
    const [prog, setProg] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (localStorage.getItem(localStorageKey) == '1') {
            setProg(100);
        } else {
            const val = {prog: 0};
            gsap.to(
                val,
                {
                    prog: 100,
                    duration: 5,
                    onUpdate: (() => {
                        setProg(Math.floor(val.prog));
                    }),
                    onComplete: (() => {
                        localStorage.setItem(localStorageKey, '1');
                    })
                }
            );
        }
    }, []);

    return (
        <div className={`section section-1 ${prog === 100 ? 'active' : ''}`}>
            <div className="section-container">
                <div className="logo-area">
                    <div className="flex-1 relative">
                        <div className="active-logo">
                            <Martech color="white" />
                        </div>
                        <Martech color="blue" />
                    </div>
                    <div className="flex-1 relative">
                        <div className="active-logo">
                            <Remax color="white" />
                        </div>
                        <Remax color="blue" />
                    </div>
                </div>
                <div className="section-content">
                    {titles[0]}
                </div>
                <div className="split-line">
                    <div className="circle-line">
                        <svg viewBox="0 0 100 100">
                            <mask id="circle-mask">
                                <circle
                                    className="circle-mask"
                                    stroke="#fff"
                                    strokeWidth="3"
                                    fill="transparent"
                                    cx="50"
                                    cy="50"
                                    r="46"
                                />
                            </mask>

                            <circle
                                stroke="#fff"
                                strokeDasharray="0.1 0.4"
                                strokeOpacity="0.8"
                                strokeWidth="2"
                                fill="transparent"
                                cx="50"
                                cy="50"
                                r="46"
                                mask="url(#circle-mask)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="section-content">
                    {titles[1]}

                    <div className="loading-progress">
                        {prog}
                    </div>
                    <div className="scroll-icon">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;