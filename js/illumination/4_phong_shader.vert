attribute vec3 aPosition;
// attribute vec3 a_Vertex_normal
attribute vec2 aTexCoord;


uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

varying vec2 vTexCoord;
varying vec3 v_Vertex;
varying vec3 v_Normal;

void main() {
  
  vec4 positionVec4 = vec4(aPosition, 1.0);

  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;

  vTexCoord = aTexCoord;
  v_Vertex = vec3( uModelViewMatrix * vec4(aPosition, 1.0));
  v_Normal = vec3( uModelViewMatrix * vec4(aPosition, 0.0) );

}