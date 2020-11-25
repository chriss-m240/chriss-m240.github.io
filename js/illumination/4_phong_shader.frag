precision mediump float;

varying vec2 vTexCoord;
varying vec3 v_Vertex;
varying vec3 v_Normal;

uniform vec3 u_Light_position;
uniform float u_Shininess;
uniform vec3 u_Ambient_color;

void main() {
  vec3 to_light;
  vec3 vertex_normal;
  float diffuse;
  float specular;
  
  to_light = u_Light_position - v_Vertex;
  to_light = normalize( to_light );
  
  vertex_normal = normalize( v_Normal );
  
  diffuse = dot(vertex_normal, to_light);
  diffuse = clamp(diffuse, 0.0, 1.0);
  
  // SPECULAR
  vec3 reflection = 2.0 * dot(vertex_normal, to_light) * vertex_normal - to_light;
  reflection = normalize( reflection );
  
  vec3 to_camera = -1.0 * v_Vertex;
  to_camera = normalize( to_camera );

  
  specular = dot(reflection, to_camera);
  specular = clamp(specular, 0.0, 1.0);
  specular = pow(specular, u_Shininess);
  
  vec4 color = vec4(vTexCoord.x, vTexCoord.y, 1.0, 1.0);
  
  gl_FragColor = vec4(vec3(color) * (u_Ambient_color  + diffuse + specular), 1.0);
  
}