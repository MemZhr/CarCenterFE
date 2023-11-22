export class Center {


constructor(private _name: string,private _address: string,private _centerId: number){}

public get centerId(): number {
    return this._centerId;
}
public set centerId(value: number) {
    this._centerId = value;
}
public get address(): string {
    return this._address;
}
public set address(value: string) {
    this._address = value;
}
public get name(): string {
    return this._name;
}
public set name(value: string) {
    this._name = value;
}

}