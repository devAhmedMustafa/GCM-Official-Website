<script>
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    export let animationSpeed = 0.7;
    let canvas;
    let container;
    let scene, camera, renderer, heartModel;
    let rafId;
    let mixer;
    let clock;

    $: if (mixer) mixer.timeScale = animationSpeed;

    function resizeRendererToDisplaySize() {
        if (!renderer || !container) return;
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;
        if (renderer.domElement.width !== width || renderer.domElement.height !== height) {
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    }

    onMount(() => {
    scene = new THREE.Scene();
    scene.background = null;

        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 5);

        // lights
        const ambient = new THREE.AmbientLight(0xffffff, 1.2);
        scene.add(ambient);
        const dir = new THREE.DirectionalLight(0xffffff, 2);
        dir.position.set(1, 5, 5);
        scene.add(dir);

        try {
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        } catch (err) {
            console.error('WebGL renderer init failed', err);
            return;
        }

        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        resizeRendererToDisplaySize();

        const loader = new GLTFLoader();
        loader.load(
            '/heart_model.glb',
            (gltf) => {
                heartModel = gltf.scene;
                scene.add(heartModel);

                const box = new THREE.Box3().setFromObject(heartModel);
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);

                const DEFAULT_TARGET_SIZE = 2.0;
                let scaleFactor = 1;
                if (maxDim > 0) {
                    scaleFactor = DEFAULT_TARGET_SIZE / maxDim;
                }
                heartModel.scale.multiplyScalar(scaleFactor);

                const box2 = new THREE.Box3().setFromObject(heartModel);
                const center = box2.getCenter(new THREE.Vector3());
                // Shift to the right of the center
                heartModel.position.sub(center);
                heartModel.position.x += 1;

                const sphere = new THREE.Sphere();
                box2.getBoundingSphere(sphere);
                const radius = sphere.radius;
                const distance = Math.max(5, radius * 2.8);
                camera.position.set(0, 0, distance);
                camera.lookAt(0, 0, 0);

                if (gltf.animations && gltf.animations.length > 0) {
                    mixer = new THREE.AnimationMixer(heartModel);
                    const action = mixer.clipAction(gltf.animations[0]);
                    action.timeScale = animationSpeed;
                    mixer.timeScale = animationSpeed;
                    action.play();
                }
            },
            undefined,
            (err) => {
                console.error('Failed to load heart model:', err);
            }
        );

        clock = new THREE.Clock();

        function animate() {
            rafId = requestAnimationFrame(animate);
            resizeRendererToDisplaySize();
            const delta = clock.getDelta();
            if (mixer) {
                mixer.update(delta);
            } else if (heartModel) {
                heartModel.rotation.y += 0.02 * animationSpeed;
            }

            renderer.render(scene, camera);
        }

        window.addEventListener('resize', resizeRendererToDisplaySize);
        animate();
    });

</script>

<div bind:this={container} class="scene-container">
    <canvas bind:this={canvas} class="scene-canvas" aria-hidden="true"></canvas>
</div>

<style>
    .scene-container {
        width: 100vw;
        height: 100vh;
        min-height: 360px;
        display: block;
        position: absolute;
        overflow: hidden;
        border-radius: var(--border-radius, 8px);
        background: transparent;
        z-index: -1;
    }

    .scene-canvas {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>