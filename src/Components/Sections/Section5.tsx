import { useTranslation } from 'react-i18next';
import './section.scss';
import './section5.scss';
import DottedDivider from '../Dividers/DottedDivider';
import WaveDivider from '../Dividers/WaveDivider';

const Section5 = () => {
    const { t } = useTranslation();

    return (
        <div className="section section-5">
            <div className="wrapper">
                <div className="title">
                    <div className="bar"></div>
                    <br />
                    <div className="text">
                        {t('section_6_title')}
                    </div>
                </div>

                <div className="service mt-20">
                    <div className="img-block">
                        <div className="img-container idx-1"></div>
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
                    <div className="img-block">
                        <div className="img-container idx-2"></div>
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
            </div>
        </div>
    );
};

export default Section5;