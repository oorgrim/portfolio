import { useRef, useEffect, useState } from "react";

const useMovement = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isMoving) return;
      setOffset((prev) => ({
        x: prev.x + event.movementX,
        y: prev.y + event.movementY,
      }));
    };

    const handleMouseUp = () => {
      setIsMoving(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMoving]);

  const handleMouseDown = () => {
    setIsMoving(true);
  };

  return {
    ref,
    handleMouseDown,
    offset,
  };
};

export default useMovement;
