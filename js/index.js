import { Facility } from "./Facility.js";

let itemsOrig = [];
let items = [];
let lang = "nl";

function init() {
  fetchData();
}

async function fetchData() {
  document.querySelector('#search + .button').addEventListener('click', (event) => {
    event.preventDefault();
    onSearch(document.getElementById('search').value);
  });
  const data = await fetch('https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/infrastructures-sportives-gerees-par-la-ville-de-bruxelles/records?limit=38');
  const myData = await data.json();
  itemsOrig = myData.results;

  itemsOrig.forEach(item => {
    if (lang == "nl") {
      let obj = new Facility(item.data_nl, item.name_nl, item.url_fr, item.google_maps, item.adress_nl, item.postalcode, item.municipality_nl);
      items.push(obj);
    } else {
      let obj = new Facility(item.data_fr, item.name_fr, item.url_fr, item.google_maps, item.adress_fr, item.postalcode, item.municipality_fr);
      items.push(obj);
    }
  });
  render(items);
}

function onSearch(searchValue) {
  let resultsArray = [];
  items.forEach(item => {
    if (item._name.toLowerCase().includes(searchValue.toLowerCase())) {
      resultsArray.push(item)
    }
  });
  render(resultsArray);
}

function render(objArray) {
  let html = "";
  objArray.forEach(item => {
    html += `<div class="item">
              <div class="name">
                <div class="item-field">Name: ${item._name}</div>
                <div class="item-field">Data: ${item._data}</div>
              </div>
              <div>
                <a class="item-field" href="${item._URL}">Site</a>
                <a class="item-field" href="${item._google_maps}">Google Maps</a>
              </div>
            </div>`
  });
  document.getElementById('list').innerHTML = html;
}

init();