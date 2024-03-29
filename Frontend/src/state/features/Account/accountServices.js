import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://ebank-2t3r.onrender.com/api/account/"
    : "http://localhost:8000/api/account/";

//Get Account
const getAccount = async (payload) => {
  const res = await axios.get(API_URL + payload.accountId, {
    headers: {
      authorization: `Bearer ${payload.token}`,
    },
  });
  const data = res.data;

  return data;
};

//Transfer Balance
const transfer = async (payload) => {
  const res = await axios.put(
    API_URL + "/transfer/" + `${payload.from}/` + payload.to,
    payload,
    {
      headers: {
        authorization: `Bearer ${payload.token}`,
      },
    }
  );
  const data = res.data;

  return data;
};


//Logout
const accountLogout = () => {
  return;
};

const accountServices = {
  getAccount,
  transfer,
  accountLogout,
};

export default accountServices;
