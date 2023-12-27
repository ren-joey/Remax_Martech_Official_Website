import { useTranslation } from 'react-i18next';
import imgMap from '../Components/Images/imgMap';

export interface ServiceProps {
    pathname: string,
    imgs: ImgDisplayProps[]
}

const useCompanyData = () => {
    const { t } = useTranslation();

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
                },
                {
                    img: imgMap.section_7_service_2_img_2,
                    desc: t('section_7_service_2_img_2')
                },
                {
                    img: imgMap.section_7_service_2_img_3,
                    desc: t('section_7_service_2_img_3')
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
                },
                {
                    img: imgMap.section_7_service_4_img_3,
                    desc: t('section_7_service_4_img_3')
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
                    img: imgMap.section_7_service_7_img_1,
                    desc: t('section_7_service_7_img_1')
                },
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

    return {
        services
    };
};

export default useCompanyData;