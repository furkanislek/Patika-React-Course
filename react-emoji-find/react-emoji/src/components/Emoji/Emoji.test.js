import { screen, render } from '@testing-library/react'
import App from '../../App'
import "@testing-library/jest-dom";

describe('Emoji Test Area', () => {
    render(<App />)
    test("Render If elements ok", () => {
        const items = screen.getAllByTestId("row");
        expect(items.length).toEqual(42);
    })
})