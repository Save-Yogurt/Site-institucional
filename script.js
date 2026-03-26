    
let senha_acesso = "julia123";

console.log(senha_acesso)
 
 function redefinir(){
        let senha_nova = nova_senha.value
        let senha_confirmada = confirmar_senha.value

        

        if (senha_confirmada == senha_nova){
            exibir.innerHTML = `Senha alterada`
            senha_acesso = senha_confirmada
        } else {
            exibir.innerHTML = `Digite corretamente, as senhas estão diferentes`
            
        } 

    }
    function voltar_tela_login(){
         window.location.href= "login.html"}

 function continuar(){
            let email= email_usuario.value
            let senha = senha_usuario.value
            
            console.log(senha_acesso)

             let email_acesso = "julia.araripe@sptech.school"
            

            if (email == "" || senha ==""){
                resultado.innerHTML =  `todos os campos devem ser preenchidos `
            }


            else if (email != email_acesso  || senha != senha_acesso  ){
                resultado.innerHTML = `Credenciais incorretas`
            } else if (email = email_acesso && (senha = senha_acesso || senha == senha_confirmada)){
                resultado.innerHTML = `login confirmado`
            }

            
           

            
        }

        function esqueceu_senha (){
             // window.location.href= "arquivo"
             // o usuario tem que recurar a senha 
             window.location.href= "esqueceu_senha.html"
        }
        
        function cadastro (){
            window.location.href= "cadastro.html"
        }
    
     

        