import './messager.scss';

const Messager = () => {
    return (
        <div className="messager-container">
            <div
                className="messager"
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

export default Messager;