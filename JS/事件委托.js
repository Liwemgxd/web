
const oList = document.getElementById('list');
oList.addEventListener('click', function (e){
    let event = e || window.event;
    let target = event.target || event.srcElement;
    if (target.nodeName.toLocaleLowerCase() === 'li'){
        console.log(target.innerHTML);
    }
})