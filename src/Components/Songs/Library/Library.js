import {useEffect, useRef, useState} from "react";
import { useSelector } from 'react-redux';
import customAxios from "../../service/api";
import * as PropTypes from "prop-types";
import {Button, Table} from "react-bootstrap";
import AddSong from "../Songs/addSong/AddSong";




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
    const [songs, setSongs] = useState([])

    useEffect(() => {
        const init = async () => {
            try {
                const res = await customAxios.get("/songs")

                setSongs(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        init()
    }, [])

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
                    <tr>
                        <td>{index + 1}</td>
                        <td>{song.nameSong}</td>
                        <td>{song.nameCategory}</td>
                        <td>
                            <audio controls autoPlay ref={audioRef}>
                                <source
                                    src={songs.source}
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