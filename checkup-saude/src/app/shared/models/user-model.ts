export interface UserModel {
    nome: string;
    sobrenome: string;
    cpf: string;
    data_nascimento: string;
    cartao: {
        cns: string;
        nome_mae: string;
    }
}