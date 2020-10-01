import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

describe('Tests the Contact Form', () => {
    
    test('Tests render without errors', () => {
        render(<ContactForm />)
    })

    test('user can fill out submit form', async() => {
        // Arrange
        render(<ContactForm />)

        // Act
        const firstNameInput =  screen.getByPlaceholderText(/edd/i)
        const lastNameInput =  screen.getByPlaceholderText(/burke/i)
        const emailInput =  await screen.findByLabelText(/Email/i);
        const messageInput =  await screen.getByTestId(/messageinput/i)
        const submitButton =  screen.getByTestId(/buttontest/i)
       
       
        
        fireEvent.change(firstNameInput, { target: { name: 'firstName', value: "TJ" } });
        fireEvent.change(lastNameInput, { target: { name: 'lastName', value: "Janus" } });
        fireEvent.change(emailInput, { target: { value: "TJ@TJ.com" } });
        fireEvent.change(messageInput, { target: { value: "Notes on notes on notes" } });

        
        
        
        
        expect(firstNameInput).toBeInTheDocument('TJ')
        expect(lastNameInput).toBeInTheDocument('Janus')
        expect(emailInput).toBeInTheDocument('TJ@TJ.com')
        expect(messageInput).toBeInTheDocument('notes')
        
       
        

      await act(async() => fireEvent.click(submitButton))
      
      

    

    })
})