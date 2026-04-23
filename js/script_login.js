function cadastro_realizado() {
    let codigo = ipt_codigo_cadastro.value;
    let cpf = ipt_cpf_cadastro.value;
    let email_cadastro = ipt_email_cadastro.value;
    let senha_cadastrada = ipt_senha_cadastro.value;
    let confirmar_senha_cadastro = ipt_confirmar_senha_cadastro.value;
    let resultado = document.getElementById("div_resultado_cadastro");

    resultado.innerHTML = "";
    resultado.style.color = "";

    if (senha_cadastrada !== confirmar_senha_cadastro) {
        resultado.innerHTML = "As senhas não coincidem!";
        resultado.style.color = "red";
        return;
    }

    if (email_cadastro == "" || senha_cadastrada == "" || cpf == "") {
        resultado.innerHTML = "Preencha todos os campos obrigatórios!";
        resultado.style.color = "red";
        return;
    }

    sessionStorage.setItem("email_acesso", email_cadastro);
    sessionStorage.setItem("senha_acesso", senha_cadastrada);
    sessionStorage.setItem("tentativas", 3);

    resultado.style.color = "green";
    resultado.innerHTML = "Cadastro realizado com sucesso!";

    window.location.href = "login.html";
}

let erros = []

function login() {
    let email = ipt_email_login.value;
    let senha = ipt_senha_login.value;
    let resultado = document.getElementById("div_resultado_login");

    let email_salvo = sessionStorage.getItem("email_acesso");
    let senha_salva = sessionStorage.getItem("senha_acesso");

    let tentativas = 3
    let acertou = false

    if (email == "" || senha == "") {
        resultado.innerHTML = "Todos os campos devem ser preenchidos.";
        resultado.style.color = "red";
        return;
    }


    if (email == email_salvo && senha == senha_salva) {
        resultado.innerHTML = "Login confirmado!";
        resultado.style.color = "green";
        window.location.href = "dashboard.html";
        acertou = true

    } else {
        erros.push("bloqueado")
    }


    for (let i = 0; i < erros.length; i++) {
        if (i == 2) {
            alert("Você excedeu o número de tentativas. Acesso bloqueado!");
            return false;
        }
    }

    tentativas = tentativas - erros.length;
    if (acertou == false) {
        resultado.innerHTML = `Email ou senha incorretos. Restam ${tentativas} tentativa(s).`;
        resultado.style.color = "red";
        return false;

    }

}

function redefinir() {
    let email_informado = ipt_email_redefinir.value;
    let senha_nova = ipt_nova_senha.value;
    let senha_confirmada = ipt_confirmar_senha.value;
    let resultado = document.getElementById("div_resultado_redefinir");

    let email_salvo = sessionStorage.getItem("email_acesso");

    if (email_informado !== email_salvo) {
        resultado.innerHTML = "Esse e-mail não possui uma conta!";
        resultado.style.color = "red";
        return;
    }

    if (senha_nova == "" || senha_confirmada == "") {
        resultado.innerHTML = "Preencha todos os campos.";
        resultado.style.color = "red";
        return;
    }

    if (senha_confirmada === senha_nova) {
        sessionStorage.setItem("senha_acesso", senha_confirmada);

        resultado.innerHTML = "Senha alterada com sucesso!";
        resultado.style.color = "green";

        window.location.href = "login.html";
    } else {
        resultado.innerHTML = "As senhas não coincidem!";
        resultado.style.color = "red";
    }
}