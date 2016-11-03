function getFirstSelector(selector)
{
   return document.querySelector(selector);
 }

 function nestedTarget()
 {
   return document.querySelector('#nested .target');
 }

 function deepestChild()
 {
   var mostDeep = document.getElementById('grand-node').querySelectorAll('div');
   return mostDeep[mostDeep.length-1];
 }

 function increaseRankBy(n)
 {
   var rankedList = document.querySelectorAll('.ranked-list');
   for (var i = 0; i < rankedList.length; i++)
   {
     rankedList[i].innerHTML = parseInt(i + n);
   }
 }
