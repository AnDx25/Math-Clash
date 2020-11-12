const rowSize=8;
const colSize=8;

const cells=[]
let currentSum=0;
let target=0;
let score=0;

const addCells=()=>{
    const arr=[]
    for(let i=0;i<colSize;i++)
    {
        arr.push({selected:false, number : Math.ceil(Math.random()*9)})
    }
    //Since we need the numbers getting inserted from top not from bottom
    //So using unsift instead of push
    cells.unshift(arr)
}
/** 
 * Pushing the random numbers in the 2D array and after 
 * that we will map this array to our boards
 * 
 */
const id=setInterval(()=>{
    

    /**
     * Checking if all row of the board is filled then clear the interval and make the game over
     */
    if(cells.length===rowSize)
    {
        alert('Game Over')
        clearInterval(id)
        return

    }
    addCells()
    
    
    /**Function to map this 2D array to the board cells */
    render()
},10000)


const render=()=>{
    for(let i=0;i<cells.length;i++)
    {
        for(let j=0;j<cells[i].length;j++)
        {
            const colEl=document.getElementById('cell'+i+j)
            colEl.innerHTML=cells[i][j].number 
            if(cells[i][j].number!=='')
            {
                colEl.classList.add('filled-cell')
            }
            else if(colEl.classList.contains('filled-cell'))
            {
                colEl.classList.remove('filled-cell');
            }
            
            if(cells[i][j].selected)
            {
                colEl.classList.add('selected')
            }
            else if(colEl.classList.contains('selected'))
            {
                colEl.classList.remove("selected")
                
            }
        }
    }
}

/**
 * Initializing the Board
 */

const initBoard=()=>{
    //Getting the board element 
    const board =document.getElementById('board')
    for(let i=0;i<rowSize;i++)
    {
        const rowEl=document.createElement('div')
        rowEl.classList.add('row')
        for(let j=0;j<colSize;j++)
        {
            const colEl=document.createElement('div')
            colEl.setAttribute('id','cell'+i+j)
            // colEl.innerHTML=i+j
            
            colEl.classList.add('cell')
            colEl.addEventListener('click',(event)=>{handleClick(event,i,j,colEl)})
            rowEl.appendChild(colEl)
        }
        board.appendChild(rowEl)
        
    }
    
}
const initTarget=()=>{
   target=5+Math.ceil(Math.random()*50)
    document.getElementById('target-score').innerText=target.toString()
}
const initCurrentSum=()=>{
    document.getElementById('current-sum').innerHTML=currentSum 
}
const initScore=()=>{
    document.getElementById('score').innerText=score.toString()
}
initBoard()
initTarget()
initCurrentSum()
initScore() 
addCells()
render()
const handleClick=(event,i,j,colEl)=>{
    //Checking if the position on board is not filled with any number and if it is then do not do anything for that cell
    if(i>=cells.length || j>=cells[i].length)
    {
        return
    }
    cells[i][j].selected=!cells[i][j].selected
    if(cells[i][j].selected)
    {
        currentSum+=cells[i][j].number
    }
    else
    {
        currentSum-=cells[i][j].number
    }
   
    // document.getElementById('current-sum').innerHTML=currentSum 
    if(currentSum>target)
    {
        deselectAllSelected()
        currentSum=0

    }
    if(currentSum===target)
    {
        const numOfElementsRemoved=removeSelectedElementsFromList()
        score+=numOfElementsRemoved
        currentSum=0
        initCurrentSum()
        initTarget()
        initScore();

    }

    initCurrentSum()
    render();
    // colEl.classList.add('selected')
    console.log(i+" "+j)
}
/**
 * Function to deselect all the elements when current sum> target sum
 */
const deselectAllSelected=()=>{
    for(let i=0;i<cells.length;i++)
    {
        for(let j=0;j<cells[i].length;j++)
        {
            if(cells[i][j].selected===true)
            {
                cells[i][j].selected=false
            }
        }
    }
}
/***
        When current sum== target sum
* 
 */
const removeSelectedElementsFromList=()=>{
    let count=0;

        for(let i=0;i<cells.length;i++)
        {  
            for(let j=0;j<cells[i].length;j++)
            {
                if(cells[i][j].selected===true)
                {
                    count++;
                    const selectedColEl=document.getElementById('cell'+i+j);
                    cells[i][j].number='';
                    selectedColEl.innerHTML="null"
                    cells[i][j].selected=false 
                    

                }
            }
        }
        return count;
}
