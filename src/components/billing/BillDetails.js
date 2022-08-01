import React from 'react'
import { useSelector } from 'react-redux'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'


const BillDetails = (props) => {
    const {_id} = props.match.params
    //console.log('props',props)
    const state = useSelector(state => state)
    const bills=state.bills.data 
    const bill=(bills.length > 0 && bills.find(ele => ele._id === _id))
    //console.log('bill',bill)
    const customers = state.customers.data
    const customer = (customers.length > 0 && customers.find(ele => ele._id === bill.customer))
    const products=state.products.data

    const downloadPdf = () => {
        html2canvas(document.getElementById('pdfcontent')).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("portrait", "mm", "a4")
            pdf.addImage(imgData, "JPEG", 0, 0)
            pdf.save("download.pdf")
        })
    }
    return (
        <div>
            <div id='pdfcontent'>
                <h4 className='p-3' style={{display:'inline',float:'right'}}>Date:{bill && bill.date.slice(0,10)}</h4>
                <h4>Customer Name : {customer && customer.name}</h4>
                
                {bill && <table style={{width:'80%'}} className='table table-striped shadow border rounded'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 && bill.lineItems.map((ele,i) => {
                                return <tr key={i}>
                                    <td>{(products.find(ele1 => ele1._id === ele.product)) && (products.find(ele1 => ele1._id === ele.product).name)}</td>
                                    <td>{ele.price}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{ele.subTotal}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>}
            </div>
            <div className="m-3">
                <h2>Final Total : {bill && bill.total}</h2>
            </div>

            <button className='btn btn-primary m-2' onClick={downloadPdf}>Download PDF</button>
        </div>
    )
}

export default BillDetails

