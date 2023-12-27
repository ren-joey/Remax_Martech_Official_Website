import * as PIXI from 'pixi.js';

const getTitleText = () => {
    const { innerWidth: width, innerHeight: height} = window;
    const title = new PIXI.Text('MARINE CASES', {
        fontSize: 90,
        fill: 0xffffff,
        fontWeight: 'bolder'
    });
    title.anchor.set(0.5, 0.5);
    title.position.set(width / 2, height / 2);
    return title;
};

export default getTitleText;