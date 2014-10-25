

var main = function() 
{
  $('.sickaf-header').animate({opacity:1,'margin-top':'0'});
  $('#sickaf-header').delay(1000).animate({opacity:1});
  $('.sickaf-weather').delay(50).animate({opacity:1,'margin-top':'0'});
  $('.sickaf-cherp').delay(125).animate({opacity:1,'margin-top':'0'});
};

$(document).ready(main);