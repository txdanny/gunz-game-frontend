import React from "react";
import Image from "next/image";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImgViewModal from ".";
import { ModalContext } from "@/contexts/modalProvider"; // adjust this import based on where your context is actually exported from

// Set up a custom render method that provides context for the components
const renderWithModalContext = (
  ui: any,
  { providerProps, ...renderOptions }: any
) => {
  return render(
    <ModalContext.Provider value={providerProps}>{ui}</ModalContext.Provider>,
    renderOptions
  );
};

// Mocks for the next/image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <Image {...props} alt="" />,
}));

describe("ImgViewModal", () => {
  const providerProps = {
    closeImgViewModal: jest.fn(),
    isOpenImgViewModal: true, // Set this to true to test the open state of the modal
    clanImgUrl: "test-url",
    clanName: "test-name",
  };

  it("does not render the modal when isOpenImgViewModal is false", () => {
    providerProps.isOpenImgViewModal = false; // Now testing the closed state of the modal

    renderWithModalContext(<ImgViewModal />, {
      providerProps,
    });

    // The modal content should not be in the document when isOpenImgViewModal is false
    expect(screen.queryByText("test-name")).not.toBeInTheDocument();
  });

  // Add more tests as necessary for different props and states
});
