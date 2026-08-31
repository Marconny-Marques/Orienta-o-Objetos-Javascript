class Coordenador extends Professor{
    #setor

    setSetor() {
        if(setor!= null) {
            this.#setor = setor;
            return true;
        }
        return false;
    }

    getSetor() {
        this.#setor = setor;
    }
}