import {useEffect, useRef, useState} from "react";
import customAxios from "../../../service/api";
import * as PropTypes from "prop-types";
import {Button, Table} from "react-bootstrap";
import AddSong from "../addSong/AddSong";

function StyledTableCell(props) {
    return null;
}
StyledTableCell.propTypes = {children: PropTypes.node};

function StyledTableRow() {
    return null;
}

StyledTableRow.propTypes = {children: PropTypes.node};
export default function Library() {
    const audioRef = useRef(null);
    const [songs, setSongs] = useState([]);


    useEffect(() => {
        let userz = localStorage.getItem("user") || null;
        let id = JSON.parse(userz)?.idUser || null
        const init = async () => {
            try {
                const res = await customAxios.get(`/users/${id}`)
                setSongs(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        id && init()
    }, [])
    console.log(songs)

    return (
        <>
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Source</th>

                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    songs?.length ? songs.map((song, index) => (
                    <tr key={song.idSong}>
                        <td>{index + 1}</td>
                        <td>{song.nameSong}</td>
                        <td>{song.nameCategory}</td>

                        <td>
                            <audio controls autoPlay>
                                <source
                                    src={song.sound}
                                    type="audio/ogg"/>
                            </audio>

                        </td>

                        <td>
                            <Button variant="outline-danger">Xóa</Button>
                            <Button variant="outline-info">Sửa</Button>
                        </td>

                    </tr>
                )) :
                    null
                }

                </tbody>
            </Table>
            <AddSong/>
        </>
    )
}