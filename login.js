document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginMessage = document.getElementById('loginMessage');

    // Verifica se já existe uma lista de usuários no localStorage
    if (!localStorage.getItem('users')) {
        const users = [
            { email: 'usuario1@email.com', password: 'senha123' },
            { email: 'usuario2@email.com', password: 'senha456' }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Limpa mensagens de erro
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        loginMessage.style.display = 'none';

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validação dos campos
        let valid = true;

        if (!email) {
            emailError.style.display = 'block';
            valid = false;
        }

        if (!password) {
            passwordError.style.display = 'block';
            valid = false;
        }

        if (!valid) {
            return;
        }

        // Busca o usuário no local storage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = storedUsers.find(user => user.email === email && user.password === password);

        if (user) {
            window.location.href = 'home.html'; // Redireciona para a tela "Home"
        } else {
            loginMessage.style.display = 'block';
        }
    });

    // Se você deseja impedir a colagem na entrada de senha, remova o código abaixo
    passwordInput.addEventListener('paste', function (event) {
        event.preventDefault();
    });
});
