<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToCreatePassword() {
  return router.push('/signup-password')
}
</script>

<template>
    <div class="titulosite">
        <h1>Refeitório Acadêmico IFCE Campus Fortaleza</h1>
    </div>

    <div class="card loginbox">
        <form action="">
            <div class="mb-3">
                <div>
                    <h2>Criar cadastro</h2>
                </div>
                <input 
                    type="text"
                    placeholder="Nome completo"
                >
            </div>

            <div class="mb-3">
                <input 
                    type="text" 
                    placeholder="Número de matrícula"
                >
            </div>

            <div class="mb-3">
                <input 
                    type="text" 
                    placeholder="Número de celular"
                >
            </div>

            <div class="mb-3">
                <input 
                    type="email" 
                    placeholder="Email institucional"
                >
            </div>

            <div class="mb-3">
                <input 
                    type="text" 
                    placeholder="Curso"
                >
            </div>

            <div class="mb-3">
                <input 
                    type="text" 
                    placeholder="Período"
                >
            </div>
    
            <button @click.prevent="navigateToCreatePassword" 
                type="button" class="go">
                Avançar
            </button>
        </form>
    </div>
</template>

<style scoped>
.titulosite {
  text-align: center;
  margin-top: 5vh;
}

h2 {
    margin: 0 auto;
    text-align: center;

    margin-bottom: 20px;
}

.loginbox { 
  width: 380px;
  margin: 0 auto;
  padding: 12px;
  border: 4px solid #F1F1F1;
  border-radius: 50px;
  text-align: center;
  margin-top: 5vh;
  background-color: #F1F1F1;
  box-shadow: 0 4px 8px gray;
}

.go {
  font-weight: bold;
  border-bottom: none;
  background-color: white;
  border-radius: 30px;
  margin-top: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 125px;  
  position: relative;
  padding: 15px;
  border: 1px solid rgb(145, 143, 143);
  box-shadow: 0 4px 8px gray;
  cursor: pointer;
}

.go:hover {
  transition: .15s;
  background: rgb(115, 156, 121);
}

form input {
  padding: 8px;
  margin-bottom: 15px;
  border: none;
  display: inline-block;
  background-color: #F1F1F1;
  border-bottom: 2.4px solid rgb(85, 83, 83);
}

.links {
  margin-top: 10px;

}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

a {
    text-decoration: none;
    color: black;
    font-size: medium;
    display: block;
    text-align: left;
    margin-left: 60px;
}
</style>