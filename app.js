// Prototype,Ajax,Callback

/*
Başka diller ekle
es6 kullan

*/


eventListener();


function eventListener() {
    document.getElementById('translate-form').addEventListener('submit', translateWord);

    document.getElementById('language').onchange = function () {
        // arayüz işlemleri
        console.log('Event');
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById('word').value, document.getElementById('language').value);
const ui = new UI();


function translateWord(e) {

    translate.changeParametres(document.getElementById('word').value, document.getElementById('language').value);

    translate.translateWorld(function (err, response) {
        if (err) {
            // hata
            console.log(err);
        }
        else {
            ui.displayTranslate(response);
        }

    });

    e.preventDefault();

}

