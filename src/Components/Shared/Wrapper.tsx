import ASScroll from '@ashthornton/asscroll';
import Messager from '../Messager';
import { useEffect } from 'react';
import Header, { Theme } from './Header';
import Footer from './Footer';



interface WrapperProps {
    children: JSX.Element,
    asscroll?: ASScroll|null,
    theme?: Theme
}

const Wrapper = ({
    children,
    theme='dark',
    asscroll=null
}: WrapperProps) => {

    return (
        <div className="wrapper">
            <Header
                asscroll={asscroll}
                theme={theme}
            />
            { children }
            <Messager />
            <Footer />
        </div>
    );
};

export default Wrapper;