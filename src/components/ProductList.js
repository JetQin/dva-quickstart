import React,{PropTypes} from 'react'
import {Table,Popconfirm,Button} from 'antd';

const ProductList = ({onDelete,products}) => {
    const columns = [{
        title:'Name',
        dataIndex: 'name'
    },
    {title: 'Operation',
     render:(text,record) => {
        return (
            <Popconfirm title='Delete?' onConfirm={() => onDelete(record.id)}>
                <Button>Delete</Button>
            </Popconfirm>
        );
     }
    },
    {
     title:'Edit',
     render:(text,record) => {
         return (<Button>Edit</Button>);
     },
    }
];
return (<Table dataSource={products} columns={columns}/>);
}

ProductList.protoTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

export default ProductList;