import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };

  return (
    <div className='m-2 md:m-8 p-2 md:p-4 bg-white rounded-3xl'>
    <Header title='Customers' category="Page" />
    <GridComponent 
     dataSource={customersData}
     allowPaging
     allowSorting
     pageSettings={{ pageCount: 5 }}
     toolbar={['Delete']}
     selectionSettings={selectionsettings}
     editSettings={{allowDeleting:true, allowEditing:true }}
     width="auto"
    >
      <ColumnsDirective>
      {customersGrid.map((item,index)=>
      <ColumnDirective key={index} {...item}/>
      )}
      </ColumnsDirective>
      <Inject 
      services={[ Page, Toolbar, Selection, Edit, Sort, Filter]}
       />
    </GridComponent>
  </div>
  )
}

export default Customers