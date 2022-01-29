import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: '',
    author:"Happy",
    image: '',
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}
test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />)
    const headline = screen.queryByTestId('headline')
    const author = screen.queryByTestId('author')
    expect(headline).toBeInTheDocument()
    expect(author).toBeInTheDocument()
});

test('renders "Associated Press" when no author is given', ()=> {
    const testArticle2 = {
        headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
        createdOn: '',
        author:'',
        image: '',
        summary: "Triple-digit temperatures led to a spike in demand across the region.",
        body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
    }
    render(<Article article={testArticle2}/>)
    const author = screen.queryByText(/Associated Press/i)
    expect(author).toBeInTheDocument()
    
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn()
    render(<Article article={testArticle} handleDelete={handleDelete}/>)
    const deleteButton = screen.queryByTestId('deleteButton')
    userEvent.click(deleteButton)
    expect(handleDelete).toBeCalled()
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.