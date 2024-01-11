import {Link} from 'react-scroll';
import React from 'react';

function LinkName ({talk, target}){
    return (
        <div>
        <Link
            activeClass="active"
            to={target}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            <strong>{talk}</strong>
        </Link>
    </div>
    );
}

export default LinkName;