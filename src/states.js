import { planeMesh, camera,controls } from "./background";
import gsap from "gsap";

export const AnimateTo = (Class, Object,status,duration,delay) =>  {            
            const a = States[status][Class][Object].x;
            const b = States[status][Class][Object].y;
            const c = States[status][Class][Object].z;
            let casee = 3;
            if(Class === "camera") { casee = 1; }
            if(Object === "rotation") { casee = casee + 1; }
    
            if(casee === 1)
            {
                gsap.to(camera.position, {x : a, y : b, z : c,
                    onUpdate: () => {
                        camera.position.set(camera.position.x,camera.position.y,camera.position.z);      
                        controls.update();
                    },
                    delay : delay,
                    duration: duration
                })
            }
            else if (casee === 2)
            {
                gsap.to(camera.rotation, {x : a, y : b, z : c,
                    onUpdate: () => {
                        camera.rotation.set(camera.rotation.x,camera.rotation.y,camera.rotation.z);      
                        controls.update();
                    },
                    delay : delay,
                    duration: duration
                })
            }
            else if(casee === 3)
            {
                gsap.to(planeMesh.position, {x : a, y : b, z : c,
                    onUpdate: () => {
                        planeMesh.position.set(planeMesh.position.x,planeMesh.position.y,planeMesh.position.z);      
                        controls.update();
                    },
                    delay : delay,
                    duration: duration
                })
            }
            else if(casee === 4)
            {
                gsap.to(planeMesh.rotation, {x : a, y : b, z : c,
                    onUpdate: () => {
                        planeMesh.rotation.set(planeMesh.rotation.x,planeMesh.rotation.y,planeMesh.rotation.z);      
                        controls.update();
                    },
                    delay : delay,
                    duration: duration
                })
            }
    }

export const SetState = (state) => {
    const requiredState = States[state];
    camera.position.set(requiredState["camera"]["position"].x,requiredState["camera"]["position"].y,requiredState["camera"]["position"].z);
    camera.rotation.set(requiredState["camera"]["rotation"].x,requiredState["camera"]["rotation"].y,requiredState["camera"]["rotation"].z);
    planeMesh.position.set(requiredState["planeMesh"]["position"].x,requiredState["planeMesh"]["position"].y,requiredState["planeMesh"]["position"].z);
    planeMesh.rotation.set(requiredState["planeMesh"]["rotation"].x,requiredState["planeMesh"]["rotation"].y,requiredState["planeMesh"]["rotation"].z);
}

export const States = {
    "home0" : 
        {
            "camera" : {
                "position" : 
                {
                    x : -0.7278575092282116, 
                    y : -8.496655387373522,
                    z : 3.974732456635354,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            },

            planeMesh : {
                position : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            }
        },

        "home1" : 
        {
            camera : {
                position : 
                {
                    x : 0, 
                    y : -8.496655387373522,
                    z : 8.974732456635354,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            },

            planeMesh : {
                position : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            }
        },
        "home2" : 
        {
            camera : {
                position : 
                {
                    x : 0, 
                    y : 1.496655387373522,
                    z : 8.974732456635354,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            },

            planeMesh : {
                position : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            }
        },

        "index0" : 
        {
            camera : {
                position : 
                {
                    x : 0, 
                    y : 1.496655387373522,
                    z : 8.974732456635354,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            },

            planeMesh : {
                position : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            }
        },

        "index1" : 
        {
            camera : {
                position : 
                {
                    x : 0, 
                    y : 1.496655387373522,
                    z : 8.974732456635354,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            },

            planeMesh : {
                position : 
                {
                    x : 0, 
                    y : 0,
                    z : -46,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            }
        },

        "index2" : 
        {
            camera : {
                position : 
                {
                    x : 0, 
                    y : 1.496655387373522,
                    z : 8.974732456635354,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            },

            planeMesh : {
                position : 
                {
                    x : 0, 
                    y : 0,
                    z : 7,
                },
                rotation : 
                {
                    x : 0, 
                    y : 0,
                    z : 0,
                }
            }
        },

    }

    