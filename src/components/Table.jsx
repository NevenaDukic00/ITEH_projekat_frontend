import React from 'react'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import { useRef,useEffect } from 'react';


function Table({cartProducts}) {


  
    console.log("KORPA: " + JSON.stringify(cartProducts));
    useEffect(()=>{
      $('#example').DataTable({
      
        "info": false,
        "paging": true,
        searching: false,
        ordering:  false,
        select: false,
        data: cartProducts,
        columns: [
            { data: 'name' },
            { data: 'amount' },
            { data: 'price' },
           
        ],
    });

     
    });
   

    return (

 <div className="container">
  <div className="panel">
    <table id="example" className="display" width="100%" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Price</th>
          
        </tr>
      </thead>
    </table>
  </div>
</div>

    
    )
}

export default Table