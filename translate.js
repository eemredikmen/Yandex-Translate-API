function Translate(world, language) {
    this.apikey = 'trnsl.1.1.20200307T133339Z.260b81d40bc18ef3.31b49d514b734b1e48fd563cf165dbd3163532d4';
    this.word = world;
    this.language = language;

    // xhr object

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWorld = function (callback) {
    // ajax işlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text);
        }
        else {
            callback('Bir hata oluştu...', null);
        }
    }
    this.xhr.send();

};


Translate.prototype.changeParametres = function (newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;


}

