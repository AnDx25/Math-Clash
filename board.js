function Board(columnSize,rowSize)
{
    this.currentSum=0;
    this.cells=[]
    this.addCells=()=>{
        const arr=[]
        for(let i=0;i<columnSize;i++)
        {
            arr.push(new Cell())
        }
        this.cells.unshift(arr)
        // console.log(this.cells)
    }
    this.removeSelectedElementsFromBoard=()=>{
        let count=0;
    
            for(let i=0;i<this.cells.length;i++)
            {  
                for(let j=0;j<this.cells[i].length;j++)
                {
                    if(this.cells[i][j].selected===true)
                    {
                        count++;
                        const selectedColEl=document.getElementById('cell'+i+j);
                        this.cells[i][j].number='';
                        selectedColEl.innerHTML="null"
                        this.cells[i][j].selected=false 
                        
    
                    }
                }
            }
            return count;
    }
    /**
 * Function to deselect all the elements when current sum> target sum
 */
this.deselectAllSelected=()=>{
    for(let i=0;i<this.cells.length;i++)
    {
        for(let j=0;j<this.cells[i].length;j++)
        {
            if(this.cells[i][j].selected===true)
            {
                this.cells[i][j].selected=false
            }
        }
    }
}

}


