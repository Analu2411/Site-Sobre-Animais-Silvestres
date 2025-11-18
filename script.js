// === Menu Hambúrguer ===
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        // Alterna o ícone (bx-menu para bx-x)
        menuIcon.classList.toggle('bx-x');
        // Alterna a classe 'active' no menu para mostrá-lo ou escondê-lo
        navbar.classList.toggle('active');
    };
}

// === Validação do Formulário de Contato ===
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');
        let isValid = true;

        // Limpa erros antigos (não implementado no CSS, mas boa prática)
        
        if (nome.value.trim() === '') {
            alert('Por favor, preencha seu nome.');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            alert('Por favor, insira um e-mail válido.');
            isValid = false;
        } else if (mensagem.value.trim() === '') {
            alert('A mensagem não pode estar vazia.');
            isValid = false;
        }

        if (isValid) {
            alert('Formulário enviado com sucesso! (Simulação)');
            contactForm.reset();
        }
    });
}

// Função auxiliar para validar e-mail
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// (Opcional) Fecha o menu ao rolar a página
window.onscroll = () => {
    if (navbar && menuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};