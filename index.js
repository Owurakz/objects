class Human{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    talk() {
        return this.name + ' speaks'
    }
}

const Owuraku = new Human('Owuraku', 22)
console.log(Owuraku.talk());

class Man extends Human {
    speaks(){
        return this.name + ' speaks'
    }
}

const heyy = new Man('Adjoa')
console.log(heyy.speaks());