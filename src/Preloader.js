/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 20/02/2023 - 10:57:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import React from 'react'
import Pace from 'react-pace-progress'
import RingLoader from 'react-spinners/RingLoader'

const Preloader = () => {
    return (
        <>
            <span style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1000' }} >
                <Pace color="red" height={6} />
            </span>
            <div className='preloaderBody d-none'>
                <RingLoader
                color="red"
                size={120}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            </div>
        </>
    )
}

export default Preloader