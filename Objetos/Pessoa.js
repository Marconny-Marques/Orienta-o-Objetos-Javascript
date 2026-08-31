class Pessoa {
  #nome
  #email

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
      if(email != null) {
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
