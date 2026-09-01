class Personagem {
    nome: string
    vida: number

    constructor(nome: string, vida: number){
        this.nome = nome
        this.vida = vida
    }

    ataque(dano: number) {
        this.vida -= dano

        if(this.vida < 0) {
            this.vida = 0
        }

        console.log(`${this.nome} recebeu ${dano} de dano! PV restante: ${this.vida}`)
    }
}

const heroi = new Personagem('Aragorn', 100)
console.log(`Personagem criado: ${heroi.nome} com ${heroi.vida}`)

heroi.ataque(30)
heroi.ataque(80)
