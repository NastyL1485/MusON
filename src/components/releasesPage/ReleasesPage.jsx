import './releases.css'
// import Header from './../header/Header'
// import { useNavigate } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react'

function ReleasesList() {
    const [releases, setReleases] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchReleases() {
            try {
                const response = await fetch('http://127.0.0.1:8000/get_releases');
                if (!response.ok) {
                    throw new Error('Failed to fetch releases');
                }
                const data = await response.json();
                setReleases(data.releases);
            } catch (error) {
                console.error('Error fetching releases:', error);
            }
        }

        fetchReleases();
    }, []);
    
    const handleReleaseClick = (releaseId) => {
        navigate(`/release/${releaseId}`);
    };

    return (
        <div className='content'>
            {releases.map((release, index) => (
                <div key={index} className='release'>
                    <button onClick={() => handleReleaseClick(release.release_id)} className='releaseButton'>
                    <p className='releasesTitle'>{release.title}</p>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ReleasesList;