import Phaser from 'phaser';
import { isReal } from '@noir/sim';

new Phaser.Game({
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  parent: 'game',
  scene: {
    create(this: Phaser.Scene) {
      this.add.text(20, 20, `isReal(black, white) = ${isReal('black', 'white')}`);
    },
  },
});