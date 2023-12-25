import { useNavigate } from 'react-router-dom';
import RectBtn from '../Buttons/RectBtn';
import { useTranslation } from 'react-i18next';
import SideBtn from '../Buttons/SideBtn';
import BgImgDisplay from '../Images/BgImgDisplay';
import './service-slider.scss';
import { useState } from 'react';

export interface ServiceSliderProps {
    title: string,
    desc: string,
    pathname: string,
    imgs: ImgDisplayProps[]
}

const ServiceSlider = ({
    title,
    desc,
    pathname,
    imgs
}: ServiceSliderProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const len = imgs.length > 3 ? 3 : imgs.length;
    const [mImgs, setMImgs] = useState(imgs.slice(0, len - 1));
    const [lgImg, setLgImgs] = useState(imgs[len - 1]);

    const nextImg = () => {
        const prevLgImg = {...lgImg};
        if (len === 2) {
            setLgImgs({...mImgs[0]});
            setMImgs([prevLgImg]);
        } else {
            setLgImgs({...mImgs[1]});
            setMImgs([prevLgImg, {...mImgs[0]}]);
        }
    };

    const prevImg = () => {
        const prevLgImg = {...lgImg};
        if (len === 2) {
            setLgImgs({...mImgs[0]});
            setMImgs([prevLgImg]);
        } else {
            setLgImgs({...mImgs[1]});
            setMImgs([prevLgImg, {...mImgs[0]}]);
        }
    };

    return (
        <div className="service-slider">
            <div className="title mb-4">
                {title}
            </div>
            <div className="content-side">
                <div className="desc mb-8">
                    {desc}
                </div>
                <div className="control mb-8">
                    <div className="mr-auto">
                        <RectBtn
                            text={t('more_details')}
                            onClick={() => navigate(pathname)}
                        />
                    </div>

                    {
                        len > 1 ? (
                            <div className="btn-container mr-2">
                                <SideBtn
                                    side="left"
                                    onClick={prevImg}
                                />
                            </div>
                        ) : ''
                    }
                    {
                        len > 1 ? (
                            <div className="btn-container">
                                <SideBtn
                                    side="right"
                                    onClick={nextImg}
                                />
                            </div>
                        ) : ''
                    }
                </div>
                <div className="image-slides mt-4">
                    {
                        mImgs.map((img, idx) => (
                            <div
                                className="image-container"
                                key={idx}
                            >
                                <BgImgDisplay
                                    img={img.img}
                                    desc={img.desc}
                                    size="s4-3"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="image-side">
                <div className="image-container">
                    <BgImgDisplay
                        img={lgImg.img}
                        desc={lgImg.desc}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceSlider;