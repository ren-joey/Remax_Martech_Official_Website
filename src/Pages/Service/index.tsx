import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RectBtn from '../../Components/Buttons/RectBtn';
import { useTranslation } from 'react-i18next';
import './service.scss';
import SimpleImgDisplay from '../../Components/Images/SimpleImgDisplay';
import Wrapper from '../../Components/Shared/Wrapper';
import imgMap from '../../Components/Images/imgMap';
import { ServiceProps } from '../../Components/Sections/Section5';

const Service = () => {
    const param = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        if (!param.service) {
            navigate('/');
        }
    }, []);

    const services: ServiceProps[] = [
        {
            pathname: '/service/1',
            imgs: [
                {
                    img: imgMap.section_7_service_1_img_1,
                    desc: t('section_7_service_1_img_1')
                },
                {
                    img: imgMap.section_7_service_1_img_2,
                    desc: t('section_7_service_1_img_2')
                },
                {
                    img: imgMap.section_7_service_1_img_3,
                    desc: t('section_7_service_1_img_3')
                },
                {
                    img: imgMap.section_7_service_1_img_4,
                    desc: t('section_7_service_1_img_4')
                }
            ]
        },
        {
            pathname: '/service/2',
            imgs: [
                {
                    img: imgMap.section_7_service_2_img_1,
                    desc: t('section_7_service_2_img_1')
                }
            ]
        },
        {
            pathname: '/service/3',
            imgs: [
                {
                    img: imgMap.section_7_service_3_img_1,
                    desc: t('section_7_service_3_img_1')
                },
                {
                    img: imgMap.section_7_service_3_img_2,
                    desc: t('section_7_service_3_img_2')
                },
                {
                    img: imgMap.section_7_service_3_img_3,
                    desc: t('section_7_service_3_img_3')
                }
            ]
        },
        {
            pathname: '/service/4',
            imgs: [
                {
                    img: imgMap.section_7_service_4_img_1,
                    desc: t('section_7_service_4_img_1')
                },
                {
                    img: imgMap.section_7_service_4_img_2,
                    desc: t('section_7_service_4_img_2')
                }
            ]
        },
        {
            pathname: '/service/5',
            imgs: [
                {
                    img: imgMap.section_7_service_5_img_1,
                    desc: t('section_7_service_5_img_1')
                },
                {
                    img: imgMap.section_7_service_5_img_2,
                    desc: t('section_7_service_5_img_2')
                }
            ]
        },
        {
            pathname: '/service/6',
            imgs: [
                {
                    img: imgMap.section_7_service_6_img_1,
                    desc: t('section_7_service_6_img_1')
                },
                {
                    img: imgMap.section_7_service_6_img_2,
                    desc: t('section_7_service_6_img_2')
                },
                {
                    img: imgMap.section_7_service_6_img_3,
                    desc: t('section_7_service_6_img_3')
                }
            ]
        },
        {
            pathname: '/service/7',
            imgs: [
                {
                    img: imgMap.section_7_service_7_img_2,
                    desc: t('section_7_service_7_img_2')
                },
                {
                    img: imgMap.section_7_service_7_img_3,
                    desc: t('section_7_service_7_img_3')
                },
                {
                    img: imgMap.section_7_service_7_img_4,
                    desc: t('section_7_service_7_img_4')
                }
            ]
        },
        {
            pathname: '/service/8',
            imgs: [
                {
                    img: imgMap.section_7_service_8_img_1,
                    desc: t('section_7_service_8_img_1')
                },
                {
                    img: imgMap.section_7_service_8_img_2,
                    desc: t('section_7_service_8_img_2')
                }
            ]
        },
        {
            pathname: '/service/9',
            imgs: [
                {
                    img: imgMap.section_7_service_9_img_1,
                    desc: t('section_7_service_9_img_1')
                },
                {
                    img: imgMap.section_7_service_9_img_2,
                    desc: t('section_7_service_9_img_2')
                },
                {
                    img: imgMap.section_7_service_9_img_3,
                    desc: t('section_7_service_9_img_3')
                },
                {
                    img: imgMap.section_7_service_9_img_4,
                    desc: t('section_7_service_9_img_4')
                },
                {
                    img: imgMap.section_7_service_9_img_5,
                    desc: t('section_7_service_9_img_5')
                },
                {
                    img: imgMap.section_7_service_9_img_6,
                    desc: t('section_7_service_9_img_6')
                },
                {
                    img: imgMap.section_7_service_9_img_7,
                    desc: t('section_7_service_9_img_7')
                }
            ]
        }
    ];

    return (
        <Wrapper theme="light">
            <div id="service">
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
                                    {t(`service_${param.service}_title`)}
                                </div>

                                <div className="sub-title mb-4">
                                    {t(`service_${param.service}_subtitle`)}
                                </div>

                                <div className="content">
                                    {t(`service_${param.service}_content`)}
                                </div>
                            </div>
                        </div>

                        <div className="imgs-container flex mb-20">
                            {
                                param.service ? (
                                    services[+param.service - 1].imgs.map((img, idx) => (
                                        <div
                                            className="img-container"
                                            key={`simple-image-display_${idx}`}
                                        >
                                            <SimpleImgDisplay
                                                img={img.img}
                                                desc={img.desc}
                                            />
                                        </div>
                                    ))
                                ) : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Service;