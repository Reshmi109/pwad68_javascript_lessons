class FormData {
    constructor(name, address, phone) {
        this.name1 = name;
        this.address1 = address;
        this.phone1 = phone;

    }

    DataDisplay() {
        let output = "<h1>Student Information</h1>"
        output += "Name : " + this.name1 + "<br>";
        output += "Address : " + this.address1 + "<br>";
        output += "Phone : " + this.phone1;

        return output;
    }
}