import React, { useState } from 'react'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import { useRef,useEffect } from 'react';
import '../css/table.css';

function MyBooks({myBooks}) {

   
    console.log("KORPA: " + JSON.stringify(myBooks));
    
    useEffect(()=>{
      $('#example').DataTable({
      
        "info": false,
        "paging": true,
        searching: false,
        ordering:  false,
        select: false,
        data: myBooks,
        bDestroy: true,
        columns: [
            { data: 'book.name' },
            { data: 'amount' },
            { data: 'book.price' },
            { data: 'date' },
           
        ],
    });

     
    });
    return (
<div className='table'>
 <div className="container">
  <div className="panel">
    <table id="example" className="display" width="100%" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Order date</th>
        </tr>
      </thead>
    </table>
  </div>
</div>
</div>

    
    )
}


export default MyBooks