export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
}
