var num = [1,2,3,4,5,62,3,4,1,7,8,5];
var gh =[];
for( var i=0;i<num.length;i++){
    element=num[i];
    index=gh.indexOf(element);
    if(index==-1){
        gh.push(element);
    }
}
console.log(gh);