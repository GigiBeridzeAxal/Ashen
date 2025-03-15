const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')




canvas.width = 1024
canvas.height = 576

const gravity = 0.1

class Sprite {
    constructor({position , velocity , color}){
        this.position = position,
        this.velocity = velocity,
        this.color = color
        this.height = 150
    }

    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x , this.position.y , 50 , 150)
    }

    update(){
        this.draw()

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height > canvas.height){
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity
        }

    }

}

const player = new Sprite({
    position:{
    x:0,
    y:0
},
velocity:{
    x:0,
    y:0
},
color:'blue'

})
const enemy = new Sprite({
    position:{
    x:150,
    y:0
},
velocity:{
    x:0,
    y:0
},
color:'red'

})

enemy.draw()
player.draw()


function animate(){

    c.fillStyle = 'black'
    c.fillRect(0 , 0 , canvas.width , canvas.height)
    player.update()
    enemy.update()
    window.requestAnimationFrame(animate)
}
animate()


window.addEventListener('keydown' , (e) => {
    switch (e.key) {
        case "a":
            player.velocity.x = -1
            
            break;
            case "d":
                player.velocity.x = 1
                
                break;
                case "w":
                    player.velocity.y = -3
                    
                    break;
                  
    
        default:
            break;
    }
})

window.addEventListener('keyup' , (e) => {
    switch (e.key) {
        case "a":
            player.velocity.x = 0
            
            break;
            case "d":
                player.velocity.x = 0
                
                break;
             
    

    }
})



