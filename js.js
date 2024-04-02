const gridContainer = document.getElementById('gridContainer');
const popupBtn = document.querySelector('#popupBtn')
popup()


function colorChanger(){
    const boxs = document.querySelectorAll('.boxs')
    const color = document.getElementById('favcolor').value//color picker
    boxs.forEach((box)=>{
        box.addEventListener('click',(e)=>{
                       
            e.target.style.cssText = `background:${color};`

        })
    })
}
function eraser(){
    const boxs = document.querySelectorAll('.boxs')
    boxs.forEach((box)=>{
        
        box.addEventListener('contextmenu',(e)=>{
            e.preventDefault()
            e.target.style.cssText = 'background:white;'

        })
    })
}

function createGrid(rows,columns){
    for(let i=1;i<=rows;i++){
        const line = document.createElement('div')
        gridContainer.appendChild(line)
        line.setAttribute('class','lines')
        for(let j=1;j<=columns;j++){
            const box = document.createElement('div')
            line.appendChild(box)
            box.setAttribute('class','boxs')
        }
    }
}


function popup(){
    popupBtn.addEventListener('click',()=>{
        let columnNum = prompt('Enter the number of colums','50')
        let rowNum = prompt('Enter the number of rows','50')
        var mybox = document.querySelectorAll('.boxs')
        if(mybox.length){
            const lines = document.querySelectorAll('.lines')
            lines.forEach(function(line){line.remove()})
            const boxs = document.querySelectorAll('.boxs')
            boxs.forEach(function(box){box.remove()})
            createGrid(columnNum,rowNum)
            colorChanger()
            eraser()
        }
        else{
            createGrid(columnNum,rowNum)
            colorChanger()
            eraser()
        }
    })
}

