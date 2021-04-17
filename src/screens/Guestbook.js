import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db, provider } from "../firebase";
import { useEffect, useRef, useState } from "react";
import firebase from "firebase";
import Message from "../components/Message";
import Button from "../components/Button";

function Guestbook() {
  const [user] = useAuthState(auth);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setMessages(data);
      });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (inputRef.current.value === "") return;

    setMessages([...messages, { message: inputRef.current.value }]);

    db.collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: inputRef.current.value,
      email: user.email,
      displayName: user.displayName,
    });

    inputRef.current.value = null;
  };

  console.log(messages);

  return (
    <Container>
      <Heading>Guestbook</Heading>
      <Text>
        Leave a comment below. It could be anything – appreciation, information,
        wisdom, or even humor. Surprise me!
      </Text>
      <LoginContainer>
        <LoginHeading>Sign the Guestbook</LoginHeading>
        <LoginText>Share a message for a future visitor of my site.</LoginText>
        {user ? (
          <InputContainer>
            <UserInput
              type="text"
              placeholder="Your message..."
              ref={inputRef}
            />
            <Button type="submit" onClick={sendMessage} text="Sign" />
          </InputContainer>
        ) : (
          <Button text="Login" onClick={signIn} />
        )}
        <span>
          Your information is only used to display your name and reply by email.
        </span>
      </LoginContainer>

      <MessagesContainer>
        {messages.map((message) => (
          <Message key={message.id} message={message} id={message.id} />
        ))}
      </MessagesContainer>
    </Container>
  );
}

export default Guestbook;

const Container = styled.div`
  padding-left: 300px;

  @media (max-width: 1024px) {
    padding-left: 200px;
  }

  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #fffffe;
  margin-bottom: 16px;

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: #94a1b2;
  line-height: 1.5;
  max-width: 650px;
  font-weight: 500;
  margin-bottom: 30px;

  @media (max-width: 425px) {
    max-width: 350px;
  }

  @media (max-width: 375px) {
    max-width: 330px;
  }
`;

const LoginContainer = styled.div`
  background-color: #242629;
  padding: 30px;
  border-radius: 3px;
  max-width: 600px;
  margin-bottom: 40px;

  > span {
    color: #fffffe;
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    max-width: 290px;
  }

  @media (max-width: 375px) {
    max-width: 250px;
  }
`;

const LoginHeading = styled.h3`
  color: #fffffe;
  margin-bottom: 8px;
`;

const LoginText = styled.p`
  color: #fffffe;
  font-weight: 500;
  margin-bottom: 20px;
`;

const InputContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #16161a;
  border-radius: 6px;
  overflow: hidden;

  :focus-within {
    box-shadow: 0 0 0 2px rgb(153, 200, 255);
    border-radius: 3px;
  }
`;

const UserInput = styled.input`
  background-color: #16161a;
  color: #fffffe;
  height: 35px;
  padding-left: 10px;
  margin-bottom: 0px;
  border: 3px solid #16161a;
  border-radius: 6px;
  font-weight: 700;
  outline: none;
  flex: 1;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  ::placeholder {
    color: #fffffe;
  }

  @media (max-width: 425px) {
    width: 90%;
  }
`;

const MessagesContainer = styled.div`
  margin-bottom: 60px;
`;
