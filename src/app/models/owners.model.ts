import { Center } from "./center.model";

export class Owner {
    private _ownerId: number;
    private _name: string;
    private _carCenter: Center;
  
    constructor(ownerId: number, name: string, carCenter: Center) {
      this._ownerId = ownerId;
      this._name = name;
      this._carCenter = carCenter;
    }
  
    // Getters and Setters for ownerId
    get ownerId(): number {
      return this._ownerId;
    }
    set ownerId(value: number) {
      this._ownerId = value;
    }
  
    // Getters and Setters for name
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
  
    // Getters and Setters for carCenter
    get carCenter(): Center {
      return this._carCenter;
    }
    set carCenter(value: Center) {
      this._carCenter = value;
    }
  }