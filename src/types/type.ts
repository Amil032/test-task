export interface Categories {
  name: string;
  edit?: boolean;
  level: number;
  subcat?: Categories[];
}

export type Border = "one" | "right" | "left" | "both";
