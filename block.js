class Block{
    constructor(x,y,taille){
        this.x = x; //position sur l'axe des abscisses
        this.y = y; //position sur l'axe des ordonees
        this.oldX = x;
        this.oldY = y;
        this.taille = taille_carree;
        
    }
    
    // quand le serpent depasse de la 4 cotes du mur. 
    horsMap() {
    
        const maxTaille = taille_game / this.taille;
        if (this.x < 0) {
            this.x = maxTaille;
        } else  if (this.x > maxTaille) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = maxTaille;
        }else if (this.y > maxTaille) {
            this.y =0;
        }
    }
    
    setPosition(x, y){
        this.oldX = this.x;
        this.oldY = this.y;
        this.x = x;
        this.y = y;
        
        
    }
    
    
    // methode qui affiche le block.
    draw(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x*this.taille,this.y*this.taille,this.taille,this.taille);

    }
}