import { useTranslation } from 'react-i18next';
import SimpleImgDisplay from '../Images/SimpleImgDisplay';
import './section.scss';
import './section3.scss';
import RectBtn from '../Buttons/RectBtn';
import { useNavigate } from 'react-router-dom';

const Section3 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="section section-3">
            <div className="wrapper">
                <div className="image-container">
                    <div className="about-us-photo"></div>
                </div>
                <div className="flex-1 ml-12">
                    <div className="title">
                        {t('section_3_title')}
                    </div>

                    <div className="subtitle">
                        {t('section_3_subtitle')}
                    </div>

                    <div className="content mt-8">
                        {t('section_3_content')}
                    </div>

                    <div className="flex mt-8">
                        <RectBtn
                            text={t('more_details')}
                            onClick={() => navigate('/about-us')}
                        />
                    </div>

                </div>
            </div>

            <div className="bright idx-1"></div>
            <div className="bright idx-2"></div>
            <div className="bright idx-3"></div>
        </div>
    );
};

export default Section3;