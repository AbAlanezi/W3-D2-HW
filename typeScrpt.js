//  ثانيا :انشئ array باسم persons , ندخل بيانات ثلاث user
var persons = [
    { age: 18, name: "ahmd", occupation: "one" },
    { age: 30, name: "slman", occupation: "tow" },
    { age: 25, name: "abdalazez", occupation: "three" },
    { age: 28, name: "salm", specialty: "IT" },
    { age: 60, name: "mohmmad", specialty: "CS" },
    { age: 43, name: "rashed", specialty: "IS" }
];
//  ثالثا : انشئ function تقوم بطباعة بيانات مصفوفة persons
function print(x) {
    for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
        var x_1 = persons_1[_i];
        console.log(x_1);
    }
}
print(persons);
//  سادسا: اطبع بيانات مصفوفة persons مع التميز بين user , admin
function check(person) {
    for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
        var x = person_1[_i];
        if ("occupation" in x) {
            console.log("User: Name:".concat(x.name, ", Age:").concat(x.age, ", Occupation:").concat(x.occupation));
        }
        else {
            console.log("Admin: Name:".concat(x.name, ", Age:").concat(x.age, ", Occupation:").concat(x.specialty));
        }
    }
}
check(persons);
//  سابعا : انشى function تغير قمية age
function change(name, age) {
    for (var _i = 0, persons_2 = persons; _i < persons_2.length; _i++) {
        var x = persons_2[_i];
        if (x.name == name) {
            x.age = age;
        }
    }
    console.log(persons);
}
change("rashed", 22);
