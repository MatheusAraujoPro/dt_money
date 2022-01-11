import { useState } from "react";
import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTranscationsModal: () => void;
}

export function Header({ onOpenNewTranscationsModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTranscationsModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
