import './bg-img-display.scss';

interface BgImgDisplayProps extends ImgDisplayProps {
    size?: 'rect'|'s4-3'|'s16-9'
}

const BgImgDisplay = ({
    img,
    desc,
    size='rect'
}: BgImgDisplayProps) => {
    return (
        <div id="bg-img-display">
            <div
                className={`img-container mb-2 ${size}`}
                style={
                    img ? {
                        backgroundImage: `url(${img})`
                    } : {}
                }
            >
            </div>
            <div className="desc pb-1">
                {desc}
            </div>
        </div>
    );
};

export default BgImgDisplay;