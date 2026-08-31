class Aluno extends Pessoa{
    #cpf;
    #matricula;

    setCpf(cpf) {
        if(cpf != null) {
            this.#cpf = cpf;
            return true;
        }
        return false;
    }

    getCpf(cpf) {
        this.#cpf = cpf;
    }

    setMatricula(matricula) {
        if(matricula != null) {
            this.#matricula = matricula;
            return true;
        }
        return false;
    }

    getMatricula(matricula) {
        this.#matricula = matricula;
    }

    
}