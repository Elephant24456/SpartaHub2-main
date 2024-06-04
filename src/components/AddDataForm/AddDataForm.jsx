import { useState } from "react";

import supabase from "../../supabaseClient";

const AddDataForm = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [track, setTrack] = useState("");

  const handleAdd = async () => {
    const { data, error } = await supabase.from("board").insert({
      name: name,
      url: url,
      track: track,
    });

    if (error) {
      console.log("error => ", error);
    } else {
      alert("데이터가 정상적으로 입력됐습니다.");
      console.log(data);
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>게시글 작성</h2>
      <div>
        이름:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        URL:{" "}
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </div>
      <div>
        트랙 :{" "}
        <input
          type="text"
          value={track}
          onChange={(e) => {
            setTrack(e.target.value);
          }}
        />
      </div>
      <button style={{ border: "1px solid black" }} onClick={handleAdd}>
        등록
      </button>
    </div>
  );
};

export default AddDataForm;
