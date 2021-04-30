import React from 'react';




const SearchBox = ({searchchange}) => {
    
    return(


        <div className='pa2'>

            
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Items'
                onChange={searchchange}
            />
            {/* <h1>{SearchField}</h1> */}
        </div>
    )
}
export default SearchBox;