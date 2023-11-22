import { Owner } from "./owners.model";

export class CarModel {

  
    constructor(   private _color: string,
        private _make: string,
        private _name: string,
        private _owner: Owner,
        private _status: string,
        private _vin: string,
        private _year: number) {
    
    }
  
    get color(): string {
      return this._color;
    }
    set color(value: string) {
      this._color = value;
    }
  
    get make(): string {
      return this._make;
    }
    set make(value: string) {
      this._make = value;
    }
  
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
  
    get owner(): any {
      return this._owner;
    }
    set owner(value: any) {
      this._owner = value;
    }
  
    get status(): string {
      return this._status;
    }
    set status(value: string) {
      this._status = value;
    }
  
    get vin(): string {
      return this._vin;
    }
    set vin(value: string) {
      this._vin = value;
    }
  
    get year(): number {
      return this._year;
    }
    set year(value: number) {
      this._year = value;
    }
  }
  