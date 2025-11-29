import React, { useState, useRef, useEffect } from 'react';

export function GenderIdentitySquare({ 
    manValue = 50, 
    womanValue = 50, 
    onValueChange,
    disabled = false 
}) {
    const squareRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Convert percentage values to pixel positions
    useEffect(() => {
        if (squareRef.current) {
            const size = squareRef.current.clientWidth;
            const x = (manValue / 100) * size;
            const y = size - (womanValue / 100) * size; // Invert Y axis
            setPosition({ x, y });
        }
    }, [manValue, womanValue]);

    const handleMouseDown = (e) => {
        if (disabled) return;
        setIsDragging(true);
        updatePosition(e);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || disabled) return;
        updatePosition(e);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const updatePosition = (e) => {
        if (!squareRef.current) return;
        
        const rect = squareRef.current.getBoundingClientRect();
        const size = rect.width;
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        // Clamp values within the square
        x = Math.max(0, Math.min(size, x));
        y = Math.max(0, Math.min(size, y));
        
        setPosition({ x, y });
        
        // Convert to percentages
        const manPercent = Math.round((x / size) * 100);
        const womanPercent = Math.round(100 - (y / size) * 100); // Invert Y axis
        
        if (onValueChange) {
            onValueChange(manPercent, womanPercent);
        }
    };

    // Add event listeners for dragging
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div
                ref={squareRef}
                style={{
                    width: '200px',
                    height: '200px',
                    border: '2px solid #4A154B',
                    position: 'relative',
                    cursor: disabled ? 'default' : 'pointer',
                    background: `linear-gradient(to bottom right, 
                        rgba(74, 21, 75, 0.1) 0%, 
                        rgba(74, 21, 75, 0.3) 100%)`
                }}
                onMouseDown={handleMouseDown}
            >
                {/* X and Y axis labels */}
                <div style={{
                    position: 'absolute',
                    top: '5px',
                    left: '5px',
                    fontSize: '12px',
                    color: '#4A154B',
                    fontWeight: 'bold'
                }}>
                    Man: {manValue}%
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    fontSize: '12px',
                    color: '#4A154B',
                    fontWeight: 'bold'
                }}>
                    Woman: {womanValue}%
                </div>
                
                {/* Draggable point */}
                <div
                    style={{
                        position: 'absolute',
                        left: `${position.x - 8}px`,
                        top: `${position.y - 8}px`,
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: '#4A154B',
                        border: '2px solid white',
                        cursor: disabled ? 'default' : 'move',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                />
                
                {/* Grid lines */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    height: '1px',
                    backgroundColor: 'rgba(74, 21, 75, 0.3)'
                }} />
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '1px',
                    backgroundColor: 'rgba(74, 21, 75, 0.3)'
                }} />
            </div>
            
            {!disabled && (
                <div style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
                    Click and drag the point to adjust values
                </div>
            )}
        </div>
    );
}
