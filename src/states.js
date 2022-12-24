import { camera,controls } from "./background";
import gsap from "gsap";

export const AnimateTo = (classObject,a,b,c) =>  {
            gsap.to(classObject, {x : a, y : b, z : c,
                onUpdate: () => {
                    classObject.set(a,b,c)      
                    controls.update();
                  },
                  duration: 0.5
            })
    }

export const States = {
    home0 : {
        width: 300,
        height: 300,
        widthSegments: 182,
        heightSegments: 188,
        cameraPositionX : -0.7278575092282116,
        cameraPositionY : -8.496655387373522,
        cameraPositionZ : 3.974732456635354,
        cameraRotationX : 0,
        cameraRotationY : 0,
        cameraRotationZ : 0,
        planeMeshPositionX : 0,
        planeMeshPositionY : 0,
        planeMeshPositionZ : 0,
        planeMeshRotationX : 0,
        planeMeshRotationY : 0,
        planeMeshRotationZ : 0,
    },

    home1 : {
        width: 300,
        height: 300,
        widthSegments: 182,
        heightSegments: 188,
        cameraPositionX : 0,
        cameraPositionY : -8.496655387373522,
        cameraPositionZ : 9,
        cameraRotationX : 0,
        cameraRotationY : 0,
        cameraRotationZ : 0,
        planeMeshPositionX : 0,
        planeMeshPositionY : 0,
        planeMeshPositionZ : 0,
        planeMeshRotationX : 0,
        planeMeshRotationY : 0,
        planeMeshRotationZ : 0,
    },

    home2 : {
        width: 300,
        height: 300,
        widthSegments: 182,
        heightSegments: 188,
        cameraPositionX : 0,
        cameraPositionY : 1.5,
        cameraPositionZ : 9,
        cameraRotationX : 0,
        cameraRotationY : 0,
        cameraRotationZ : 0,
        planeMeshPositionX : 0,
        planeMeshPositionY : 0,
        planeMeshPositionZ : 0,
        planeMeshRotationX : 0,
        planeMeshRotationY : 0,
        planeMeshRotationZ : 0,
    },

 };