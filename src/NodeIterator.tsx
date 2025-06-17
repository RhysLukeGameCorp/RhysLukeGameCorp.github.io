import React, { FC, useState, useEffect, ReactNode, Children, cloneElement, isValidElement } from "react";

interface NodeIteratorProps {
  children: ReactNode;
  interval?: number;
  onChildChange?: (child: ReactNode, index: number) => void;
}

const NodeIterator: FC<NodeIteratorProps> = ({
  children,
  interval = 1000,
  onChildChange,
}) => {
  // Convert children to an array, ensuring each has a key for React's reconciliation
  const childrenArray = Children.toArray(children).map((child, index) => {
    if (isValidElement(child) && child.key !== null) {
      return child;
    }
    return isValidElement(child) ? cloneElement(child as React.ReactElement, { key: `glitch-child-${index}` }) : child;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only set up an interval if there's more than one child to rotate
    if (childrenArray.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % childrenArray.length;
          // Notify the parent component of the child change
          if (onChildChange) {
            onChildChange(childrenArray[newIndex], newIndex);
          }
          return newIndex;
        });
      }, interval);

      // Clean up the interval on component unmount or when dependencies change
      return () => clearInterval(timer);
    } else if (onChildChange && childrenArray.length === 1) {
      // If there's only one child, ensure the callback is still triggered once
      onChildChange(childrenArray[0], 0);
    }
  }, [childrenArray, interval, onChildChange]); // Re-run effect if children, interval, or callback changes

  // Render the currently active child
  return <>{childrenArray[currentIndex]}</>;
};

export default NodeIterator;