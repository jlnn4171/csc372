// Takes a string and returns Pig Latin version of it
var toPigLatin = function(str) {
    if (!str.replace) {
        return 'ERROR: Expected a string!';
    }
    return str.replace(/\b(\w)(\w+)\b/g, '$2-$1ay').toLowerCase();
};

$('p').each(function(){
    var ogtext = $(this).text();
    var pigtext = toPigLatin(ogtext);
    $(this).text(pigtext);
}    
);