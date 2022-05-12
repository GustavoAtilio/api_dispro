import { Flunt } from "src/shared/utils/flunt.util";
import { Contract } from "./contract";


export class UserCreateContract implements Contract{
    errors: any[];
    validate(model: any): boolean {
        const flunt = new Flunt()

        //Validação Nome de Usuário
        flunt.hasMinLen(model.name, 5, 'Nome deve ser maior que 5 caracteres.');
        flunt.hasMaxLen(model.name, 100, 'deve ser menor que 100 caracteres.');
        flunt.isNotNull(model.name, "Informe um nome de usuário correto.")

        //Validação Senha do Usuário
        flunt.hasMinLen(model.password, 8, 'Senha deve ser maior que 8 caracteres.');
        flunt.hasMaxLen(model.password, 60, 'Senha deve der Menor que 60 caracteres');
        flunt.isNotNull(model.password, "Informe uma senha correta.")

        //Validação E-mail do Usuário
        flunt.hasMinLen(model.email, 5, 'E-mail deve ser maior que 5 caracteres.');
        flunt.hasMaxLen(model.email, 100, 'E-mail deve ser menor que 60 caracteres');
        flunt.isNotNull(model.email, "Informe um e-mail correto.")
        flunt.isEmail(model.email, "E-mail não pode ser nulo.")

        //Validação Numerro do Usuário
        flunt.hasMinLen(model.number, 9, 'Número deve ser maior que 9 caracteres');
        flunt.hasMaxLen(model.number, 11, 'Número deve ser menor que 11 caracteres');
        flunt.isNotNull(model.number, "Informe um número correto.")

        

        this.errors = flunt.errors;
        return flunt.isValid()
    }

}