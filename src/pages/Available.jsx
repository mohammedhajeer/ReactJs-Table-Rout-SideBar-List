import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../Data/CurrentProjects'
import { Tag } from 'primereact/tag';
import { Container } from 'react-bootstrap';
import { FaSearch, FaRegBell } from "react-icons/fa";
import TopSection from '../components/TopSection/TopSection';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';

export default function Available() {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

/////////////////////////////////////////////////////////////////////

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getProductSeverity(rowData)}></Tag>;
    };

/////////////////////////////////////////////////////////////////////

    const getProductSeverity = (product) => {
        switch (product.status) {
            case 'Approved':
                return 'success';

            case 'In review':
                return 'warning';

            case 'Cancelled':
                return 'danger';

            default:
                return 'danger';
        }
    };

/////////////////////////////////////////////////////////////////////

    const brandyBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src={rowData.brandImg} className={`flag flag-eg`} style={{ width: '32px' }} />
                <span>   {rowData.brand}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src='data:image/png;base64,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' className={`flag flag-eg`} style={{ width: '17px' }} />
                <span>{rowData.dueData}</span>
            </div>
        );
    };


/////////////////////////////////////////////////////////////////////

    const typeBodyTemplate = (rowData) => {

        var data = { text: 'aaaaa', color: 'red' }

        switch (rowData.ptype) {
            case 1:
                data = {
                    text: 'New build',
                    color: '#A5F89A'
                }
                break;
            case 2:
                data = {
                    text: 'Commercial',
                    color: '#E8F89A'
                }
                break;
            case 3:
                data = {
                    text: 'Residential',
                    color: '#832DFF'
                }
                break;
            default:
                data = {
                    text: 'Reconstruction',
                    color: '#D57198'
                }
        }

        return (
            <div style={{ alignItems: 'center', backgroundColor: data.color, borderRadius: 20, justifyContent: 'center', }}>
                <h12>{data.text}</h12>
            </div>
        );
    };

/////////////////////////////////////////////////////////////////////
    const contributorsBodyTemplate = (rowData) => {
        return (
            <AvatarGroup>
                {rowData.members.map((img, idx) => (
                    <Avatar image={img} size="small" shape="circle" />
                ))}
                <Avatar label="+2" shape="circle" size="small" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </AvatarGroup>);
    };
/////////////////////////////////////////////////////////////////////


    return (
        <Container>
            <TopSection headerName='Current project' icon1=<FaSearch /> icon2=<FaRegBell /> />

            <div className="card">
                <div className="flex justify-content-center align-items-center mb-4 gap-2">
                </div>
                <DataTable value={products} selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="Pname" header="Project name"></Column>
                    <Column field="status" header="Project status" body={statusBodyTemplate} />
                    <Column field="brand" header="brand" body={brandyBodyTemplate} />
                    <Column field="members" header="contributors" body={contributorsBodyTemplate} />
                    <Column field="ptype" header="Project type" body={typeBodyTemplate}></Column>
                    <Column field="dueData" header="Due data" body={dateBodyTemplate}></Column>
                    <Column field="actions" header="actions"></Column>
                    {/* <Column field="actions" header="Status" sortable body={statusBodyTemplate} /> */}
                </DataTable>
            </div>
        </Container>
    );
}
