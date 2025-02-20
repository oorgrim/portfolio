import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef } from "react";

export default function FloatingText({ text, position }) {
  const textRef = useRef();
  useFrame(() => {
    textRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.005;
  });

  return (
    <Text ref={textRef} position={position} fontSize={0.5} color="lime">
      {text}
    </Text>
  );
}
