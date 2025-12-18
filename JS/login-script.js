document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");

    if(formLogin) {
        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if(email && senha) {
                console.log("Login tentado com:", email);
                alert("Login simulado com sucesso!");
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});