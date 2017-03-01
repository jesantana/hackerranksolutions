//1 2 3 4 5   3

function minAbsolutePermutation(n,k){
    var result = [];
    var used =[];

    for(var i=1;i<=n;i++){
        var pos =!used[i-k] && i-k>0?i-k:undefined;
        var set;

        if(pos){
            set = true;
            used[i-k] =true;
        }
        else{
            pos = !used[i+k] && i+k<=n?i+k:undefined;
            set =pos!==undefined;
            used[i+k] =set;
        }

        if(set){
            result[i-1]=pos;
        }
        else{
            return -1;
        }
    }

    return result.join(' ');
}

console.log(minAbsolutePermutation(3,1));
console.log(minAbsolutePermutation(2,1));

console.log(minAbsolutePermutation(3,2));
console.log(minAbsolutePermutation(3,0));
console.log(minAbsolutePermutation(5,1));
