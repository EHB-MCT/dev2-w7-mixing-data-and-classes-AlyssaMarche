import Plaats from "./Plaats.js";
export default class Facility extends Plaats {
	constructor(data, name, URL, google_maps, address, postalcode, municipality) {
        super(address, postalcode, municipality);
		this._data = data;
		this._name = name;
		this._URL = URL;
		this._google = google_maps;
	}
	get data() {
		return this._data;
	}
	get naam() {
		return this._name;
	}
	get URL() {
		return this._URL;
	}
	get google_maps() {
		return this._google;
	}
}
