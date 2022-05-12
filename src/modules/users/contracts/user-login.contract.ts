import { Flunt } from "src/shared/utils/flunt.util";
import { Contract } from "./contract";


export class UserLoginContract implements Contract{
    errors: any[];
    validate(model: any): boolean {
        const flunt = new Flunt()

        //Validação Nome de Usuário
        flunt.isRequired(model.userName, "Informe um UserName de usuário correto.")
        flunt.hasMinLen(model.userName, 5, 'UserName deve ser maior que 5 caracteres.');
        flunt.hasMaxLen(model.userName, 100, 'UserName deve ser menor que 100 caracteres.');
        

        //Validação Senha do Usuário
        flunt.isNotNull(model.password, "Informe uma senha válida.")        

        this.errors = flunt.errors;
        return flunt.isValid()
    }

}