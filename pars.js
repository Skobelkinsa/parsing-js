var arrru = new Array (' ','Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф','Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э');
var arren = new Array ('-','Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B','b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K','k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U','u','F','f','H','h','C','c','Y','y','','','','','E', 'e');
function cyrill_to_latin(text){
    for(var i=0; i<arrru.length; i++){
        var reg = new RegExp(arrru[i], "g");
        text = text.replace(reg, arren[i]);
    }
    return text;
}
$("#gallery .one_third.columns").each(function(indx, element){
    console.log("Мозаика,"+$(element).find("h4").text()+","+$(element).find("h4").text()+",Katalog/Plastikovye-paneli-PVH/Mozaika"+cyrill_to_latin($(element).find("h4").text())+",http://grace-panels.com"+$(element).find("img").attr("src")+","+$(element).find("span").text());
});

var arrru = new Array (' ','Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф','Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э');
var arren = new Array ('-','Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B','b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K','k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U','u','F','f','H','h','C','c','Y','y','','','','','E', 'e');
function cyrill_to_latin(text){
    for(var i=0; i<arrru.length; i++){
        var reg = new RegExp(arrru[i], "g");
        text = text.replace(reg, arren[i]);
    }
    return text;
}
$("#shop2-products form").each(function(indx, element){
    var str = $(element).find('.product-image img').attr("src");
    var arr = str.split('/');
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    console.log(
        "Кухонные фартуки,"+
        $(element).find(".product-name a").text().replace(/[^A-Za-zА-Яа-яЁё]+[0-9]/g, "").replace('мм', '')+
        ",katalog/kuxonnye-fartuki/"+cyrill_to_latin($(element).find(".product-name a").text()).replace('mm', '').replace('"', '').replace(/[^A-Za-z]+[0-9]/g, "")+
        ",http://melondesign.ru/d/1213814/d/"+arr.last()+
        ","+$(element).find(".shop2-product-options div:nth-child(2) .param-tit").text()+" "+$(element).find(".shop2-product-options div:nth-child(2) .param-val").text());
});