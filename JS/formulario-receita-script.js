document.addEventListener('DOMContentLoaded', () => {

    const fileInput = document.getElementById('arquivo');
    const fileNameDisplay = document.getElementById('file-name');

    if (fileInput) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                fileNameDisplay.textContent = this.files[0].name;
            } else {
                fileNameDisplay.textContent = '';
            }
        });
    }

    const form = document.getElementById('whatsappForm');
    const nextInput = document.getElementById('next-url');

    if (form) {
        form.addEventListener('submit', function() {
            
            const nome = document.getElementById('nome').value || "Cliente";
            const telefone = document.getElementById('telefone').value || "";

            const numeroWhatsApp = "554499802332*"; 

            const textoMensagem = `Olá! Sou ${nome} (${telefone}).\nAcabei de enviar minha receita e meus dados pelo formulário do site (por e-mail).\nPoderiam verificar, por favor?`;

            const textoCodificado = encodeURIComponent(textoMensagem);
            
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

            if (nextInput) {
                nextInput.value = urlWhatsApp;
            }
            
        });
    }

});