import './simple-img-display.scss';

const SimpleImgDisplay = ({
    img,
    desc
}: ImgDisplayProps) => {
    return (
        <div id="simple-img-display">
            <div
                className="img-container mb-4"
                style={
                    img ? {
                        backgroundImage: `url(${img})`
                    } : {}
                }
            >
            </div>
            <div className="desc">
                {desc}
            </div>
        </div>
    );
};

export default SimpleImgDisplay;