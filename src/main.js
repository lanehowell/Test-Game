import { PreloadScene } from './scenes/preload'
import { SCENE_KEYS } from './scenes/scene-keys'
import { StartingMap } from './scenes/starting-map'
import './styles/style.css'
import Phaser from 'phaser'

const game = new Phaser.Game({
  pixelArt: false,
  type: Phaser.CANVAS,
  scale: {
    parent: 'app',
    width: 1024,
    height: 576,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  backgroundColor: '#000000'
})

// LOAD SCENES IN
game.scene.add(SCENE_KEYS.PRELOAD, PreloadScene)
game.scene.add(SCENE_KEYS.STARTING_MAP, StartingMap)

// START GAME BY FIRST LOADING IN ALL NEEDED ASSETS
game.scene.start(SCENE_KEYS.PRELOAD, PreloadScene)
