import axios from "axios";
const userapi = axios.create({});

//리턴값이 프로미스
async function getUser() {
  const res = await userapi.get("https://reqres.in/api/users?page=2");
  return res.data.data;
}

function test() {
  console.log("dd");
}

test();
test();
test();
test();

export { getUser };
