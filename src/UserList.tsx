import React from "react";
import styled from "styled-components";
import { UserListUnit } from "./UserListUnit";


type UserListProps = {
  temp: string;
};

const UserListEl = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
`;

export function UserList({ temp }: UserListProps) {
  return (
    <UserListEl className="App">
        <UserListUnit />
    </UserListEl>
  );
}

export default UserList;
