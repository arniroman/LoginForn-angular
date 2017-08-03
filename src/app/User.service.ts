import {Injectable} from '@angular/core';

@Injectable()

export class UsersService {
    usersList = [];

    constructor() {
    }


    addUser(userData): void {
        console.log(userData)
        localStorage.setItem('user', JSON.stringify(userData));
        this.usersList = JSON.parse(localStorage.getItem('users')) || [];
        this.usersList.push({
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email,
            data: userData.data,
            password: userData.password
        });
        console.log(userData)
        console.log(this.usersList);
        localStorage.setItem('users', JSON.stringify(this.usersList));
    }

    getAllUsers() {
        const usersObj = JSON.parse(localStorage.getItem('users'));
        return [...usersObj];
    }


}