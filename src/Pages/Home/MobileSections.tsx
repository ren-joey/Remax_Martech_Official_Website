import Section1 from '../../Components/Sections/mobile/Section1';
import Section2 from '../../Components/Sections/mobile/Section2';
import Section3 from '../../Components/Sections/mobile/Section3';
import Section4 from '../../Components/Sections/mobile/Section4';
import Section5 from '../../Components/Sections/mobile/Section5';
import Section1to2 from '../../Components/Sections/mobile/Section1to2';
import Section2to3 from '../../Components/Sections/mobile/Section2to3';
import Section3to4 from '../../Components/Sections/mobile/Section3to4';
import Section4to5 from '../../Components/Sections/mobile/Section4to5';

const MobileSections = () => {
    return (
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
    );
};

export default MobileSections;