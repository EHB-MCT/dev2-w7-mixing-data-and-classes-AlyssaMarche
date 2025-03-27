export default class Plaats {
	constructor(address, postalcode, municipality) {
        this._address = address;
        this._postalcode = postalcode;
        this._municipality = municipality;
    }
    get address(){
        return this_.address
    }
    get postalcode(){
        return this_.postalcode
    }
    get municipality(){
        return this_.municipality
    }
};
