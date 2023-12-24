import './logo.scss';

export interface MartechProps {
    color?: 'white'|'blue'
}

const Martech = ({ color='white' }: MartechProps) => {
    return (
        <div className={`logo martech ${color}`}></div>
    );
};

export default Martech;