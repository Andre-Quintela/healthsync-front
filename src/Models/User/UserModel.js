class UserModel {
    constructor(id, firstName, lastName, bornDate, email, password, address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bornDate = bornDate;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    getUserInfo() {
        return {
            id: this.id,
            firstName: this.firstName,
            email: this.email,
        };
    }

    updateUserInfo(firstName, email) {
        this.firstName = firstName;
        this.email = email;
    }

    validatePassword(password) {
        return this.password === password;
    }
}

export default UserModel;
