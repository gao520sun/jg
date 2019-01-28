import {observable,computed,autorun,action} from "mobx";
let add = 0;
const changeTitle = observable({
    title:'',
});
changeTitle.addNumber = () =>{
    changeTitle.title = 'gaozhonglei'+(add++);
};
changeTitle.jianNumber = () =>{
    changeTitle.title = 'gaozhonglei'+(add--);
};

// const map = observable.map({ key: "value"});
// map.set("key", "new value");
// console.log('model---map:::::',map['key']);
// const list = observable([1, 2, 4]);
// list[2] = 3;
// console.log('model---list:::::',list);
// const person = observable({
//     firstName: "Clive Staples",
//     lastName: "Lewis"
// });
// person.firstName = "C.S.";
// console.log('model---person:::::',person.firstName);
// const temperature = observable.box(20);
// temperature.set(25);

class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}


const persons = observable({
    // observable 属性:
    name: "John",
    age: 42,
    showAge: false,

    // 计算属性:
    get labelText() {
        return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
    },

    // 动作:
    setAge(age) {
        this.age = age;
    }
}, {
    setAge: action
});

// 对象属性没有暴露 'observe' 方法,
// 但不用担心, 'mobx.autorun' 功能更加强大
autorun(() => console.log('aaaa:::',persons.labelText));

persons.name = "Dave";
// 输出: 'Dave'

persons.setAge(21);
console.log('persons:::',persons.name);

export {
    changeTitle,OrderLine
}
