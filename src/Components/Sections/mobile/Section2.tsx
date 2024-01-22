import { useTranslation } from 'react-i18next';
import Martech from '../../Logos/Martech';
import Remax from '../../Logos/Remax';
import './section.scss';
import './section2.scss';

const Section2 = () => {
    const { t } = useTranslation();

    return (
        <div
            id="section-2"
            className="section-m section-m-2"
        >
            <div className="wrapper">
                <div className="ship"></div>

                <div className="half top">
                    {/* <div className="logo-area flex slow-down">
                        <div className="flex-1">
                            <Martech color="white" />
                        </div>
                        <div className="flex-1">
                            <Remax color="white" />
                        </div>
                    </div> */}

                    <div className="title slow-down">
                        {t('section_2_title')}
                    </div>
                </div>
                <div className="half mt-8 bot">
                    <div className="desc relative">
                        <div className="slow-down">
                            {t('section_2_subtitle')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;