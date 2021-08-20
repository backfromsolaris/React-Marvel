
import { DataGrid, GridColDef, GridRowModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    DialogActions,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core';
import { HeroForm } from '../../components/HeroForm';
import { useState } from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'hero_name', headerName: 'Hero name', width: 160 },
    { field: 'description', headerName: 'Description', width: 280 },
    { field: 'comics_appeared_in', headerName: '# of Comics Appeared In', width: 235 },
    { field: 'super_power', headerName: 'Super Power', width: 280 }
];

interface gridData{
    id?:string
};
  


export const DataTable = () =>{
    let {heroData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({id:''});

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
        getData()
    };

    let handleCheckbox = (id:GridRowModel) =>{
        if(id[0] === undefined){
            setData({id:''})
        }else{
            setData({id:id[0].toString()})
        }
    }

    let deleteData = () =>{
        server_calls.delete(gridData.id!)
        getData()
    }

    return (
        <div style={{height: 475, width: '100%'}}>
            <h2 style={{color: 'white'}}>Current Heroes</h2>
            <DataGrid style={{color: 'white'}}rows={heroData} columns={columns} pageSize={5} 
            checkboxSelection  onSelectionModelChange = {handleCheckbox}/>
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle>Update Hero</DialogTitle>
                <DialogContent>
                    <HeroForm id ={gridData.id!} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}