import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GUI} from 'https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js';

 function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 50;
    const aspect = 2;  // the canvas default
    const near = 1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 20);

     const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();

     const scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    {
      const cubeSize = 4;
      const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMat = new THREE.MeshPhongMaterial({color: '#8AC'});
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);
      mesh.position.set(cubeSize + 1, cubeSize / 2, 0);
      scene.add(mesh);
    }

    {
      const cubeSize = 6;
      const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMat = new THREE.MeshPhongMaterial({color: '#4AD'});
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);
      mesh.position.set(cubeSize + 20, cubeSize, 20);
      scene.add(mesh);
    }

    {
      const cubeSize = 2;
      const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMat = new THREE.MeshPhongMaterial({color: '#4AD'});
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);
      mesh.position.set(cubeSize - 20, cubeSize, 20);
      scene.add(mesh);
    }

    {
      const cubeSize = 8;
      const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMat = new THREE.MeshPhongMaterial({color: '#9CE'});
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);
      mesh.position.set(cubeSize - 20, cubeSize, -20);
      scene.add(mesh);
    }

    {
      const cubeSize = 3;
      const cubeGeo = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
      const cubeMat = new THREE.MeshPhongMaterial({color: '#9CE'});
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);
      mesh.position.set(cubeSize + 20, cubeSize, -20);
      scene.add(mesh);
    }

     class ColorGUIHelper {
      constructor(object, prop) {
        this.object = object;
        this.prop = prop;
      }
      get value() {
        return `#${this.object[this.prop].getHexString()}`;
      }
      set value(hexString) {
        this.object[this.prop].set(hexString);
      }
    }

     {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.AmbientLight(color, intensity);
      scene.add(light);

      const gui = new GUI({ autoPlace: false });
      gui.domElement.id = 'gui';
      gui_container.appendChild(gui.domElement);
      gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
      gui.add(light, 'intensity', 0, 2, 0.01);
    }

     function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth - 50;
      const height = canvas.clientHeight- 50;
      const needResize = canvas.width- 50 !== width || canvas.height- 50 !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

     function render() {

       if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

       renderer.render(scene, camera);

       requestAnimationFrame(render);
    }

     requestAnimationFrame(render);
  }

   main();
