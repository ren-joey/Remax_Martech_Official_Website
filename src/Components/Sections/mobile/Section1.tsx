import { useTranslation } from 'react-i18next';
import './section.scss';
import './section1.scss';
import Martech from '../../Logos/Martech';
import Remax from '../../Logos/Remax';
import { useEffect, useMemo, useState } from 'react';
import gsap from 'gsap';

export const localStorageKey = 'REMAX_MARTECH_OFFICIAL_WEBSITE_LOADED';

const Section1 = () => {
    const { t } = useTranslation();
    const titles = useMemo(() => {
        return t('section_1_title').split('\n');
    }, [t]);

    return (
        <div
            id="section-1"
            className="section-m section-m-1"
        >
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
                <div className="section-content">
                    {titles[1]}
                </div>
            </div>
        </div>
    );
};

export default Section1;