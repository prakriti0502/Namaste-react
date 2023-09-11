import {render, screen} from "@testing-library/react";
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe("Contact us test cases", () => {
    test('should load contact component', () => { 
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test('should render a button in contact component', () => {
        render(<Contact/>);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    test('should render 2 input boxes', () => {
        render(<Contact/>);
        const inputs = screen.getAllByRole("textbox");
        expect(inputs.length).toBe(2);
    });
    
    test('Should render input with name placeholder', () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
})