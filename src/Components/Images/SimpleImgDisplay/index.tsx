import './simple-img-display.scss';

interface SimpleImgDisplayProps {
    img: string|undefined,
    desc?: string|undefined
}

const SimpleImgDisplay = ({
    img,
    desc
}: SimpleImgDisplayProps) => {
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