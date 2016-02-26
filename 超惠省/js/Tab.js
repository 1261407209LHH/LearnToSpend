/**
* Created by LHH on 2015/11/23.
*/
//
function $(id){
    return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
    var information_play=$('top_navigation').getElementsByTagName('li');
    var photo_play=$('large_box').getElementsByClassName('something');
    for(var i=0;i<information_play.length;i++){
        information_play[i].id=i;
        information_play[i].onmouseover=function(){
            photo_play[this.id].style.display='block';
            for(var j=0;j<information_play.length;j++){
                if(j==this.id)
                    continue;
                photo_play[j].style.display='none';
            }
        }
    }


}
