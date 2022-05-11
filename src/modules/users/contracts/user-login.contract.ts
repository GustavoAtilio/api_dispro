import { Flunt } from "src/shared/utils/flunt.util";
import { Contract } from "./contract";


export class UserLoginContract implements Contract{
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

        this.errors = flunt.errors;
        return flunt.isValid()
    }

}