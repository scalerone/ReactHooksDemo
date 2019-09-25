import React, { useReducer } from 'react';
import ShowArea from './ShowArea';
import Buttons from './Button';
import { Color } from './Color';


function Example6(){
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Example6