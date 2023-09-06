let arr: string[];
arr = ["A", "b", "c", "d", "g"];

function arrCheck(arr: string[]) {
  arr.forEach((i) => {
    console.log(i);
  });
}
arrCheck(arr);
//2
type UserInfo = {
  name: string;
  age: number;
  email: string;
};

const user: UserInfo = {
  name:"A",
  age: 20,
  email: "A@gmail.com",
};

function printUserInfo(userInfo: UserInfo) {
  console.log("Имя: " + userInfo.name);
  console.log("Возраст: " + userInfo.age);
  console.log("Email: " + userInfo.email);
}

printUserInfo(user);
