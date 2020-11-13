document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hallo, ${name}`);
    };
});

function hideDiv() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}