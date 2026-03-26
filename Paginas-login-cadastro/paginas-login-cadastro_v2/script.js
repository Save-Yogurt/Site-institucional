// variaveis globais 
let senha_acesso = "julia123";
 let email_acesso = "julia.araripe@sptech.school"


function redefinir() {
    let senha_nova = nova_senha.value
    let senha_confirmada = confirmar_senha.value



    if (senha_confirmada == senha_nova) {
        alert("Senha alterada")
        senha_acesso = senha_confirmada
        pagina_login.style.display = "block"
        pagina_redefinir.style.display = "none"
    } else {
        alert("digite corretamente as senhas estão diferentes")

    }

}

function cadastro_realizado() {

let nome = nome_completo.value
let email_cadastro = email.value
let cnpj = cnpj_usuario.value
let senha_cadastrada = document.getElementById("senha_cadastro").value


alert(`Olá ${nome} você acaba de fazer um cadastro com o email ${email_cadastro} entrando na empresa de CNPJ :${cnpj}`)
    pagina_cadastro.style.display = "none"
    pagina_login.style.display = "block"
     

senha_acesso = senha_cadastrada
email_acesso = email_cadastro
}

function continuar() {
    let email = email_usuario.value
    let senha = senha_usuario.value



   


    if (email == "" || senha == "") {
        resultado.innerHTML = `todos os campos devem ser preenchidos `
    }


    else if (email != email_acesso || senha != senha_acesso) {
        resultado.innerHTML = `Credenciais incorretas`
    } else if ((email = email_acesso || email == email_cadastro) && (senha = senha_acesso || senha == senha_confirmada || senha == senha_cadastrada)) {
        resultado.innerHTML = `login confirmado`
    }





}

function esqueceu_senha() {

    pagina_login.style.display = "none"
    pagina_redefinir.style.display = "block"
}

function cadastro() {
    pagina_login.style.display = "none"
    pagina_cadastro.style.display = "block"

}





