let phong = function (p5) {
    let myShaderI;
    let lightColor = [0.5, 0.5, 0.5];

    p5.preload = function() {
        myShaderI = p5.loadShader("/js/illumination/4_phong_shader.vert", "/js/illumination/4_phong_shader.frag");
    }

    p5.setup = function() {
        // shaders require WEBGL mode to work
        p5.createCanvas(400, 400, p5.WEBGL);
        p5.noStroke();
    }

    p5.draw = function() {
        p5.background(240);
        // ambientLight(225);
        // shader() sets the active shader with our shader
        myShaderI.setUniform("u_Ambient_color", lightColor);

        myShaderI.setUniform("u_Light_position", lightColor);
        myShaderI.setUniform("u_Shininess", 10);

        p5.shader(myShaderI);

        // Rotate our geometry on the X and Y axes
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.0065);
        // ambientMaterial(230, 3, 23)
        // Draw some geometry to the screen
        p5.box(p5.width / 4);
    }
}

new p5(phong, "phong")
