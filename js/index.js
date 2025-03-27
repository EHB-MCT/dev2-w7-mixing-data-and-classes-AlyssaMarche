import Facility from "./Facility.js";

const items = [];

function init() {
	fetchData()
}

async function fetchData() {
    const data = await fetch(
		"https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bruxelles_theatres/records?limit=20"
	);
    const myData = await data.json();
    console.log(myData);
}

function onSearch(searchValue) {}

function render() {}

init();
