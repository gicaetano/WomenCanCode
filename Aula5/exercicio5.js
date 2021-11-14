function validaMaiorIdade (anoNascimento) {
    const resultado = 2021 - anoNascimento;
    
    if  (resultado < 18) {
        console.log("ATENÇÃO: Liberação NÃO autorizada");
    }else if (resultado == 18) {
        console.log("Validar documento de identidade");
    } 
    else {
        console.log("Liberação autorizada");
    }
}

resultado = validaMaiorIdade(2003);
