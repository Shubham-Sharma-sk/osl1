import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkIsPointer = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isHoverable = 
        hoveredElement?.tagName === "A" || 
        hoveredElement?.tagName === "BUTTON" || 
        hoveredElement?.closest("a") || 
        hoveredElement?.closest("button") ||
        getComputedStyle(hoveredElement || document.body).cursor === "pointer";
      
      setIsPointer(isHoverable);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousemove", checkIsPointer);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mousemove", checkIsPointer);
    };
  }, [position]);

  return (
    <div className="custom-cursor hidden md:block">
      <div 
        className="cursor-dot absolute w-2 h-2 bg-white rounded-full" 
        style={{ 
          transform: `translate(-50%, -50%)`,
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div 
        className="cursor-follower absolute border border-white rounded-full" 
        style={{ 
          transform: `translate(-50%, -50%)`,
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '60px' : '32px',
          height: isPointer ? '60px' : '32px',
          transition: 'width 0.3s, height 0.3s, transform 0.1s'
        }}
      />
    </div>
  );
};

export default CustomCursor;
