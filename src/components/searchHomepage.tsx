import FormTextExample from "./searchHomepageInput"
import Button from 'react-bootstrap/Button';
export const SearchHomepage =()=> {
    return (
        <div
        className=""
         style={{display: "flex"}}>
        <FormTextExample />
        <Button style={{marginTop: "10px"}} variant="success">Success</Button>{' '}
        </div>
    )
}
