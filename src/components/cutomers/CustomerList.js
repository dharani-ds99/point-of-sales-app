import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import CustomerItem from './CustomerItem'

const CustomersList = () => {
    const customers= useSelector(state => state.customers)
    //console.log('cust list',customers)

    const [search,setSearch] = useState('')
    const [orderBy,setOrderBy] = useState('')

    const handleSearch = (e) => {
        const inputValue=e.target.value
        setSearch(inputValue.toLowerCase())
    }

    const handleOrder = (e) => {
        setOrderBy(e.target.value)
    }

    const orderedData = (orderBy) => {
        switch(orderBy){
            case 'A-Z':return [...[].concat(customers.data).sort((a,b) => a.name.localeCompare(b.name))]
            case 'Z-A':return [...[].concat(customers.data).sort((a,b) => b.name.localeCompare(a.name))]
            case 'Reverse': return [...[].concat(customers.data).reverse()]
            default: return [...customers.data]
        }
    }



    return (
        <div className='container'>
            <h1 className='border p-3 m-4 rounded' style={{ backgroundColor: '#17252A', color: '#3AAFA9',textAlign:'center'}}>Listing Customers - {customers.data.length}</h1>
            <input  type="text" placeholder='search here' value={search} onChange={handleSearch} style={{margin:25, height: 35,padding: 10,borderRadius: '50px'}}/>
            <select className='col-mr-4' value={orderBy} onChange={handleOrder} style={{ height:35,width:150,margin: 25 , padding: 5,borderRadius: '50px'}}>
                <option value="">Order By</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Reverse">Reverse</option>
            </select>

            
            {
                orderedData(orderBy).filter((ele) => ele.name.includes(search)).map((customer,i) => {
                    return <CustomerItem key={i} customer={customer} />
                })
            }
        </div>
    )
}

export default CustomersList 