
import './tag.scss';

interface TagProps {
    text: string
}

const Tag = ({text}: TagProps) => {
    return (
        <div id="tag">
            <div className="tag-container">
                <div className="yellow-bar"></div>
                <div className="text">
                    {text}
                </div>
                <div className="ping"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Tag;