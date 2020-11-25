precision mediump float;

varying vec2 vTexCoord;

uniform vec4 u_fogColor;
uniform float u_fogAmount;

void main() {
  vec4 color = vec4(vTexCoord.x, vTexCoord.y, 1.0, 1.0);
  gl_FragColor = mix(color, u_fogColor, u_fogAmount);  
}