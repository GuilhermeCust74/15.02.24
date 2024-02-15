function verificarLogin(){
    let txtLogin = document.gegtElementById("txtLogin");
    let txtSenha = document.gegtElementById("txtSenha");
 
    let login = "teste";
    login="teste2"
    let senha = "teste";

    if(txtLogin.value == login && txtSenha.value == senha){
        console.log("Logado com sucesso!")
    }else {
        console.log("Login ou senha incorretos! Digite e tente novamente.")

    }
}