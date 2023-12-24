import './logo.scss';

export interface RemaxProps {
    color?: 'white'|'blue'
}

const Remax = ({ color='white' }: RemaxProps) => {
    return (
        <div className={`logo remax ${color}`}></div>
    );
};

export default Remax;