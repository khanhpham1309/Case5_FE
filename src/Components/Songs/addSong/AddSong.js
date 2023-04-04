
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Field, Form, Formik} from "formik";
import customAxios from "../../../service/api";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";


export default function AddSong() {
    const dispatch =useDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const user = useSelector(state => {
        return state.user.user;
    })



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        const res =  customAxios.post('songs', {

        });
        return res.data
    }, [])




    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                ADD SONG
            </Button>
                    <Formik initialValues={{
                        nameSong: '',
                        singer: '',
                        author: '',
                        idAlbum: '',
                        sound: '',
                        idCategory: '',
                        count: '',
                        user: ''
                    }} onSubmit={(values) => {
                        // values.sound = urls[0];
                        // values.image = urls[1];
                        // handleAdd(values)

                    }}>
                        <form>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Subscribe</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Input name song"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    // onChange={handleChangeNameSong}
                                />
                            </DialogContent>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Input category"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    // onChange={handleChangeCategory}
                                />
                            </DialogContent><DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Input image"
                                type="file"
                                fullWidth
                                variant="standard"
                                // onChange={handleChangeNameImage}
                            />
                        </DialogContent><DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Input sound song"
                                type="text"
                                fullWidth
                                variant="standard"
                                // onChange={handleChangeSound}
                            />
                        </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Subscribe</Button>
                            </DialogActions>
                        </Dialog>
                        </form>
                    </Formik>
        </div>
    )
}