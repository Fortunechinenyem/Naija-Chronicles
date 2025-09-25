export interface FlagSymbol {
  type: "star" | "crescent" | "eagle" | "coat-of-arms" | "text";
  position: { x: number; y: number };
  size: number;
  color: string;
  text?: string;
}

export interface FlagDesign {
  id: string;
  baseColor: string;
  secondaryColor: string;
  symbols: FlagSymbol[];
  patterns: {
    type: "stripes" | "checker" | "none";
    direction: "horizontal" | "vertical";
    colors: string[];
  };
  message: string;
  creatorName: string;
  createdAt: Date;
  style: "traditional" | "modern" | "festive";
}

export interface FlagTemplate {
  id: string;
  name: string;
  baseColor: string;
  secondaryColor: string;
  predefinedSymbols: FlagSymbol[];
}
