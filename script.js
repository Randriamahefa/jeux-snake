const taille_game = 600;
const taille_carree = 20;
const canvas = document.querySelector("#terrain");
const ctx = canvas.getContext("2d");
const serpent = new Serpent(taille_carree);
const aliment = new Aliment();
let currentDirection,OldcurrentDirection;


// fonction qui detecte la touche pressee.
function detectKeyPressed() {
    document.addEventListener("keydown", function(e) {
        switch (e.key) {
            case 'ArrowUp':
                 currentDirection = "up" 
                break;
            case 'ArrowDown':
                currentDirection = "down" 
                break;
            case 'ArrowLeft' :
                currentDirection = "left"
                break;
            case 'ArrowRight' :
                currentDirection = "right"           
            default:
                break;
        }
    }
    )
}
// fonction qui efface le terrain a chaque mouvement.
function clearTerrain() {
        ctx.clearRect(0,0,taille_game,taille_game);
}

// fonction qui actualise tous les fonctions et class a chaque 200mS.
function Actualiser() {
  clearTerrain();
  serpent.update();
  aliment.draw();
  if (serpent.alive) {
      setTimeout(Actualiser, 200);
  } 
    }
  
  
  

// fonction pour commencer le jeu
function startGame() {  
    detectKeyPressed();
       Actualiser();
       
}

startGame();

