import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Make cursor visible after component mounts
    setIsVisible(true);
    
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkIsPointer = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isHoverable = 
        hoveredElement?.tagName === "A" || 
        hoveredElement?.tagName === "BUTTON" || 
        hoveredElement?.closest("a") !== null || 
        hoveredElement?.closest("button") !== null ||
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

  // Don't render anything until we have a position
  if (!isVisible) return null;

  return (
    <div className="custom-cursor block">
      {/* Main dot */}
      <div 
        className="cursor-dot absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full z-[9999]" 
        style={{ 
          transform: `translate(-50%, -50%)`,
          left: `${position.x}px`,
          top: `${position.y}px`,
          mixBlendMode: "difference"
        }}
      />
      {/* Outer ring */}
      <div 
        className="cursor-follower absolute rounded-full z-[9998]" 
        style={{ 
          transform: `translate(-50%, -50%)`,
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '80px' : '40px',
          height: isPointer ? '80px' : '40px',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          transition: 'width 0.3s, height 0.3s, transform 0.1s',
          mixBlendMode: "difference"
        }}
      />
      {/* Subtle glow effect */}
      <div 
        className="cursor-glow absolute rounded-full blur-md z-[9997]" 
        style={{ 
          transform: `translate(-50%, -50%)`,
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '100px' : '60px',
          height: isPointer ? '100px' : '60px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)',
          transition: 'width 0.3s, height 0.3s, transform 0.1s',
          opacity: isPointer ? 0.8 : 0.4
        }}
      />
    </div>
  );
};

export default CustomCursor;
