import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  //initial value will be an empty string
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    //prevent browser refresh
    event.preventDefault();

    const text = value.trim();

    //sendMessage method is chat engine's method
    if (text.length > 0) sendMessage(creds, chatId, { text });

    //reset value to empty string after message is sent
    setValue("");
  };

  const handleChange = (event) => {
    //value of the input
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button className="send-button" type="button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
