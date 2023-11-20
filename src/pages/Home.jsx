import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import StatusView from './StatusView';
import UsersView from './UsersView';
import PriorityView from './PriorityView';

export default function Home() {
    const [page, setPage] = useState("status");
    const [currPage, setCurrPage] = useState(<StatusView />)
    
    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE');
        if (data !== null) setPage(JSON.parse(data))
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(page));
        
        if (page === 'status') {
            setCurrPage(<StatusView />);
        }

        if (page === 'users') {
            setCurrPage(<UsersView />)
        }

        if (page === 'priority') {
            setCurrPage(<PriorityView />)
        }
    }, [page])

    return (
        <div>
            <Navbar setPage={setPage} page={page} />

            {currPage}
        </div>
    )
}
