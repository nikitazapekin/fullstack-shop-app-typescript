
import Form from 'react-bootstrap/Form';
import "./searchHomepageInput.scss"
import React from 'react'; 
function FormTextExample() {
    const handle = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            console.log("yes");
        }
    }
    return (
        <>
            <Form.Control
                placeholder="search something"
                className="searchInput"
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onKeyPress={handle} 
            />
        </>
    );
}

export default FormTextExample;
