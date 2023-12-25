
import './tag.scss';

interface TagProps {
    text: string
}

const Tag = ({text}: TagProps) => {
    const type = Math.ceil(Math.random() * 3);

    return (
        <div id="tag">
            <div className={`tag-container type-${type}`}>
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