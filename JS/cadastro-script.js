document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("formCadastro");

    if(formCadastro) {
        formCadastro.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const senha = document.getElementById("senha").value;
            const confirmaSenha = document.getElementById("confirmaSenha").value;
            const idade = document.getElementById("idade").value;

            if (senha !== confirmaSenha) {
                alert("As senhas não coincidem! Por favor, verifique.");
                return;
            }

            if (idade < 18) {
                alert("É necessário ser maior de 18 anos para se cadastrar.");
                return;
            }

            alert("Cadastro realizado com sucesso! (Simulação)");
        });
    }
});