"use client";

import { useState } from "react";
import { FlagDesign } from "@/types/flag";
import { FlagCanvas } from "./FlagCanvas";
import { FlagControls } from "./FlagControls";
import { Card } from "../ui/Card";

const initialDesign: FlagDesign = {
  id: "",
  baseColor: "#008751",
  secondaryColor: "#FFFFFF",
  symbols: [],
  patterns: { type: "none", direction: "horizontal", colors: [] },
  message: "Happy Independence Day Nigeria!",
  creatorName: "",
  createdAt: new Date(),
  style: "traditional",
};

export const FlagCreator = () => {
  const [design, setDesign] = useState<FlagDesign>(initialDesign);
  const [savedFlags, setSavedFlags] = useState<FlagDesign[]>([]);

  const handleSave = () => {
    const newFlag = {
      ...design,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setSavedFlags([...savedFlags, newFlag]);
    alert("Flag saved successfully!");
  };

  const handleShare = () => {
    // Simple sharing implementation - can be enhanced with actual social media APIs
    const flagData = encodeURIComponent(JSON.stringify(design));
    const shareUrl = `${window.location.origin}/share?flag=${flagData}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Share link copied to clipboard!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-naija-green mb-2">
          Flag Creator
        </h1>
        <p className="text-gray-600">
          Design your custom Nigerian flag to celebrate Independence Day
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Flag Preview */}
        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Flag Design</h2>
            <FlagCanvas
              design={design}
              onDesignChange={setDesign}
              className="mb-4"
            />

            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">
                {design.message}
              </p>
              {design.creatorName && (
                <p className="text-gray-600">
                  Created by: {design.creatorName}
                </p>
              )}
            </div>
          </Card>
        </div>

        {/* Controls */}
        <div>
          <FlagControls
            design={design}
            onDesignChange={setDesign}
            onSave={handleSave}
            onShare={handleShare}
          />
        </div>
      </div>

      {/* Saved Flags Gallery */}
      {savedFlags.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Your Saved Flags</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedFlags.map((flag) => (
              <Card key={flag.id} className="p-4">
                <div className="aspect-video bg-gray-100 mb-2 rounded flex items-center justify-center">
                  <div
                    className="w-full h-full rounded"
                    style={{ backgroundColor: flag.baseColor }}
                  />
                </div>
                <p className="font-medium truncate">{flag.message}</p>
                <p className="text-sm text-gray-600">{flag.creatorName}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
