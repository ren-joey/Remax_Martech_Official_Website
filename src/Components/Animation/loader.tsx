import { Assets, AssetsManifest, UnresolvedAsset } from 'pixi.js';
import ImgMap from '../Images/imgMap';
import { useTranslation } from 'react-i18next';

export interface Pos {
    x: number,
    y: number,
    scale: number,
    side: 'left'|'right'
}

export interface Project {
    desc: string,
    img: string,
    end: Pos
}

const useAssets = () => {
    const { t } = useTranslation();

    const projects: Project[] = [
        {
            img: ImgMap.section_5_case_1,
            desc: t('section_5_case_1'),
            end: { x: -448, y: 0.21 * window.innerHeight, scale: 1.4, side: 'left' }
        },
        {
            img: ImgMap.section_5_case_2,
            desc: t('section_5_case_2'),
            end: { x: window.innerWidth + 1536, y: 0.9 * window.innerHeight, scale: 0.5, side: 'right' }
        },
        {
            img: ImgMap.section_5_case_3,
            desc: t('section_5_case_3'),
            end: { x: window.innerWidth + 1707, y: 0.1 * window.innerHeight, scale: 0.45, side: 'right' }
        },
        {
            img: ImgMap.section_5_case_4,
            desc: t('section_5_case_4'),
            end: { x: -505, y: 0.6 * window.innerHeight, scale: 1.4, side: 'left' }
        },
        {
            img: ImgMap.section_5_case_5,
            desc: t('section_5_case_5'),
            end: { x: window.innerWidth + 2048, y: 0.5 * window.innerHeight, scale: 0.3, side: 'right' }
        },
        {
            img: ImgMap.section_5_case_6,
            desc: t('section_5_case_6'),
            end: { x: -1477, y: 0.8 * window.innerHeight, scale: 0.6, side: 'left' }
        },
        {
            img: ImgMap.section_5_case_7,
            desc: t('section_5_case_7'),
            end: { x: -2048, y: 0, scale: 0.36, side: 'left' }
        },
        {
            img: ImgMap.section_5_case_8,
            desc: t('section_5_case_8'),
            end: { x: window.innerWidth + 2048, y: 0.38 * window.innerHeight, scale: 0.3, side: 'right' }
        }
    ];

    const assets: UnresolvedAsset<any>[] = [];

    projects.forEach((proj) => {
        assets.push({
            alias: proj.desc,
            src: proj.img
        });
    });

    const manifest: AssetsManifest = {
        bundles: [
            {
                name: 'show-cases',
                assets
            }
        ]
    };

    const loader = async () => {
        await Assets.init({ manifest });
        await Assets.loadBundle('show-cases');
    };

    return {
        loader,
        projects
    };
};

export default useAssets;