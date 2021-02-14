import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from './index';
import { MemoryRouter } from "react-router-dom";
describe('#Home', () => {

  test('should be redirect when click in the cover', async () => {
    render(<Home />, {
      wrapper: MemoryRouter,
    });
    
    const customImage = await screen.findByTestId('previewCard.customImage');
    fireEvent.click(customImage);
  });
  
});
