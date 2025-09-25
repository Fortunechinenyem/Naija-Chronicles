"use client";

import { useEffect, useRef } from "react";
import * as fabric from "fabric";

import { FlagDesign, FlagSymbol } from "@/types/flag";

interface FlagCanvasProps {
  design: FlagDesign;
  onDesignChange: (_design: FlagDesign) => void;
  className?: string;
}

export const FlagCanvas = ({
  design,

  className,
}: FlagCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    fabricCanvasRef.current = new fabric.Canvas(canvas, {
      width: 400,
      height: 240,
      backgroundColor: design.baseColor,
    });

    // Draw flag base
    const flagBase = new fabric.Rect({
      width: 400,
      height: 240,
      fill: design.baseColor,
      selectable: false,
      evented: false,
    });

    fabricCanvasRef.current.add(flagBase);

    // Draw pattern if any
    if (design.patterns.type !== "none") {
      const pattern = createPattern(design);
      if (pattern) {
        fabricCanvasRef.current.add(pattern);
      }
    }

    // Add symbols
    design.symbols.forEach((symbol) => {
      const fabricSymbol = createSymbol(symbol);
      if (fabricSymbol) {
        fabricCanvasRef.current?.add(fabricSymbol);
      }
    });

    return () => {
      fabricCanvasRef.current?.dispose();
    };
  }, [design]);

  const createPattern = (design: FlagDesign): fabric.Object | null => {
    if (design.patterns.type === "stripes") {
      const stripeWidth = 400 / design.patterns.colors.length;
      const stripeObjects: fabric.Rect[] = [];

      design.patterns.colors.forEach((color, index) => {
        const stripe = new fabric.Rect({
          width: design.patterns.direction === "horizontal" ? 400 : stripeWidth,
          height:
            design.patterns.direction === "horizontal" ? stripeWidth : 240,
          left:
            design.patterns.direction === "horizontal"
              ? 0
              : index * stripeWidth,
          top:
            design.patterns.direction === "horizontal"
              ? index * stripeWidth
              : 0,
          fill: color,
          selectable: false,
          evented: false,
        });
        stripeObjects.push(stripe);
      });

      // Use Group instead of addWithUpdate
      const stripeGroup = new fabric.Group(stripeObjects, {
        selectable: false,
        evented: false,
      });
      return stripeGroup;
    }
    return null;
  };

  const createSymbol = (symbol: FlagSymbol): fabric.Object | null => {
    switch (symbol.type) {
      case "star":
        return new fabric.Polygon(
          [
            { x: 0, y: 0 },
            { x: 10, y: 30 },
            { x: 40, y: 30 },
            { x: 15, y: 50 },
            { x: 25, y: 80 },
            { x: 0, y: 60 },
            { x: -25, y: 80 },
            { x: -15, y: 50 },
            { x: -40, y: 30 },
            { x: -10, y: 30 },
          ],
          {
            left: symbol.position.x,
            top: symbol.position.y,
            scaleX: symbol.size / 80,
            scaleY: symbol.size / 80,
            fill: symbol.color,
            originX: "center",
            originY: "center",
          }
        );

      case "text":
        return new fabric.Text(symbol.text || "Nigeria", {
          left: symbol.position.x,
          top: symbol.position.y,
          fontSize: symbol.size,
          fill: symbol.color,
          fontFamily: "Arial",
          originX: "center",
          originY: "center",
        });

      default:
        return null;
    }
  };

  return (
    <div
      className={`border-2 border-gray-200 rounded-lg p-4 bg-white ${className}`}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
