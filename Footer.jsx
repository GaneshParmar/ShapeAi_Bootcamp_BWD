import { render } from '@testing-library/react';
import React  from 'react';

// var curr_year= new Date().getFullYear; 
var cur_year=new Date().getFullYear();
function Footer() {
    render()
        return(
            <footer>
                <p>Copyright @ {cur_year}</p>
            </footer>
        );
    
}

export default Footer;
