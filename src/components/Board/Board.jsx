import { useEffect, useState } from "react";
import supabase from "../../supabaseClient";

const Board = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("board").select("*");
      if (error) {
        console.log("error => ", error);
      } else {
        console.log("data => ", data);
        setUsers(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ margin: "30px" }}>
      <h3>게시판</h3>
      {users.map((user) => {
        return (
          <div key={user.id} style={{ border: "1px solid black" }}>
            <h5>아이디 : {user.id}</h5>
            <h5>이름 : {user.name}</h5>
            <h5>URL : {user.url}</h5>
            <h5>트랙 : {user.track}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
