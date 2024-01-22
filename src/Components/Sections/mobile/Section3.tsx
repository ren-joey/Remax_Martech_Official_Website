import { useTranslation } from 'react-i18next';
import './section.scss';
import './section3.scss';
import RectBtn from '../../Buttons/RectBtn';
import { useNavigate } from 'react-router-dom';

const Section3 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div
            id="section-3"
            className="section-m section-m-3"
        >
            <div className="wrapper">
                <div className="image-container">
                    <div className="about-us-photo img-transition"></div>
                </div>
                <div className="title mt-8">
                    {t('section_3_title')}
                </div>

                <div className="subtitle">
                    {t('section_3_subtitle')}
                </div>

                <div className="content mt-8">
                    {t('section_3_content')}
                </div>

                <div className="mt-8">
                    <RectBtn
                        text={t('more_details')}
                        onClick={() => navigate('/about-us')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Section3;