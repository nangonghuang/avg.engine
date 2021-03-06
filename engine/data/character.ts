import { AVGData } from "./avg-data";
import { ResourceData } from "./resource-data";
import { Avatar } from "./avatar";

export class Character extends AVGData {
  // public index?: number = 0;
  public slot?: number = 0;
  public x: number = 0;
  public y: number = 0;
  public avatar?: Avatar = new Avatar();
}
