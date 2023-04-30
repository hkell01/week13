class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display(elementId) {
        $(`#${elementId}`).text(`${this.firstName} ${this.lastname}`);
    }
}