import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

export default function Room() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <Text position={[0, 2, 0]} fontSize={0.5} color="cyan">
        WELCOME TO THIS SPACE
      </Text>
    </Canvas>
  );
}
