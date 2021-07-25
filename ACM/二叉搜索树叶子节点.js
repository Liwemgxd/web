
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const results = []

rl.on('line',str=>{
    const nodes = str.split(' ').map(item=>{
        return parseInt(item)
    })
    const bt = createBT(nodes)
    traverse(bt, 1)

    console.log(results.join(' '))
})



function createBT(nodes){
    const bt = []
    nodes.forEach(node=>{
        insertNode(bt, node, 1)
    })
    return bt
}


function insertNode(bt, node, i){
    if(!bt[i]){
        bt[i] = node
        return
    }
    //递归
    if(node < bt[i]){
        insertNode(bt, node, 2*i)
    }else{
        insertNode(bt, node, 2*i+1)
    }
}

//遍历
function traverse(bt, i){
    if(!bt[i]){
        return
    }
    //只打印叶子节点
    if(!bt[2*i] && !bt[2*i+1]){
        //console.log(bt[i])
        results.push(bt[i])
    }
    traverse(bt, 2*i)
    traverse(bt, 2*i+1)
}