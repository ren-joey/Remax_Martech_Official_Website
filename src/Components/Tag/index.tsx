
import './tag.scss';

interface TagProps {
    text: string,
    ping?: boolean
}

const Tag = ({
    text,
    ping = true
}: TagProps) => {
    const type = Math.ceil(Math.random() * 3);

    return (
        <div id="tag">
            <div className={`tag-container type-${type}`}>
                <div className="yellow-bar"></div>
                <div className="text">
                    {text}
                </div>
                {
                    ping ? (
                        <>
                            <div className="ping"></div>
                            <div className="dot"></div>
                        </>
                    ) : <></>
                }
            </div>
        </div>
    );
};

export default Tag;