import './side-btn.scss';

interface SideBtnProps {
    side: 'left'|'right',
    onClick?: () => void
}

const SideBtn = ({
    side='left',
    onClick=() => {}
}: SideBtnProps) => {
    return (
        <div
            className="side-btn"
            onClick={onClick}
        >
            <div className={`side-icon ${side}`}></div>
        </div>
    );
};

export default SideBtn;