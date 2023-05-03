import { useState, useEffect } from "react";

export default function Feedback() {
  const [testFetchGetUser, setTestFetchGetUser] = useState("test for user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://2esc5vgt4m.execute-api.us-east-1.amazonaws.com/dev/api/getuser");
        const data = await response.json();
        console.log(data);
        setTestFetchGetUser(data.UserName);
      } catch (error) {
        console.log("ERROR: ", error);
        setTestFetchGetUser("Error");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>{testFetchGetUser}</div>
    </div>
  );
}
