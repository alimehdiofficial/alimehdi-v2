import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import styled from "styled-components";
import moment from "moment";

function Message({ message, id }) {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Text>{message?.message}</Text>
      <UserInfo>
        <DisplayName>{message?.displayName}</DisplayName>
        <span>/</span>
        <Timestamp>
          {moment(new Date(message?.timestamp?.toDate().toUTCString())).format(
            "lll"
          )}
        </Timestamp>
        {user?.email === message?.email && (
          <>
            <span>/</span>
            <Delete onClick={() => db.collection("messages").doc(id).delete()}>
              Delete
            </Delete>
          </>
        )}
      </UserInfo>
    </Container>
  );
}

export default Message;

const Container = styled.div`
  margin-bottom: 35px;

  @media (max-width: 425px) {
    max-width: 350px;
  }

  @media (max-width: 375px) {
    max-width: 325px;
  }
`;

const Text = styled.div`
  color: #fffffe;
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 1.7;
  max-width: 640px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #94a1b2;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 375px) {
    max-width: 300px;
  }
`;

const DisplayName = styled.p``;

const Timestamp = styled.p`
  opacity: 0.7;
`;

const Delete = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: red;
  font-weight: 500;
  font-family: inherit;
  font-size: 14px;
  padding: 0;
  border-radius: 2px;

  :focus {
    box-shadow: 0 0 0 2px rgb(153, 200, 255);
  }
`;
