import React from 'react'
import { useSelector } from 'react-redux'

const Home = (props) => {
    const bills = useSelector(state => state.bills.data)
    const user = useSelector(state => state.users.data)
    const customers = useSelector(state => state.customers.data)
    const products = useSelector(state => state.products.data)

    const recentData = (data) => {
        return (data.slice(-5).reverse())
    }
    
    return (
        Object.keys(user).length > 0 ?
            //if user logged in
            //display total no.of customers 
            (<div className='row mb-5 p-5'>
                <div className='col-md-4'>
                    <div className='card shadow rounded bg-light'>
                        <div className='card-header box'><h1 style={{ textAlign: 'center', color: '#17252A' }}>{customers.length}</h1></div>
                        <div className='card-body rounded box' style={{ backgroundColor: '#17252A', color: '#3AAFA9', textAlign: 'center' }}>
                            <div className='card-title'><h3>Total Customers</h3></div>
                        </div>
                    </div>
                </div>
                {/*display total no.of products*/}
                <div className='col-md-4'>
                    <div className='card shadow rounded bg-light'>
                        <div className='card-header box'><h1 style={{ textAlign: 'center', color: '#17252A' }}>{products.length}</h1></div>
                        <div className='card-body rounded box' style={{ backgroundColor: '#17252A', color: '#3AAFA9', textAlign: 'center' }}>
                            <div className='card-title'><h3>Total Products</h3></div>
                        </div>
                    </div>
                </div>
                {/* display total no.of bills */}
                <div className='col-md-4'>
                    <div className='card shadow rounded bg-light'>
                        <div className='card-header box'><h1 style={{ textAlign: 'center', color: '#17252A' }}>{bills.length}</h1></div>
                        <div className='card-body rounded box' style={{ backgroundColor: '#17252A', color: '#3AAFA9', textAlign: 'center' }}>
                            <div className='card-title'><h3>Total Bills</h3></div>
                        </div>
                    </div>
                </div>
                {/*display recent 5 customers */}
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='card shadow rounded bg-light'>
                            {
                                recentData(customers).map((ele, i) => {
                                    return <div className='card-header box' key={i}><h5>{i + 1}.{ele.name}</h5></div>
                                })
                            }
                            <div className='card-body rounded box' style={{ backgroundColor: '#17252A', color: '#3AAFA9', textAlign: 'center' }}>
                                <div className='card-title'><h3>Recent Customers</h3></div>
                            </div>
                        </div>
                    </div>
                {/* display recent 5 products */}
                    <div className='col-md-6'>
                        <div className='card shadow rounded bg-light'>
                            {
                                recentData(products).map((ele, i) => {
                                    return <div className='card-header box' key={i}><h5>{i + 1}.{ele.name}</h5></div>
                                })
                            }
                            <div className='card-body rounded box' style={{ backgroundColor: '#17252A', color: '#3AAFA9', textAlign: 'center' }}>
                                <div className='card-title'><h3>Recent Products</h3></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>) :
            // if user not logged in
            (<div className='m-5'>
                <h1 style={{ textAlign: 'center', color: '#3AAFA9' }}>Please Login</h1>
            </div>)
    )
}

export default Home