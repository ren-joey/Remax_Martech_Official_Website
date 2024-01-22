import './home.scss';
import Wrapper from '../../Components/Shared/Wrapper';
import { useContext } from 'react';
import { GlobDataContext } from '../../Context/GlobDataProvider';
import DesktopSections from './DesktopSections';
import MobileSections from './MobileSections';

const Home = () => {
    const { device } = useContext(GlobDataContext);

    return (
        <Wrapper>
            {
                device === 'desktop' ? (
                    <DesktopSections />
                ) : (
                    <MobileSections />
                )
            }
        </Wrapper>
    );
};

export default Home;