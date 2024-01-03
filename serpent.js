class Serpent {
    constructor(taille){
        this.x = 0;
        this.y = 0;
        this.tailleBlock = taille;
        this.Blocks = [];
        this.addBlock(this.x,this.y);
        this.alive = true;
    }

    // methode dans la class Serpent pour ajouter une nouvelle block dans Blocks[].
    addBlock(a,b){
        const block = new Block(a,b,this.tailleBlock) 
        this.Blocks.push(block);
        
    }
   // methode pour faire bouger la tete du serpent dans la direction indiquee.
    moveHead(){
        const tete = this.Blocks[0];
        tete.oldX = tete.x
        tete.oldY = tete.y
        switch (currentDirection) { // currentDirection = right
            case 'left':
                tete.x -= 1 
                break;
            case 'right':
                tete.x += 1 
                break;
            case 'up':
                tete.y -= 1
                break;
            case 'down':
                tete.y += 1 
                break;              
            default:
                break;
        }
    
        tete.horsMap(); // quand le serpent depasse de la 4 cotes du mur. 
    }
    // Position de la nouvelle block apres avoir manger un aliment.
    calculateNewBlockPosition(){
        let {x, y} = this.Blocks[this.Blocks.length - 1];
        switch (currentDirection) {
            case 'left':
                    x += 1 
                    break;  
            case 'right':
                   x -= 1 
                   break; 
            case 'up':
                    y += 1
                    break;
            case 'down':
                    y -= 1 
                   break;   
            default:
                   break;
        }
        return {x, y}; 

    }

    // Methode qui s'execute quand le serpent mange l'aliment(posiion teteSerpent == position aliment)
    eat(){
        const tete = this.Blocks[0];
        if (tete.x == aliment.x && tete.y == aliment.y) {
            aliment.PositionAleatoire(); // On demande une nouvelle position a l'aliment.
             const {x, y} =  this.calculateNewBlockPosition();  
             this.addBlock(x, y); // on ajoute une nouvelle block au serpent. 
            
        }
    }
    
    // Methode qui retoure (Vrai) si la tete du serpent touche son corps.
    BlockTouchHead(i){
       const tete = this.Blocks[0];
       const tetex = tete.x;
       const tetey = tete.y;
       return (tetex === i.x && tetey === i.y);
    }

    update(){
        this.moveHead();
        this.eat();
        for (const [index, i] of this.Blocks.entries()) {
            if (index > 0) {
                const {oldX, oldY} = this.Blocks[index - 1];
                i.setPosition(oldX, oldY);
               if (this.BlockTouchHead(i)) {
                   this.alive = false;
               } 
            }
            i.draw();
        }
      
    }
    
}