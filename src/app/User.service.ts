import {Injectable} from '@angular/core';

@Injectable()

export class UsersService {
    usersList = [];

    constructor() {
    }


    addUser(userData): void {
        // localStorage.setItem('user', JSON.stringify(userData));
        this.usersList = JSON.parse(localStorage.getItem('user')) || [];
        this.usersList.push({
            name: userData.name,
            lastName: userData.lastname,
            email: userData.email,
            password: userData.password
        });
        localStorage.setItem('users', JSON.stringify(this.usersList));
    }

    getAllUsers() {
        const usersObj = JSON.parse(localStorage.getItem('users'));
        return [...usersObj];
    }

    // findUserByEmail(userEmail) {
    //     let rez = null;
    //     this.getAllUsers().forEach((user => {
    //         if (user.email === userEmail) {
    //             rez = user;
    //         }
    //     }));
    //     return rez;
    // }

}