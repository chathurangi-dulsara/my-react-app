export default function HandleSubmit(username,age,setFun) {
    setFun((pre)=>({
        ...pre,
        name:username.current.value,
        age:age.current.value,
        userId:username.current.value
    }));
    username.current.value = "";
    age.current.value = "";

}