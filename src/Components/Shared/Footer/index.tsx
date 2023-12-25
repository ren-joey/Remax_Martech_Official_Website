import { useTranslation } from 'react-i18next';
import './footer.scss';
import Martech from '../../Logos/Martech';
import Remax from '../../Logos/Remax';
import gsap from 'gsap';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="col-block">
                    <div className="title">
                        {t('footer_col_1_title')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: 2960 + 100 })}
                    >
                        {t('footer_col_1_nav_1')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: 4238 + 100 })}
                    >
                        {t('footer_col_1_nav_2')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: 6191 - 100 })}
                    >
                        {t('footer_col_1_nav_3')}
                    </div>
                </div>
                <div className="col-block">
                    <div className="title">
                        {t('footer_col_2_title')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_1', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_1')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_2', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_2')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_3', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_3')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_4', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_4')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_5', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_5')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_6', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_6')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_7', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_7')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_8', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_8')}
                    </div>
                    <div
                        className="nav-item clickable"
                        onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#service_slider_9', offsetY: 200 } })}
                    >
                        {t('footer_col_2_nav_9')}
                    </div>
                    <div className="nav-item clickable">
                        {t('footer_col_2_nav_10')}
                    </div>
                </div>
                <div className="col-block">
                    <div className="title">
                        {t('footer_col_3_title')}
                    </div>
                    <div className="nav-item">
                        {t('footer_col_3_content')}
                    </div>
                </div>
                <div className="divider"></div>
                <div className="col-block w-full text-center">
                    <div className="nav-item">
                        {t('footer_copyright')}
                    </div>
                </div>
                <div className="col-block w-full flex justify-center mt-4 mb-16">
                    <div className="logo-container">
                        <Martech />
                    </div>
                    <div className="logo-container">
                        <Remax />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;