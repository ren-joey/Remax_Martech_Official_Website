import ASScroll from '@ashthornton/asscroll';
import Messager from '../Messager';
import { useEffect } from 'react';
import Header from './Header';

interface WrapperProps {
    children: JSX.Element,
    asscroll: ASScroll|null
}

const Wrapper = ({ children, asscroll }: WrapperProps) => {

    return (
        <div className="wrapper">
            { asscroll !== null ? (
                <Header asscroll={asscroll} />
            ) : ''}
            { children }
            <Messager />
        </div>
    );
};

export default Wrapper;