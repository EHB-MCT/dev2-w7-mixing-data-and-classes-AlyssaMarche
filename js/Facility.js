import Plaats from "./Plaats.js";
export default class Facility {
	constructor(data, naam, URL, google_maps, address, postalcode, municipality) {
        super(address, postalcode, municipality)
		this._data = data;
		this._naam = naam;
		this._URL = URL;
		this._google = google_maps;
	}
	get data() {
		return this._data;
	}
	get naam() {
		return this._naam;
	}
	get URL() {
		return this._URL;
	}
	get google_maps() {
		return this._google;
	}
}
