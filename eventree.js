function graph(){

    var root = undefined;

    function parse(list){
        list.forEach(function(currentPair){
            if(root ===undefined){
                root = createNode(currentPair[1],currentPair[0]);
            } else{
                var parent = findNode(root,currentPair[1]);
                addChild(parent,currentPair[0]);
            }
        })

        return root;
    }

    function findMaximalAmountOfPairForest(root){
        var currentTotal = 0;
        var i;

        for( i= 0;i<root.children.length;i++){
            //var splittedChildren = removeChildNode(root,root.children[i]);
            var splittedChildren = root.children[i];

            if(getNumberOfNodes(splittedChildren)%2===0){
                //i=i-1;
                currentTotal += 1+findMaximalAmountOfPairForest(splittedChildren);
            }
            else{
                //addChildNode(root,splittedChildren,i);
                currentTotal += findMaximalAmountOfPairForest(splittedChildren);
            }
        }

        return currentTotal;
    }

    function addChildNode(root,childNode,pos){
        root.children.splice(pos,0,childNode);
    }

    function removeChildNode(root,childNode){
        var index = root.children.indexOf(childNode);

        if (index > -1) {
            root.children.splice(index, 1);
        }

        return childNode;
    }

    function getNumberOfChilds(root){
        var count = 0;

        for(var i = 0;i<root.children.length;i++){
            count+= getNumberOfNodes(root.children[i]);
        }

        return count;
    }

    function getNumberOfNodes(root){
        var count = 1;

        for(var i = 0;i<root.children.length;i++){
            count+= getNumberOfNodes(root.children[i]);
        }

        return count;
    }

    function createNode(value,child){
        var node = {
            value:value,
            children:[]
        };

        addChild(node,child);
        return node;
    }


    function addChild(node,child){
        var childCreated ;
        if(child){
            childCreated = createNode(child,undefined);
            node.children.push(childCreated);
        }
    }


    function findNode(root,value){
        var result =undefined;
        if (root.value===value){
            return root;
        }

        for(var i = 0;i<root.children.length;i++){
            result = findNode(root.children[i],value);

            if(result) return result;
        }

        return result;
    }

    function printInPreorder(root,optMsg){
        console.log(optMsg+" : "+JSON.stringify(root));
    }

    return {
        parse:parse,
        printInPreorder:printInPreorder,
        getNumberOfChilds:getNumberOfChilds,
        findMaximalAmountOfPairForest:findMaximalAmountOfPairForest,
        getNumberOfNodes:getNumberOfNodes
    }
}

function parseInput(input){
    var lines=input.split("\n");
    var result = [];
    var currentLine;

    for(var i=1;i<lines.length;i++){
        currentLine = lines[i].split(" ");
        currentLine = currentLine.map(function(current){
            return parseInt(current);
        });

        result.push(currentLine);
    }

    return result;
}

var tree = graph();

var root = tree.parse(parseInput(input));

console.log(tree.findMaximalAmountOfPairForest(root));
