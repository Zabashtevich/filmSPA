import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  Container,
  ItemContainer,
  ImgWrapper,
  InfoWrapper,
  InfoRow,
  InfoTitle,
  InfoItem,
  ImgIcon1,
  ImgIcon2,
  ImgIcon3,
  ImgIcon4,
  ImgIcon5,
  ButtonsWrapper,
  Delete,
  Rename,
  PlaceholderContainer,
  Placeholder,
  CreateItemContainer,
  CreateIcon,
  Input,
  Confirm,
  Abort,
} from "./styles/acclist";

export default function AccountList({ children, ...rest }) {
  return (
    <TransitionGroup component={Container} {...rest}>
      {children}
    </TransitionGroup>
  );
}

AccountList.ItemContainer = function AccountListItemContainer({
  children,
  key,
  ...rest
}) {
  return <ItemContainer {...rest}>{children}</ItemContainer>;
};

AccountList.ImgWrapper = function AccountListImgWrapper({ children, ...rest }) {
  return <ImgWrapper {...rest}>{children}</ImgWrapper>;
};

AccountList.ImgIcon = function AccountListImgIcon({ i }) {
  return (
    <>
      {i === 1 && <ImgIcon1 />}
      {i === 2 && <ImgIcon2 />}
      {i === 3 && <ImgIcon3 />}
      {i === 4 && <ImgIcon4 />}
      {i === 5 && <ImgIcon5 />}
    </>
  );
};

AccountList.InfoWrapper = function AccountListInfoWrapper({
  children,
  ...rest
}) {
  return <InfoWrapper {...rest}>{children}</InfoWrapper>;
};

AccountList.InfoRow = function AccountListInfoRow({ children, ...rest }) {
  return <InfoRow {...rest}>{children}</InfoRow>;
};

AccountList.InfoTitle = function AccountListInfoTitle({ children, ...rest }) {
  return <InfoTitle {...rest}>{children}</InfoTitle>;
};

AccountList.InfoItem = function AccountListInfoItem({ children, ...rest }) {
  return <InfoItem {...rest}>{children}</InfoItem>;
};

AccountList.ButtonsWrapper = function AccountListButtonsWrapper({
  children,
  ...rest
}) {
  return <ButtonsWrapper {...rest}>{children}</ButtonsWrapper>;
};

AccountList.Delete = function AccountListDelete({ children, ...rest }) {
  return <Delete {...rest}>{children}</Delete>;
};

AccountList.Rename = function AccountListRename({ children, ...rest }) {
  return <Rename {...rest}>{children}</Rename>;
};

AccountList.PlaceholderContainer = function AccountListPlaceholderContainer({
  children,
  ...rest
}) {
  return <PlaceholderContainer {...rest}>{children}</PlaceholderContainer>;
};

AccountList.Placeholder = function AccountListPlaceholder({
  children,
  ...rest
}) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

AccountList.CreateItemContainer = function AccountListCreateItemContainer({
  children,
  ...rest
}) {
  return <CreateItemContainer {...rest}>{children}</CreateItemContainer>;
};

AccountList.CreateIcon = function AccountListCreateIcon({ children, ...rest }) {
  return <CreateIcon {...rest}>{children}</CreateIcon>;
};

AccountList.Input = function AccountListInput({ children, visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      timeout={{ enter: 200, exit: 300, appear: 300 }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <Input {...rest}>{children}</Input>
    </CSSTransition>
  );
};

AccountList.Confirm = function AccountListConfirm({
  children,
  visible,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      timeout={{ enter: 200, exit: 300, appear: 300 }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <Confirm {...rest}>{children}</Confirm>
    </CSSTransition>
  );
};

AccountList.Abort = function AccountListAbort({ children, visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      timeout={{ enter: 500, exit: 600, appear: 30000 }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <Abort {...rest}>{children}</Abort>
    </CSSTransition>
  );
};
