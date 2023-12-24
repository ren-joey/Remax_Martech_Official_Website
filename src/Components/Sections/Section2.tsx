import { useTranslation } from 'react-i18next';
import Martech from '../Logos/Martech';
import Remax from '../Logos/Remax';
import './section.scss';
import './section2.scss';
import { useMemo } from 'react';

const Section2 = () => {
    const { t } = useTranslation();

    return (
        <div className="section section-2">
            <div className="wrapper">
                <div className="half top">
                    <div className="logo-area flex">
                        <div className="flex-1">
                            <Martech color="white" />
                        </div>
                        <div className="flex-1">
                            <Remax color="white" />
                        </div>
                    </div>

                    <div className="title">
                        {t('section_2_title')}
                    </div>

                    <div className="ship"></div>
                </div>
                <div className="half mt-8 bot">
                    <div className="desc">
                        {t('section_2_subtitle')}
                    </div>

                </div>
            </div>
            <div className="wave-1"></div>
            <div className="wave-2"></div>
        </div>
    );
};

export default Section2;