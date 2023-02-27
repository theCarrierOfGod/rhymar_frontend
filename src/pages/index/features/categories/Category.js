/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 19/02/2023 - 15:23:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../../../../Preloader';

const Category = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        fetch("https://www.api.rhymarworld.org.ng/category/index.php")
            .then((res) => res.json())
            .then((res) => {
                setCategories(res.category)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
            getCategories();
    }, []);

    return (
        <>
            {isLoading ? (
                <>
                    <Preloader />
                </>
            ) :
                (
                    (categories.length === 0)
                        ?
                        null
                        :
                        (
                            <>
                                {console.log(categories)}
                                <div className="container-fluid">
                                    <div className="card noBorder noShadow is-transparent">
                                        <div className="card-header noBorder bgNone">
                                            <h3 style={{ textTransform: 'uppercase', textIndent: '5px', fontWeight: '600' }}>
                                                All Categories
                                            </h3>
                                        </div>
                                        <div className="card-body noBorder p-0">
                                            <div className='row justify-content-center'>
                                                {categories.map((categories) => (
                                                    <>
                                                        <div key={categories.id} className='col-10 col-sm-6 col-md-4 col-lg-3 pt-3'>
                                                            <Link to={`/category/${categories.title}`} class="card text-left">
                                                                <div className='card-img-top' style={{ backgroundImage: `url(${categories.image})`, height: "200px", width: "100%", backgroundSize: 'cover', backgroundPosition: "center", backgroundRepeat: 'no-repeat' }}></div>
                                                                <div class="card-body">
                                                                    <h4 class="card-title text-center">
                                                                        <strong>
                                                                            {categories.text}
                                                                        </strong>
                                                                    </h4>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                )}
        </>
    )
}

export default Category
