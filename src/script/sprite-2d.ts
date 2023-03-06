import * as BABYLON from 'babylonjs'
/* 2D 地图 */
export class Sprite2DMap {
    engine: BABYLON.Engine
    scene: BABYLON.Scene

    constructor(private readonly canvas: HTMLCanvasElement) {
        this.engine = new BABYLON.Engine(this.canvas)
        this.scene = new BABYLON.Scene(this.engine)
        this.createSprite()
        this.engine.runRenderLoop(() => {
            this.scene.render()
        })
    }



    createSprite() {
        this.scene.createDefaultCamera()
        this.scene.createDefaultEnvironment()
        this.scene.createDefaultLight()

        // const map = new BABYLON.Sprite()




    }


}

