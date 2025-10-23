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
export const handleUserInput = (image, email, city, position, setFun) => {
    setFun((pre) => ({
      ...pre,
      image: image.current.value,
      email: email.current.value,
      city: city.current.value,
      position: position.current.value,
    }));

    image.current.value="",
    email.current.value="",
    city.current.value="",
    position.current.value="";
  };
