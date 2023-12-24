import './rect-btn.scss';

interface RectBtnProps {
    text: string,
    onClick?: () => void
}

const RectBtn = ({
    text,
    onClick=() => {}
}: RectBtnProps) => {
    return (
        <div id="rect-btn">
            <div
                className="rect-btn-container"
                onClick={onClick}
            >
                {text}
            </div>
        </div>
    );
};

export default RectBtn;