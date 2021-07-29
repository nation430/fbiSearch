"use strict"
const searchbtn = document.getElementById('searchBtn');
let inputText = document.getElementById('searchBar').value;
const url = "./assets/script/db.json";
function crimeSearch(e) {
    e.preventDefault();
    if (inputText != "") {
        fetch(url).then(res => res.json()).then(response => {
            response.crime.forEach(item => {
                if (inputText.toLowerCase() == item.firstname || inputText.toLowerCase() == item.lastname) {
                    console.log(item);
                    return;
                }
            });
        });
    }
    console.log('Please fill in a name')
}

searchbtn.addEventListener('click', crimeSearch);