class Aliment {
    constructor(){
        this.taille = taille_carree;
        this.PositionAleatoire();

        
    }

    // methode qui donne une position aleatoire de l'aliment.
    PositionAleatoire(){
        this.x = Math.round(Math.random() * taille_game % ((taille_game/this.taille)-1))
        this.y = Math.round(Math.random() * taille_game % ((taille_game/this.taille)-1))
        
    }
    // methode qui affiche l'aliment.
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x*this.taille,this.y*this.taille,this.taille,this.taille);
    }
}