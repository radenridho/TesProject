var i=0, text;
text = 'Mir Game Studio';
function mengetik() {
    if(i < text.length) {
        document.getElementById('app').innerHTML += text.charAt(i);
        i++;
        setTimeout(mengetik, 170);
        return;
    } 
}
mengetik();


function ubahMode() {
    const ubah = document.body;
    ubah.classList.toggle("dark");
}