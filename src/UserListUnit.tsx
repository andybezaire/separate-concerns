import React, { useState, PropsWithChildren, ReactElement } from "react";
import styled from "styled-components"

const UserListUnitEl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 18px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid grey;
`;

const Icon = styled.div`
  background: white;
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

const Collapsed = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5;
`;

const FullName = styled.p`
  display: flex;
  margin: 0;
`;

const Address = styled.p`
  display: flex;
  margin: 0;
`;

const Email = styled.p`
  display: flex;
  margin: 0;
`;



interface Props {
    /** Label text shown when collapsed */
    title?: string;
    /** Name shown when expanded */
    fullName?: string;
    /** Address shown when expanded */
    address?: string;
    /** Email shown when expanded */
    email?: string;
    /** State used when used as controlled */
    isCollapsed?: boolean;
    /** Method used when used as controlled */
    collapse?: (isCollapsed: boolean) => void;
    className?: string;
    /** State used when used not controlled matter */
    startState?: boolean;
}

export function UserListUnit(props: PropsWithChildren<Props>): ReactElement {
    const {
        fullName,
        address,
        email,
        title,
        isCollapsed = false,
        collapse,
        startState = true,
    } = props;
    const [collapsed, setCollapsed] = useState(startState);
    const hide = collapse ? isCollapsed : collapsed;
  return (
    <UserListUnitEl
        onClick={() =>
            collapse ? collapse(!isCollapsed) : setCollapsed(!collapsed)
        }
    >
        <HeaderWrapper>
            <Icon>{hide ? "+" : "-"}</Icon>
            <Header>{title}</Header>
        </HeaderWrapper>
            {!hide && <Collapsed>
                <FullName>{fullName}</FullName>
                <Email>{email}</Email>
                <Address>{address}</Address>
            </Collapsed>}
    </UserListUnitEl>
  );
}

UserListUnit.styles = {
    ContainerStyle: UserListUnitEl,
    CollapsedStyle: Collapsed,
    IconStyle: Icon,
    HeaderStyle: Header,
};

