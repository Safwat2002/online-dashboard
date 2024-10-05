import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteIcon from '../../static/icons/delete.svg';
import DownloadIcon from '../../static/icons/download.svg';
import EditIcon from '../../static/icons/edit.svg';
import EyeIcon from '../../static/icons/eye-icon.svg';
import InfoIcon from '../../static/icons/info.svg';
import './fileTable.css';
import { fetchApi } from '../../fetchApi';

export default function FileTable(){

    const [files, setFiles] = useState([]);
    
    const getData = async()=>{
        const response = await fetchApi.get('/digi-sign/');
        setFiles(response.data);
        return response.data;
    }
    
    useEffect(()=>{
        getData().then((response) => console.log(response));
    }, []);


    return(
        <div className="file-table">
            <table>
                <thead>
                    <tr>
                        <th>Référence</th>
                        <th>Date</th>
                        <th>Nom</th>
                        <th>Secteur</th>
                        <th>Date doc</th>
                        <th>Gouvernerat</th>
                        <th>Statut</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        files.map((file)=>(
                            <tr key={file.reference}>
                                <td>{file.reference}</td>
                                <td>{file.date}</td>
                                <td>{file.nom}</td>
                                <td>{file.secteur}</td>
                                <td>{file.dateDoc}</td>
                                <td>{file.gouvernerate}</td>
                                <td><span className={file.statut + " status"}>{file.statut}</span></td>
                                <td className='actions'>
                                    <a href="#"><img src={EyeIcon} alt="Icon" /></a>
                                    <a href="#"><img src={EditIcon} alt="Icon" /></a>
                                    <a href="#"><img src={DeleteIcon} alt="Icon" /></a>
                                    <a href="#"><img src={DownloadIcon} alt="Icon" /></a>
                                    <a href="#"><img src={InfoIcon} alt="Icon" /></a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

