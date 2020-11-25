let attenuation = function (p5) {
    p5.setup = function() {
        let canvas = p5.createCanvas(400, 400, p5.WEBGL);
        p5.noStroke();
        slider = p5.createSlider(80, 280, 280);
        slider.position(canvas.position().x + 10, canvas.position().y + 90);
        slider.style('width', '80px');
      }
      
      p5.draw = function() {
        let val = slider.value();
        p5.background(128,64,0);
        
        p5.pointLight(255,255,255, 20, 0, val);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.005);
        p5.box(100);
      }
}

new p5(attenuation, "attenuation")
