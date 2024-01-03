import axios from "axios";

const sendedEmail = async ({ name, email, message }) => {
  const responses = await axios.post("/api/send-mail", {
    name, email, message
  }, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  });
  return responses;
}

export default sendedEmail;