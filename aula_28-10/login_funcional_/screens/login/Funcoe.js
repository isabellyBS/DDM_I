export function verificarLogin(usuario, senha) {
    if (usuario === 'user' && senha === '1234') {
        return true;
    }
    return false;
}