import React from 'react'
import { useSelector } from 'react-redux'

const User = (props) => {

    const user = useSelector((state) => {
        return state.users
    })

    return (
        // if user logged in
        Object.keys(user.data).length > 0 ? <div>
            <h1>Welcome {user.data.username}</h1>
            <h3>Email - {user.data.email}</h3>
            <h3>Address - {user.data.address}</h3>
            <h3>Business Name - {user.data.businessName}</h3>

        </div> : <div>
            {/* else log in  */}
            <h1>
                Please Login
            </h1>
        </div>


    )
}

export default User