class Professor extends Pessoa{
    #disciplina;

    setDisciplina(disciplina) {
        if(disciplina != null || disciplina !== '') {
            this.#disciplina = disciplina;
            return true;
        }
        return false;
    }

    getDisciplina(disciplina) {
        this.#disciplina = disciplina;
    }
}