function Game(columnSize,rowSize)
{   this.board=new Board(columnSize,rowSize)
    this.score=0;

    this.getRandomTarget=()=>{
        return 5+Math.ceil(Math.random()*50)
    }
    this.target=this.getRandomTarget();

    
    this.init=()=>{
        this.initBoard() 
        this.board.addCells()
        this.render()
        this.startTimer()
        this.initTarget()
        this.initCurrentSum()
        this.initScore()
    }
    this.initTarget=()=>{
        this.target=5+Math.ceil(Math.random()*50)
         document.getElementById('target-score').innerText=this.target.toString()
     }
     this.initCurrentSum=()=>{
         document.getElementById('current-sum').innerHTML=this.board.currentSum 
     }
     this.initScore=()=>{
         document.getElementById('score').innerText=this.score.toString()
     }
     this.startTimer=()=>{


        const id=setInterval(()=>{
    

            /**
             * Checking if all row of the board is filled then clear the interval and make the game over
             */
            if(this.board.cells.length===rowSize)
            {
                alert('Game Over')
                clearInterval(id)
                return
        
            }
            this.board.addCells()
            
            
            /**Function to map this 2D array to the board cells */
            this.render()
        },10000)

     }


     this.render=()=>{
        for(let i=0;i<this.board.cells.length;i++)
        {
            for(let j=0;j<this.board.cells[i].length;j++)
            {
                const colEl=document.getElementById('cell'+i+j)

                // console.log(this.board.cells[i][j])
                colEl.innerHTML=this.board.cells[i][j].number 
                if(this.board.cells[i][j].number!=='')
                {
                    colEl.classList.add('filled-cell')
                }
                else if(colEl.classList.contains('filled-cell'))
                {
                    colEl.classList.remove('filled-cell');
                }
                
                if(this.board.cells[i][j].selected)
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
    this.handleClick=(event,i,j,colEl)=>{
        //Checking if the position on board is not filled with any number and if it is then do not do anything for that cell
        if(i>=this.board.cells.length || j>=this.board.cells[i].length)
        {
            return
        }
        this.board.cells[i][j].selected=!this.board.cells[i][j].selected
        if(this.board.cells[i][j].selected)
        {
            this.board.currentSum+=this.board.cells[i][j].number
        }
        else
        {
            this.board.currentSum-=this.board.cells[i][j].number
        }
       
        // document.getElementById('current-sum').innerHTML=currentSum 
        if(this.board.currentSum>this.target)
        {
            this.board.deselectAllSelected()
            this.board.currentSum=0
    
        }
        if(this.board.currentSum===this.target)
        {
            const numOfElementsRemoved=this.board.removeSelectedElementsFromBoard()
            this.score+=numOfElementsRemoved
            this.board.currentSum=0
            this.initCurrentSum()
            this.initTarget()
            this.initScore();
    
        }
    
        this.initCurrentSum()
        this.render();
        // colEl.classList.add('selected')
        console.log(i+" "+j)
    }
    this.initBoard=()=>{
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
                colEl.addEventListener('click',(event)=>{this.handleClick(event,i,j,colEl)})
                rowEl.appendChild(colEl)
            }
             board.appendChild(rowEl)
            
        }
        
    }
     
}  