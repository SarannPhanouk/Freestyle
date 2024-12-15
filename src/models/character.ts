export interface Character {
    id: number;
    name: string;
    status: string;
    size: string;
    age: number;
    job: string;
    bounty: number;
    crew?: {
      name: string;
      roman_name: string;
      is_yonko: boolean;
    };
    fruit?: {
      name: string;
      filename: string;
      type: string;
    };
}