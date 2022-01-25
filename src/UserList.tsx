import React from "react";

type UserListProps = {
  temp: string;
};

function UserList({ temp }: UserListProps) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React!</p>

        <button onClick={() => {}}>Click me</button>
      </header>
    </div>
  );
}

export default UserList;
