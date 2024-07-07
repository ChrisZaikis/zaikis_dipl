import "../../chats.css";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { useSelector } from "react-redux";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import "..//.//../scss/button.scss";

const UserChatComponent = () => {
  const [socket, setSocket] = useState(false);
  //   let chat = [
  //       {"client": "msg"},
  //       {"client": "msg"},
  //       {"admin": "msg"},
  //   ]
  const [chat, setChat] = useState([]);
  const [messageReceived, setMessageReceived] = useState(false);
  const [chatConnectionInfo, setChatConnectionInfo] = useState(false);
  const [reconnect, setReconnect] = useState(false);

  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);

  useEffect(() => {
    if (!userInfo.isAdmin) {
      setReconnect(false);
      var audio = new Audio("/audio/chat-msg.mp3");
      const socket = socketIOClient();
      socket.on("no admin", (msg) => {
        setChat((chat) => {
          return [
            ...chat,
            { admin: "Ο Διαχειριστής δεν βρίσκεται αυτή την στιγμή εδώ🙍🏻‍♀️" },
          ];
        });
      });
      socket.on("server sends message from admin to client", (msg) => {
        setChat((chat) => {
          return [...chat, { admin: msg }];
        });
        setMessageReceived(true);
        audio.play();
        const chatMessages = document.querySelector(".cht-msg");
        chatMessages.scrollTop = chatMessages.scrollHeight;
      });
      setSocket(socket);
      socket.on("admin closed chat", () => {
        setChat([]);
        setChatConnectionInfo(
          "Ο διαχειριστής έκλεισε τη συνομιλία. Πληκτρολογήστε κάτι και υποβάλετε για επανασύνδεση"
        );
        setReconnect(true);
      });
      return () => socket.disconnect();
    }
  }, [userInfo.isAdmin, reconnect]);

  const clientSubmitChatMsg = (e) => {
    if (e.keyCode && e.keyCode !== 13) {
      return;
    }
    setChatConnectionInfo("");
    setMessageReceived(false);
    const msg = document.getElementById("clientChatMsg");
    let v = msg.value.trim();
    if (v === "" || v === null || v === false || !v) {
      return;
    }
    socket.emit("client sends message", v);
    setChat((chat) => {
      return [...chat, { client: v }];
    });
    msg.focus();
    setTimeout(() => {
      msg.value = "";
      const chatMessages = document.querySelector(".cht-msg");
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 200);
  };

  return !userInfo.isAdmin ? (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn product-card " htmlFor="check">
        {/* <i className="bi bi-chat-left-dots comment"></i> */}
        <HiOutlineChatAlt2 className=" fs-2 comment " />
        {messageReceived && (
          <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle "></span>
        )}

        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Άς Συνομιλήσουμε - Online 👩🏼‍💼</h6>
        </div>
        <div className="chat-form">
          <div className="cht-msg">
            <p>{chatConnectionInfo}</p>
            {chat.map((item, id) => (
              <div key={id}>
                {item.client && (
                  <p>
                    <b>Έγραψες:</b> {item.client}
                  </p>
                )}
                {item.admin && (
                  <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                    <b>Η υποστήριξη Έγραψε:</b> {item.admin}
                  </p>
                )}
              </div>
            ))}
          </div>
          <textarea
            onKeyUp={(e) => clientSubmitChatMsg(e)}
            id="clientChatMsg"
            className="form-control"
            placeholder="Το μήνυμα κειμένου σας"
          ></textarea>

          <button onClick={(e) => clientSubmitChatMsg(e)} className="button-77">
            Υποβάλλω
          </button>
        </div>
      </div>
    </>
  ) : null;
};

export default UserChatComponent;
