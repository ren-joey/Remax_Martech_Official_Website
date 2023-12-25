import './home.scss';
import Wrapper from '../../Components/Shared/Wrapper';
import Section1 from '../../Components/Sections/Section1';
import Section2 from '../../Components/Sections/Section2';
import Section3 from '../../Components/Sections/Section3';
import Section4 from '../../Components/Sections/Section4';
import Section5 from '../../Components/Sections/Section5';
import Section1to2 from '../../Components/Sections/Section1to2';
import Section2to3 from '../../Components/Sections/Section2to3';
import Section3to4 from '../../Components/Sections/Section3to4';
import Section4to5 from '../../Components/Sections/Section4to5';


const Home = () => {
    return (
        <Wrapper>
            <div className="scroll-container">
                <Section1 />
                <Section1to2 />
                <Section2 />
                <Section2to3 />
                <Section3 />
                <Section3to4 />
                <Section4 />
                <Section4to5 />
                <Section5 />
            </div>
        </Wrapper>
    );
};

export default Home;