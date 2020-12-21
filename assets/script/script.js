

let searchbtn = document.getElementById('searchBtn');

searchbtn.addEventListener('click', function (e) {
    e.preventDefault();
    let inputText = document.getElementById('searchBar').value;

    if(inputText != ""){
        let url = 'db.json';
        console.log("drink", url);

        console.log(inputText);
    }

    console.log('Please fill in a name')

})