class Ninja {
    constructor(nome, idade, cla) {
        this.nome = nome;
        this.idade = idade;
        this.cla = cla;
    }

    atacar() {
        let jutsu = "";

        switch (this.cla.toLowerCase()) {
        case "uchiha":
            jutsu = "usou o Sharingan 🔥";
            break;
        case "uzumaki":
            jutsu = "invocou o Rasengan 💥";
            break;
        case "hyuga":
            jutsu = "ativou o Byakugan 👁️";
            break;
        case "senju":
            jutsu = "controlou o Mokuton 🌳";
            break;
        default:
            jutsu = "usou um jutsu desconhecido ❓";
        }

        console.log(`${this.nome} do clã ${this.cla} atacou e ${jutsu}`);
    }
}

// Exemplo de uso:
const ninja1 = new Ninja("hashirama", 21, "senju");
ninja1.atacar();

const ninja2 = new Ninja("Naruto", 17, "Uzumaki");
ninja2.atacar();

const ninja3 = new Ninja("Neji", 16, "Hyuga");
ninja3.atacar();