const gridContainer = document.getElementById('gridContainer');
createGrid(20,20)
const boxs = document.querySelectorAll('.boxs')
colorChanger()
const popupBtn = document.querySelector('#popupBtn')



function createGrid(rows,columns){
    for(let i=0;i<=rows;i++){
        const line = document.createElement('container')
        gridContainer.appendChild(line)
        line.setAttribute('class','lines')
        for(let j=0;j<=columns;j++){
            const box = document.createElement('div')
            line.appendChild(box)
            box.setAttribute('class','boxs')
        }
    }
}

function colorChanger(){
    boxs.forEach((box)=>{
        box.addEventListener('click',(e)=>{
            
            e.target.style.cssText = 'background:red;'
        })
    })
}
function popup(){
    popupBtn.addEventListener('click',()=>{
        let columnNum = prompt('Enter the number of colums','50')
        let rowNum = prompt('Enter the number of rows','50')
        if(columnNum==null || rowNum == null){

        }
    })
}
