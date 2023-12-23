import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './home.scss';
import ASScroll from '@ashthornton/asscroll';
import Wrapper from '../../Components/Shared/Wrapper';
import Section1 from '../../Components/Sections/section1';
import Section2 from '../../Components/Sections/section2';
import Section3 from '../../Components/Sections/section3';
import Section4 from '../../Components/Sections/section4';
import Section5 from '../../Components/Sections/section5';

const Home = () => {
    const { t, i18n } = useTranslation();
    // const ref = useRef<HTMLDivElement>(null);
    // const { asscroll } = useASScroll(ref);
    const [asscroll, setAsscroll] = useState<ASScroll|null>(null);


    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);

        if (asscroll === null) {
            const asscroll = new ASScroll();
            asscroll.enable();
            setAsscroll(asscroll);
        }
    }, []);

    return (
        <Wrapper asscroll={asscroll}>
            <div
                className="asscroll-container"
                asscroll-container="true"
            >
                <div>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;