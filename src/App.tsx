import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTranscationModalOpen, setIsNewTranscationModalOpen] =
    useState(true);

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

      <NewTransactionModal
        isOpen={isNewTranscationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
