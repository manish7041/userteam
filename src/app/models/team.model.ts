import { Users } from "./user.model";

export interface Team {
  id: number;
  name: string;
  members:Users[];
}