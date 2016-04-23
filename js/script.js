
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

// clear out old data before new request
    $nytElem.text("");

// load streetview

    //var streetAddress=$('#street').val();
    var cityStr=$('#city').val();
    var address= cityStr;
    $greeting.text('So you want to know more information about' + " " + address + '?');
    var streetUrl="https://maps.googleapis.com/maps/api/streetview?size=800x800&location=" + cityStr + "";
    $body.append('<img class="bgimg" src="' + streetUrl + ' ">');

//  NYT ajax request goes here!!
//change the response-format to JSON
    $.ajax({})
    var nyTimesUrl="http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q=" + cityStr + "&api-key=d4b9e17c21e60ff57a2220fd40fe9761%3A13%3A75090156";

    $.getJSON( nyTimesUrl, function( data ) {
        $nytHeaderElem.text=('New York Times Article About' + cityStr);
        articles=data.response.docs;
        for(var i=0;i< articles.length;i++){
            var articleData=articles[i];
            $nytElem.append('<li class="article">'+'<a href=" '+ articleData.web_url +' ">'+articleData.headline.main+'</a>'+'<p>'+articleData.snippet+'</p>' +'</li>');
        };
    });
    return false;

};

$('#form-container').submit(loadData);