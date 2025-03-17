import { BACKGROUND_ASSET_KEYS, IMAGE_ASSET_KEYS } from "../assets/asset-keys";
import { SCENE_KEYS } from "./scene-keys";
import Phaser from "phaser"

export class PreloadScene extends Phaser.Scene{
    constructor(){
        super({
            key: SCENE_KEYS.PRELOAD
        })
    }

    preload() {
        const mapFilePath = '../src/assets/maps'
        const imageFilePath = '../src/assets/images'

        // LOAD MAP
        this.load.image(BACKGROUND_ASSET_KEYS.STARTING_MAP_BACKGROUND, `${mapFilePath}/starting-map.jpg`)

        // LOAD PROFILE PIC
        this.load.image(IMAGE_ASSET_KEYS.DEFAULT_PROFILE, `${imageFilePath}/defaultProfile.png`)

        // LOAD FONTS
        this.load.font('PressStart2P', '../src/assets/fonts/PressStart2P-Regular.ttf', 'trueType')
    }

    create() {
        this.scene.start(SCENE_KEYS.STARTING_MAP)
    }

}