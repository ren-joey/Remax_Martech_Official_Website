import { useTranslation } from 'react-i18next';
import Martech from '../Logos/Martech';
import Remax from '../Logos/Remax';
import './section.scss';
import './section2.scss';
import { useRef } from 'react';
import useOnScreen from '../../Hooks/useOnScreen';

const Section2 = () => {
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div
            id="section-2"
            className={`section section-2 ${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="wrapper">
                <div className="half top">
                    <div className="logo-area flex slow-down">
                        <div className="flex-1">
                            <Martech color="white" />
                        </div>
                        <div className="flex-1">
                            <Remax color="white" />
                        </div>
                    </div>

                    <div className="title slow-down">
                        {t('section_2_title')}
                    </div>

                    <div className="ship"></div>
                </div>
                <div className="half mt-8 bot">
                    <div className="desc relative">
                        <div className="slow-down">
                            {t('section_2_subtitle')}
                        </div>

                        <div className="reflection"></div>
                        <div className="section2-shadow"></div>
                    </div>
                </div>
            </div>
            <div className="wave-1"></div>
            <div className="wave-2"></div>
        </div>
    );
};

export default Section2;