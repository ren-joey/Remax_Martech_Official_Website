import './messenger.scss';

const Messenger = () => {
    return (
        <div className="messenger-container">
            <div
                className="messenger"
                onClick={() => window.open('mailto:sales@martech-eng.com')}
            >
                <div className="icon">
                    <div className="icon-bg"></div>
                </div>
                <div className="text">
                    Send Email
                </div>
            </div>
        </div>
    );
};

export default Messenger;