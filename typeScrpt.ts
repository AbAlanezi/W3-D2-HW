// بناء على ماتعلمنا سابقا من TypeScript سوف نقوم : أولا : قم بكتابة interface اسمها User تتكون من :
 interface  User {
    [key: string]: any
    age: number,
    name: string,
    occupation: string
 }

//  ثانيا :انشئ array باسم persons , ندخل بيانات ثلاث user
 let persons: users[] = [
  {age: 18, name: "ahmd", occupation: "one"},
  {age: 30, name: "slman", occupation: "tow"},
  {age: 25, name: "abdalazez", occupation: "three"},
  {age: 28, name: "salm", specialty: "IT"},
  {age: 60, name: "mohmmad", specialty: "CS"},
  {age: 43, name: "rashed", specialty: "IS"}
 ]

//  ثالثا : انشئ function تقوم بطباعة بيانات مصفوفة persons
 function print(x){
    for(const x of persons){
        console.log(x)
    }
 }
 print(persons)
 
//  رابعا :انشئ interface جديدة باسم Admin , تتكون من :
 interface Admin{
   [key: string]: any
   age: number,
   name: string,
   specialty: string
 }

//  خامسا : أدخل بيانات ثلاث Admin على مصفوفة persons . بستخدام Aliases انشاء type يجمع بين user , admin
 type users = User | Admin

//  سادسا: اطبع بيانات مصفوفة persons مع التميز بين user , admin
 function check(person){
     for(const x of person){
         if("occupation" in x){
            console.log(`User: Name:${x.name}, Age:${x.age}, Occupation:${x.occupation}`)
         }else{
            console.log(`Admin: Name:${x.name}, Age:${x.age}, Occupation:${x.specialty}`)
         }
     }
 }
 check(persons)

//  سابعا : انشى function تغير قمية age
 function change(name: string, age: number){
    for(const x of persons){
        if(x.name == name){
            x.age = age
        }
    }
    console.log(persons)
 }
 change("rashed", 22)

 

