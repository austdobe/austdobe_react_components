import { render, screen, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"

import Button from "./Button";
import React from "react";

afterEach(() => {
    cleanup();
})

describe("Button Component", () => {
    render(<Button label="Button" classes="bg-dark"/>)
    const button = screen.getByTestId('button')

    test("renders the Button component", () => {
        expect(button).toBeTruthy()
    })

    test("button label renders correctly", () => {
        expect(button).toHaveTextContent("Button")
    })
    
    test("classes added", () => {
        expect(button).toHaveAttribute("classes")
    })
        
})