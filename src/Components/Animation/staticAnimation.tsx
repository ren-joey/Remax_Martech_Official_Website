import gsap, { Power1, Power3 } from 'gsap/all';
import * as PIXI from 'pixi.js';
import getTitleText from './getTitleText';
import { Project } from './loader';


const staticAnimation = (projects: Project[]) => {
    const view = document.getElementById('show-cases-stage');
    const tl = gsap.timeline({
        repeat: -1
        // paused: true
        // scrollTrigger: {
        //     trigger: '.show-cases',
        //     toggleActions: 'restart pause resume none'
        // }
    });

    if (view) {
        const { innerWidth: width, innerHeight: height} = window;
        const app = new PIXI.Application({
            width,
            height,
            view: view as HTMLCanvasElement,
            backgroundAlpha: 0
        });
    
        const title = getTitleText();
        app.stage.addChild(title as any);

        projects.forEach((proj, idx) => {
            const container = new PIXI.Container();
            container.pivot.set(0.5, 0.5);
    
            const spirit = PIXI.Sprite.from(proj.img);
            spirit.scale.set(proj.end.scale);
            const h = spirit.height;
            spirit.anchor.set(0.5, 0.5);

            const text = new PIXI.Text(proj.desc, {
                fontSize: 72,
                fill: 0xffffff,
                fontWeight: 'bolder'
            });
            text.anchor.set(0.5, 0);
            text.y = h / 2 + text.height * 0.4;
            container.addChild(spirit as any, text);
            container.position.set(width / 2, height / 2);
            container.scale.set(0);

            app.stage.addChild(container as any);


            tl.to(container.scale, {
                x: 1, y: 1, duration: 6, ease: Power1.easeIn
            }, idx * 1);
            tl.to(container.position, {
                x: proj.end.x, y: proj.end.y, duration: 6, ease: Power3.easeIn
            }, idx * 1);
        });
    }

    return tl;
};

export default staticAnimation;