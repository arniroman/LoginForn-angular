import {Injectable} from '@angular/core';



@Injectable()
export class LoginService {

    validateUser(users  , formsControls): boolean {
        let result = false;
        users.forEach((user) => {
            if (user.email === formsControls.email && user.password === formsControls.password) {
                result = true;
            }
        });
        return result;
    }
}