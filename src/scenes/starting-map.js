import { BACKGROUND_ASSET_KEYS, IMAGE_ASSET_KEYS } from "../assets/asset-keys"
import { SCENE_KEYS } from "./scene-keys"
import Phaser from "phaser"

export class StartingMap extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.STARTING_MAP
        })
    }

    create() {
        this.add.image(0, 75, BACKGROUND_ASSET_KEYS.STARTING_MAP_BACKGROUND).setOrigin(0)

        this.add.container(0, 0 [
            this.add.rectangle(0, 0, this.scale.width*2, 150, 0xffffff, 1),
            this.add.text(20, 26, 'Laneyboy', {
                color: 'black',
                fontSize: '24px',
                fontStyle: 'bold',
                fontFamily: 'PressStart2P'
            }),
            this.add.image(this.scale.width - 20, 12, IMAGE_ASSET_KEYS.DEFAULT_PROFILE).setOrigin(1, 0).setScale(.15)
        ])  

    }
}