import './rect-btn.scss';

const RectBtn = ({
    text,
    onClick=() => {}
}: BtnProps) => {
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