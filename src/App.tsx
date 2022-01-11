import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";

Modal.setAppElement("#yourAppElement");

export function App() {
  const [isNewTranscationModalOpen, setIsNewTranscationModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTranscationModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTranscationModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTranscationsModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTranscationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
