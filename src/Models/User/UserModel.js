class UserModel {
    constructor(id, name, lastName, bornDate, email, password, address) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.bornDate = bornDate;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    getUserInfo() {
        return {
            id: this.id,
            name: this.name,
            email: this.email
        };
    }

    updateUserInfo(name, email) {
        this.name = name;
        this.email = email;
    }

    validatePassword(password) {
        return this.password === password;
    }
}

export default UserModel;