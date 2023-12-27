import gsap, { Power1, Power3 } from 'gsap/all';
import * as PIXI from 'pixi.js';
import getTitleText from './getTitleText';
import { Project } from './loader';

const randomAnimation = (projects: Project[]) => {
    const view = document.getElementById('show-cases-stage');
    let interval: null|NodeJS.Timer = null;

    if (view) {
        const { innerWidth: width, innerHeight: height} = window;
        const app = new PIXI.Application({
            width,
            height,
            view: view as HTMLCanvasElement
            // backgroundAlpha: 0
        });
    
        const title = getTitleText();
        app.stage.addChild(title as any);
    
        const getRandomEndPos = (obj: any) => {
            const rand = Math.random();
            const pos = { x: NaN, y: NaN, side: '' };
            console.log(obj.width, obj.height);
            // if (rand > 0.5) {
            //     pos.x = Math.round(Math.random() * width);
            //     if (rand > 0.75) {
            //         // top slide out
            //         pos.y = 0 - obj.height;
            //     } else {
            //         // bottom slide out
            //         pos.y = height + obj.height;
            //     }
            // } else {
            // pos.y = Math.round(Math.random() * (height + (obj.height * 2))) - obj.height;
            pos.y = Math.round(Math.random() * height);
            if (rand > 0.5) {
                // left slide out
                pos.x = 0 - obj.width;
                pos.side = 'left';
            } else {
                // right slide out
                pos.x = width + obj.width;
                pos.side = 'right';
            }
            // }
            return pos;
        };
        
        const addProg = (proj: Project) => {
            const container = new PIXI.Container();
            container.pivot.set(0.5, 0.5);
            container.position.set(width / 2, height / 2);
    
            const spirit = PIXI.Sprite.from(proj.img);
            spirit.anchor.set(0.5, 0.5);
            const text = new PIXI.Text(proj.desc, {
                fontSize: 90,
                fill: 0xffffff,
                fontWeight: 'bolder'
            });
            text.anchor.set(0.5, 0.5);
            text.position.y = spirit.height / 2 + text.height * 1.4;
            container.addChild(spirit as any, text);
    
            const pos = getRandomEndPos(container);
            container.scale.set(0);
            // if (pos.side === 'left') {
            //     container.proj.
            // } else {
    
            // }
    
            app.stage.addChild(container as any);
            gsap.to(container.scale, {
                x: 0.35, y: 0.35, duration: 8, ease: Power1.easeIn
            });
            gsap.to(container.position, {
                x: pos.x, y: pos.y, duration: 8, ease: Power3.easeIn
            });
        };
    
        let idx = 0;
        interval = setInterval(() => {
            addProg(projects[idx]);
            idx = (idx + 1) % projects.length;
        }, 600);
    }

    return () => {
        if (interval) clearInterval(interval);
    };
};

export default randomAnimation;