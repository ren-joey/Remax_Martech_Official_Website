import './staggered-slide-show.scss';

interface StaggeredSlideShowProps {
    imgs: string[]
}

const StaggeredSlideShow = ({
    imgs
}: StaggeredSlideShowProps) => {
    // const half = Math.floor(imgs.length / 2);
    // const evenImgs = imgs.slice(0, half);
    // const oddImgs = imgs.slice(half + 1);

    return (
        <div id="staggered-slide-show">
            <div className="wrapper flex-wrap">
                <div className="upper flex w-full">
                    <div className="flex-2">
                        <div className="p-4">
                            <div
                                className="img-item"
                                style={{
                                    backgroundImage: `url("${imgs[0]}")`
                                }}
                            >
                            </div>
                        </div>
                    </div>
                    <div className="flex-2">
                        <div className="p-4">
                            <div
                                className="img-item"
                                style={{
                                    backgroundImage: `url("${imgs[1]}")`
                                }}
                            >
                            </div>
                        </div>
                    </div>
                    <div className="flex-2">
                        <div className="p-4">
                            <div
                                className="img-item"
                                style={{
                                    backgroundImage: `url("${imgs[2]}")`
                                }}
                            >
                            </div>
                        </div>
                    </div>
                    <div className="flex-1"></div>
                </div>
                <div className="down flex w-full">
                    <div className="flex-1"></div>
                    <div className="flex-2">
                        <div className="p-4">
                            <div
                                className="img-item"
                                style={{
                                    backgroundImage: `url("${imgs[3]}")`
                                }}
                            >
                            </div>
                        </div>
                    </div>
                    <div className="flex-2">
                        <div className="p-4">
                            <div
                                className="img-item"
                                style={{
                                    backgroundImage: `url("${imgs[4]}")`
                                }}
                            >
                            </div>
                        </div>
                    </div>
                    <div className="flex-2">
                        <div className="p-4">
                            <div
                                className="img-item"
                                style={{
                                    backgroundImage: `url("${imgs[5]}")`
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaggeredSlideShow;