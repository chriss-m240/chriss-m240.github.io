let fog = function (p5) {
    let myShader;
    let canvas;

    let fogColor = [0.8, 0.9, 1, 1];

    p5.preload = function() {
        myShader = p5.loadShader('/js/illumination/3_fog_shader.vert', '/js/illumination/3_fog_shader.frag');
    }

    p5.setup = function() {
        canvas = p5.createCanvas(400, 400, p5.WEBGL);
        p5.noStroke();
        slider = p5.createSlider(0, 10, 5);
        slider.position(canvas.position().x + 20, canvas.position().y + 10);
        slider.style('width', '80px');
    }

    p5.draw = function() {
        let val = slider.value() / 10;
        p5.background(240);
        myShader.setUniform("u_fogColor", fogColor);
        myShader.setUniform("u_fogAmount", val);

        p5.shader(myShader);

        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.005);

        p5.box(p5.width / 4);
    }
}

new p5(fog, "fog")
