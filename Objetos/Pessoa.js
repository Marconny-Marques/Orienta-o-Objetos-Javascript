class Pessoa {
  #nome
  #email
  #matricula

    setMatricula(matricula) {
      if(matricula >= 6) {
        this.#matricula = matricula;
        return true;
      }
      return false;
    }

    getMatricula(matricula) {
      this.#matricula = matricula;
    }

    setNome(nome) {
      if(nome != null) {
        this.#nome.trim() = nome;
        return true;
      }
      return false;
    }

    getNome(nome) {stackblitz-starters-bcfpomnzstackblitz-starters-bcfpomnz
      this.#nome = nome;
    }

    setEmail(email) {
      if(email != null && (email.includes("@"))) {
        this.#email.trim() = email;
        return true;
      } else {
        return false;
      }
    }

    getEmail(email) {
      this.#email = email;
    }



  }

module.exports = Pessoa;
