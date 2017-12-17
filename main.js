// Variables

var searchButton = document.getElementById('navbar-search-button');
var searchText = document.getElementById('navbar-search-input');

var pieces = document.getElementsByClassName('piece');
var pieceBodies = document.getElementsByClassName('piece-title');


// Search Functionality
    
function search() {
    "use strict";
    for (var i = 0; i < pieces.length; i++) {
        if (!((pieceBodies[i].innerText.toLowerCase()).includes((searchText.value).toLowerCase()))) {
             pieces[i].style.display = 'none';
         }
        else {
            pieces[i].style.display = 'block';
        }
    }
};

searchText.addEventListener('input', search);
searchButton.addEventListener('click', search);