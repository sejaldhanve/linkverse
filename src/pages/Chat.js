import React, { useState } from "react";
import "./Chat.css";

const ChatApp = () => {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Sejal",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYd-u1xnfswcIT5lcbB9o0Z3pawJzmiRiNA&s",
      messages: [{ text: "Hey, how are you?", sent: false, type: "text" }],
    },
    {
      id: 2,
      name: "Prerna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTC5RG85M6nIUqwll7EDG-CJmr1IgmX0V3Q&s",
      messages: [{ text: "Hi! Long time no see", sent: false, type: "text" }],
    },
    {
      id: 3,
      name: "Pranali",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&s",
      messages: [{ text: "Good morning!", sent: false, type: "text" }],
    },
    {
      id: 4,
      name: "Pratik",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERjlP3dmjHWzF0K7IFcSIhpw3oQ3wKafE7w&s",
      messages: [{ text: "Let’s catch up soon!", sent: false, type: "text" }],
    },
  ]);

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() && selectedPerson !== null) {
      const updatedPeople = [...people];
      updatedPeople.forEach((person) => {
        if (person.id === selectedPerson.id) {
          person.messages.push({ text: inputMessage, sent: true, type: "text" });
        }
      });
      setPeople(updatedPeople);
      setInputMessage("");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && selectedPerson !== null) {
      const updatedPeople = [...people];
      updatedPeople.forEach((person) => {
        if (person.id === selectedPerson.id) {
          const fileType = file.type.startsWith("image/") ? "image" : "file";
          const fileUrl = URL.createObjectURL(file);
          person.messages.push({ text: fileUrl, sent: true, type: fileType });
        }
      });
      setPeople(updatedPeople);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="chat-app">
      <div className="chat-list">
        <h2>Messages</h2>
        <ul>
          {people.map((person) => (
            <li
              key={person.id}
              className={`person ${
                selectedPerson?.id === person.id ? "active" : ""
              }`}
              onClick={() => setSelectedPerson(person)}
            >
              <div className="person-name-img">
                <img
                  src={person.image}
                  alt={person.name}
                  className="profile-image"
                />
                <p className="profile-name">{person.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-window">
        {selectedPerson ? (
          <>
            <h2>Chat with {selectedPerson.name}</h2>
            <div className="message-container">
              {selectedPerson.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sent ? "sent" : ""} ${
                    msg.type === "text" ? "text-message" : ""
                  }`}
                >
                  {msg.type === "text" ? (
                    msg.text
                  ) : msg.type === "image" ? (
                    <img
                      src={msg.text}
                      alt="Sent"
                      className="sent-image"
                      style={{ maxWidth: "200px" }}
                    />
                  ) : (
                    <a
                      href={msg.text}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="file-link"
                    >
                      View File
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="input"
                placeholder="Type a message"
              />
              <input
                id="fileInput"
                type="file"
                accept="image/*,application/pdf,application/msword,.txt"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button onClick={triggerFileInput} className="button">
                Attach
              </button>
              <button onClick={handleSendMessage} className="button">
                Send
              </button>
            </div>
          </>
        ) : (
          <p>Select a person to start chatting.</p>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
