//import { TypesOfPurchases } from "../types"
import { arrayOfNavigationConsts } from '../../utils/constsNavidation';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavigationItem =()=> {
    return (
        <>
        { arrayOfNavigationConsts.map(item=> (
            <NavDropdown.Item>
            {item} 
           </NavDropdown.Item>
        ))}

        </>
    )
}
export default NavigationItem