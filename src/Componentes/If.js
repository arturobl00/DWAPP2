import React, {Fragment, useState} from 'react';

const Miif = () => {
    const num = 20

    const [num1, setNum1] = useState(5)

    return ( 
        <Fragment>
            <p>La variable num vale {num} entonces {
                num >= 10 ? "Es Mayor o igual a 10" : "Es menor a 10"
            }</p>

            <p>La variable num1 vale {num1} entonces {
                num1 >= 10 ? "Es Mayor o igual a 10" : "Es menor a 10"
            }</p>

        </Fragment>
     );
}
 
export default Miif;