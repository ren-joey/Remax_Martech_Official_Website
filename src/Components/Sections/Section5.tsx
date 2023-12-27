import { useTranslation } from 'react-i18next';
import './section.scss';
import './section5.scss';
import DottedDivider from '../Dividers/DottedDivider';
import WaveDivider from '../Dividers/WaveDivider';
import ServiceSlider from '../ServiceSlider';
import React, { useContext, useRef } from 'react';
import useOnScreen from '../../Hooks/useOnScreen';
import { GlobDataContext } from '../../Context/GlobDataProvider';
import useCompanyData from '../../Hooks/useCompanyData';


const ShowCases = React.lazy(() => import('../Animation/ShowCases'));

const Section5 = () => {
    const { t } = useTranslation();
    const refs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null)
    ];
    const isVisible = [
        useOnScreen(refs[0]),
        useOnScreen(refs[1])
    ];
    const { scrollToTarget } = useContext(GlobDataContext);
    const { services } = useCompanyData();

    return (
        <div
            id="section-5"
            className="section section-5"
        >
            <ShowCases />

            <div className="wrapper">
                
                <div className="title">
                    <div className="bar"></div>
                    <br />
                    <div className="text">
                        {t('section_6_title')}
                    </div>
                </div>

                <div className="service mt-20">
                    <div
                        className={`img-block ${isVisible[0] ? 'visible' : ''}`}
                        ref={refs[0]}
                    >
                        <div className="img-container idx-1 img-transition-2"></div>
                    </div>
                    <div className="content">
                        <div className="title">
                            <div className="icon cog-repair"></div>
                            <div className="text">
                                {t('section_6_container_1_title')}
                            </div>
                        </div>
                        <div className="my-2">
                            <DottedDivider />
                        </div>
                        <div className="service-list mt-2">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8].map((val, idx) => (
                                    <div
                                        className="service-item"
                                        onClick={() => scrollToTarget(`#service_slider_${val}`)}
                                        key={idx}
                                    >
                                        {t(`section_6_container_1_item_${val}`)}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="service mt-20">
                    <div
                        className={`img-block ${isVisible[1] ? 'visible' : ''}`}
                        ref={refs[1]}
                    >
                        <div className="img-container idx-2 img-transition-2"></div>
                    </div>
                    <div className="content">
                        <div className="title">
                            <div className="icon ship-shield"></div>
                            <div className="text">
                                {t('section_6_container_2_title')}
                            </div>
                        </div>
                        <div className="my-2">
                            <DottedDivider />
                        </div>
                        <div className="service-list mt-2">
                            {
                                [1, 2].map((val, idx) => (
                                    <div
                                        className="service-item"
                                        onClick={() => scrollToTarget('#service_slider_9')}
                                        key={idx}
                                    >
                                        {t(`section_6_container_2_item_${val}`)}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="py-40 divider-container">
                    <WaveDivider />
                </div>
                
                {
                    services.map((service, idx) => (
                        <div
                            id={`service_slider_${idx + 1}`}
                            className="pb-32"
                            key={`service_${service.pathname}_${idx}`}
                        >
                            <ServiceSlider
                                title={t(`section_7_service_${idx + 1}_title`)}
                                desc={t(`section_7_service_${idx + 1}_desc`)}
                                imgs={service.imgs}
                                pathname={service.pathname}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Section5;