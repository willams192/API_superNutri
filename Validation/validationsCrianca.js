function validarNome(nome) {
    if (!nome) {
        throw new Error('Nome é um campo obrigatório');
    }
    if (/[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?]+/.test(nome)) {
        throw new Error('Nome não pode conter caracteres especiais');
    }
}

function validarIdade(idade) {
    if (!idade) {
        throw new Error('Idade é um campo obrigatório');
    }
    if (!Number.isInteger(idade)) {
        throw new Error('Idade deve ser um número inteiro');
    }
    if (idade < 0 || idade > 12) {
        throw new Error('Idade deve estar entre 0 e 12');
    }

}

function validarPeso(peso) {
    if (!peso) {
        throw new Error('Peso é um campo obrigatório');
    }
    if (typeof peso !== 'number' || isNaN(peso)) {
        throw new Error('Peso deve ser um número');
    }
    if (peso <= 0 || peso > 80) {
        throw new Error('Peso deve estar entre 0 e 80');
    }
}

function validarAltura(altura) {
    if (!altura) {
        throw new Error('Altura é um campo obrigatório');
    }
    if (altura <= 0 || altura > 200) {
        throw new Error('Altura deve estar entre 0 e 200 centimetros');
    }
    if (typeof altura !== 'number' || isNaN(altura)) {
        throw new Error('Altura deve ser um número');
    }
}

function validarCS(cs) {
    if (!cs) {
        throw new Error('CS é um campo obrigatório');
    }
    if (/[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?]+/.test(cs)) {
        throw new Error('Complicação de Saúde não pode conter caracteres especiais');
    }
}

module.exports = {
    validarNome,
    validarIdade,
    validarPeso,
    validarAltura,
    validarCS
};
