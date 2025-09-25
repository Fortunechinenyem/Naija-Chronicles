import { FlagDesign, FlagSymbol } from "@/types/flag";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface FlagControlsProps {
  design: FlagDesign;
  onDesignChange: (design: FlagDesign) => void;
  onSave?: () => void;
  onShare?: () => void;
}

const colors = [
  "#008751", // Naija Green
  "#FFFFFF", // White
  "#000000", // Black
  "#FF0000", // Red
  "#0000FF", // Blue
  "#FFD700", // Gold
  "#800080", // Purple
];

const symbols: { type: FlagSymbol["type"]; label: string; icon: string }[] = [
  { type: "star", label: "Star", icon: "⭐" },
  { type: "crescent", label: "Crescent", icon: "🌙" },
  { type: "eagle", label: "Eagle", icon: "🦅" },
  { type: "text", label: "Text", icon: "🔤" },
];

const patterns = [
  { type: "none" as const, label: "No Pattern" },
  {
    type: "stripes" as const,
    label: "Stripes",
    direction: "horizontal" as const,
  },
  {
    type: "stripes" as const,
    label: "Vertical Stripes",
    direction: "vertical" as const,
  },
];

export const FlagControls = ({
  design,
  onDesignChange,
  onSave,
  onShare,
}: FlagControlsProps) => {
  const updateDesign = (updates: Partial<FlagDesign>) => {
    onDesignChange({ ...design, ...updates });
  };

  const addSymbol = (symbolType: FlagSymbol["type"]) => {
    const newSymbol: FlagSymbol = {
      type: symbolType,
      position: { x: 200, y: 120 },
      size: 30,
      color: "#000000",
      ...(symbolType === "text" ? { text: "Nigeria" } : {}),
    };

    updateDesign({
      symbols: [...design.symbols, newSymbol],
    });
  };

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Flag Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Base Color
            </label>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded border-2 ${
                    design.baseColor === color
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => updateDesign({ baseColor: color })}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Secondary Color
            </label>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded border-2 ${
                    design.secondaryColor === color
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => updateDesign({ secondaryColor: color })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Patterns</h3>
        <div className="flex gap-2 flex-wrap">
          {patterns.map((pattern) => (
            <Button
              key={pattern.label}
              variant={
                design.patterns.type === pattern.type ? "primary" : "outline"
              }
              size="sm"
              onClick={() =>
                updateDesign({
                  patterns: {
                    type: pattern.type,
                    direction: pattern.direction || "horizontal",
                    colors: [design.baseColor, design.secondaryColor],
                  },
                })
              }
            >
              {pattern.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Symbols */}
      <div>
        <h3 className="font-semibold mb-3">Add Symbols</h3>
        <div className="flex gap-2 flex-wrap">
          {symbols.map((symbol) => (
            <Button
              key={symbol.type}
              variant="outline"
              size="sm"
              onClick={() => addSymbol(symbol.type)}
            >
              <span className="mr-2">{symbol.icon}</span>
              {symbol.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block font-semibold mb-2">Your Message</label>
        <input
          type="text"
          value={design.message}
          onChange={(e) => updateDesign({ message: e.target.value })}
          placeholder="Add an inspirational message..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naija-green"
        />
      </div>

      {/* Creator Name */}
      <div>
        <label className="block font-semibold mb-2">Your Name</label>
        <input
          type="text"
          value={design.creatorName}
          onChange={(e) => updateDesign({ creatorName: e.target.value })}
          placeholder="Enter your name..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-naija-green"
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button onClick={onSave ?? (() => {})} className="flex-1">
          Save Flag
        </Button>
        <Button
          variant="secondary"
          onClick={onShare ?? (() => {})}
          className="flex-1"
        >
          Share Flag
        </Button>
      </div>
    </Card>
  );
};
