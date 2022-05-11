import { Flunt } from "src/shared/utils/flunt.util";
import { Contract } from "./contract";


export class UserCreateContract implements Contract{
    errors: any[];
    validate(model: any): boolean {
        const flunt = new Flunt()

        //Validação Nome de Usuário
        flunt.hasMinLen(model.name, 5, 'Informe um nome de usuário correto.');
        flunt.hasMaxLen(model.name, 100, 'Informe um nome de usuário correto.');
        flunt.isNotNull(model.name, "Informe um nome de usuário correto.")

        //Validação Senha do Usuário
        flunt.hasMinLen(model.password, 8, 'Informe uma senha correta.');
        flunt.hasMaxLen(model.password, 60, 'Informe uma senha correta.');
        flunt.isNotNull(model.password, "Informe uma senha correta.")

        //Validação E-mail do Usuário
        flunt.hasMinLen(model.email, 5, 'Informe um e-mail correto.');
        flunt.hasMaxLen(model.email, 100, 'Informe um e-mail correto.');
        flunt.isNotNull(model.email, "Informe um e-mail correto.")
        flunt.isEmail(model.email, "Informe um e-mail correto.")

        //Validação Numerro do Usuário
        flunt.hasMinLen(model.number, 9, 'Informe um número correto.');
        flunt.hasMaxLen(model.number, 11, 'Informe um número correto.');
        flunt.isNotNull(model.number, "Informe um número correto.")

        

        this.errors = flunt.errors;
        return flunt.isValid()
    }

}