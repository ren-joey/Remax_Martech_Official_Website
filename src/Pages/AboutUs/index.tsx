import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RectBtn from '../../Components/Buttons/RectBtn';
import { useTranslation } from 'react-i18next';
import './about-us.scss';
import SimpleImgDisplay from '../../Components/Images/SimpleImgDisplay';
import Wrapper from '../../Components/Shared/Wrapper';
import imgMap from '../../Components/Images/imgMap';

const images: string[] = [
    imgMap.about_us_img_1,
    imgMap.about_us_img_1,
    imgMap.about_us_img_1,
    imgMap.about_us_img_1
];

const Service = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <Wrapper theme="light">
            <div id="about-us">
                <div className="service-container">
                    <div className="banner"></div>
                    <div className="wrapper">
                        <div className="flex mb-20">
                            <RectBtn
                                text={t('back_page')}
                                onClick={() => navigate('/')}
                            />
                            <div className="content pl-12">
                                <div className="deco-bar mb-4"></div>

                                <div className="title mb-4">
                                    {t('about_us_title')}
                                </div>

                                <div className="sub-title mb-4">
                                    {t('about_us_subtitle')}
                                </div>

                                <div className="content">
                                    {t('about_us_content')}
                                </div>
                            </div>
                        </div>

                        <div className="imgs-container flex mb-20">
                            {
                                images.map((img, idx) => (
                                    <div
                                        className="img-container"
                                        key={`simple-image-display_${idx}`}
                                    >
                                        <SimpleImgDisplay
                                            img={img}
                                            desc={t(`about_us_img_${idx+1}`)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Service;