$(document).ready(function() {

   var j = 0;
   var delay = 750; //millisecond delay between cycles
   function cycleThru(){
           var jmax = $("ul#cyclelist li").length -1;
           $("ul#cyclelist li:eq(" + j + ")")
                   .animate({"opacity" : "1"} ,0)
                   .animate({"opacity" : "1"}, delay)
                   .animate({"opacity" : "0"}, 0, function(){
                           (j == jmax) ? j=0 : j++;
                           cycleThru();
                   });
           };

   cycleThru();

 });