function validarNome(nome) {
    if (!nome) {
        throw new Error('Nome é um campo obrigatório');
    }
    if (/[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?]+/.test(nome)) {
        throw new Error('Nome não pode conter caracteres especiais');
    }
}
function validarSenha(senha) {
    if (!senha) {
        throw new Error('Senha é um campo obrigatório');
    }
    if (senha.length < 6) {
        throw new Error('A senha deve conter mais de 6 dígitos');
    }
}

function validarEmail(email) {
    if (!email) {
        throw new Error('E-mail é um campo obrigatório');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new Error('E-mail não está no formato correto');
    }
}

module.exports = {
    validarNome,
    validarEmail,
    validarSenha
};