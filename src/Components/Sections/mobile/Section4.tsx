import { useTranslation } from 'react-i18next';
import './section.scss';
import './section4.scss';
import Tag from '../../Tag';
import ImgPortAnping from '../../../assets/images/photo/port-anping.png';
import ImgPortTaipei from '../../../assets/images/photo/port-taipei.png';
import ImgPortKaoshiung from '../../../assets/images/photo/port-kaoshiung.png';
import ImgPortKeelung from '../../../assets/images/photo/port-keelung.jpg';
import ImgPortSauo from '../../../assets/images/photo/port-sauo.jpg';
import ImgPortTaichung from '../../../assets/images/photo/port-taichung.png';
import SimpleImgDisplay from '../../Images/SimpleImgDisplay';

const Section4 = () => {
    const { t } = useTranslation();

    return (
        <div
            id="section-4"
            className="section-m section-m-4"
        >
            <div className="wrapper">
                <div className="title mb-8">
                    {t('section_4_title')}
                </div>
                <div className="port keelung">
                    <Tag
                        text={t('section_4_port_3')}
                        ping={false}
                    />
                </div>
                <div className="py-4">
                    <SimpleImgDisplay img={ImgPortKeelung} />
                </div>
                <div className="port taipei">
                    <Tag
                        text={t('section_4_port_1')}
                        ping={false}
                    />
                </div>
                <div className="py-4">
                    <SimpleImgDisplay img={ImgPortTaipei} />
                </div>
                <div className="port taichung">
                    <Tag
                        text={t('section_4_port_4')}
                        ping={false}
                    />
                </div>
                <div className="py-4">
                    <SimpleImgDisplay img={ImgPortTaichung} />
                </div>
                <div className="port suao">
                    <Tag
                        text={t('section_4_port_5')}
                        ping={false}
                    />
                </div>
                <div className="py-4">
                    <SimpleImgDisplay img={ImgPortSauo} />
                </div>
                <div className="port anping">
                    <Tag
                        text={t('section_4_port_6')}
                        ping={false}
                    />
                </div>
                <div className="py-4">
                    <SimpleImgDisplay img={ImgPortAnping} />
                </div>
                <div className="port kaoshiung">
                    <Tag
                        text={t('section_4_port_7')}
                        ping={false}
                    />
                </div>
                <div className="py-4">
                    <SimpleImgDisplay img={ImgPortKaoshiung} />
                </div>
            </div>
        </div>
    );
};

export default Section4;