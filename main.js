const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = 1200;
const height = 1200;
ctx.width = width;
ctx.height = height;

class Tree {
    constructor(Rt, Lt, value) {
        this.Node = value;
        this.Righttree = Rt;
        this.Lefttree = Lt;
    }
}
function drawNode(x, y, r, text, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.font = "20px Arial";
    ctx.strokeText(text, x - 10, y);
    ctx.stroke();
}

function drawLine(fromx, fromy, tox, toy, ctx) {
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.closePath();
    ctx.stroke();
}

function drawTree(rootTree, xstep, ystep, distance) {
//draw node
    if (rootTree !== null) {

        drawNode(xstep, ystep, 20, rootTree.Node, ctx);
        console.log(rootTree.Node);
    }
//draw left tree
    if (rootTree.Lefttree !== null) {
        drawLine(xstep, ystep + 20, xstep - distance, ystep + 100 - 20, ctx);
        drawTree(rootTree.Lefttree, xstep - distance, ystep + 100, distance / 2 + 20);
    }
// draw right tree
    if (rootTree.Righttree !== null) {
        drawLine(xstep, ystep + 20, xstep + distance, ystep + 100 - 20, ctx);
        drawTree(rootTree.Righttree, xstep + distance, ystep + 100, distance / 2 + 20);
    }
}


tree10 = new Tree(null, null, 10);
tree11 = new Tree(null, null, 11);
tree12 = new Tree(tree11, tree10, 12);
//
tree17 = new Tree(null, null, 17);
tree19 = new Tree(null, null, 19);
tree18 = new Tree(tree19, tree17, 18);
//**
tree15 = new Tree(tree18, tree12, 15);

//          15
//        /    \
//     12       18
//    / \       / \
//  10  11   17    19
//

//call draw tree on the root tree object
drawTree(tree15, 300, 100, 100);