import { useTranslation } from 'react-i18next';
import './section.scss';
import './section4.scss';
import Tag from '../Tag';
import StaggeredSlideShow from '../StaggeredSlideShow';
import ImgPortAnping from '../../assets/images/photo/port-anping.png';
import ImgPortTaipei from '../../assets/images/photo/port-taipei.png';
import ImgPortKaoshiung from '../../assets/images/photo/port-kaoshiung.png';
import ImgPortKeelung from '../../assets/images/photo/port-keelung.jpg';
import ImgPortSauo from '../../assets/images/photo/port-sauo.jpg';
import ImgPortTaichung from '../../assets/images/photo/port-taichung.png';

const Section4 = () => {
    const { t } = useTranslation();
 
    return (
        <div className="section section-4">
            <div className="wrapper">
                <div className="half left">
                    <div className="title">
                        {t('section_4_title')}
                    </div>

                    <div className="slide-show mt-12">
                        <StaggeredSlideShow
                            imgs={[
                                ImgPortAnping,
                                ImgPortTaipei,
                                ImgPortKaoshiung,
                                ImgPortKeelung,
                                ImgPortSauo,
                                ImgPortTaichung
                            ]}
                        />
                    </div>
                </div>
                <div className="half"> 
                    <div className="port keelung">
                        <Tag text={t('section_4_port_3')} />
                    </div>
                    <div className="port taipei">
                        <Tag text={t('section_4_port_1')} />
                    </div>
                    {/* <div className="port taoyuan">
                        <Tag text={t('section_4_port_2')} />
                    </div> */}
                    <div className="port taichung">
                        <Tag text={t('section_4_port_4')} />
                    </div>
                    <div className="port suao">
                        <Tag text={t('section_4_port_5')} />
                    </div>
                    <div className="port anping">
                        <Tag text={t('section_4_port_6')} />
                    </div>
                    <div className="port kaoshiung">
                        <Tag text={t('section_4_port_7')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;