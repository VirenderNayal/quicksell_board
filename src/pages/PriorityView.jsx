import React, { useEffect, useState } from 'react'
import "./statusView.css";
import Card from '../components/Card';
import axios from 'axios';
import { highpriorityIcon, highproorityIcon, lowpriorityIcon, mediumpriorityIcon, nopriorityIcon, urgentIcon } from '../utils';

export default function PriorityView() {
    const [data, setData] = useState(null);
    const [no, setNo] = useState(null);
    const [low, setLow] = useState(null);
    const [medium, setMedium] = useState(null);
    const [high, setHigh] = useState(null);
    const [urgent, setUrgent] = useState(null);
    let cardDetails = {
        no: [],
        low: [],
        medium: [],
        high: [],
        urgent: []
    };

    const apicall = async () => {
        await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }

    useEffect(() => {
        apicall();
    }, []);

    useEffect(() => {
        if (data) {
            let tickets = data['tickets'];

            tickets.forEach(ele => {
                if (ele['priority'] === 0) {
                    cardDetails['no'].push(ele);
                }
                if (ele['priority'] === 1) {
                    cardDetails['low'].push(ele);
                }
                if (ele['priority'] === 2) {
                    cardDetails['medium'].push(ele);
                }
                if (ele['priority'] === 3) {
                    cardDetails['high'].push(ele);
                }
                if (ele['priority'] === 4) {
                    cardDetails['urgent'].push(ele);
                }
            });

            setNo(cardDetails['no']);
            setLow(cardDetails['low']);
            setMedium(cardDetails['medium']);
            setHigh(cardDetails['high']);
            setUrgent(cardDetails['urgent']);
        }
    }, [data]);

    return (
        <div>
            {
                data && no ?

                    <div className='sview'>

                        <div className='card-holder'>
                            <div className='viewTop'>
                                <div>
                                    {nopriorityIcon}
                                    <span>No Priority</span>
                                    <span>{no.length}</span>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">
                                        add
                                    </span>
                                    <span className="material-symbols-rounded">
                                        more_horiz
                                    </span>
                                </div>
                            </div>
                            {
                                no.map((ele) => {
                                    return <Card details={ele} view={"priority"}/>
                                })
                            }

                        </div>

                        <div className='card-holder'>
                            <div className='viewTop'>
                                <div>
                                    {urgentIcon}
                                    <span>Urgent</span>
                                    <span>{urgent.length}</span>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">
                                        add
                                    </span>
                                    <span className="material-symbols-rounded">
                                        more_horiz
                                    </span>
                                </div>
                            </div>
                            {
                                urgent.map((ele) => {
                                    return <Card details={ele} view={"priority"}/>
                                })
                            }

                        </div>

                        <div className='card-holder'>
                            <div className='viewTop'>
                                <div>
                                    {highpriorityIcon}
                                    <span>High</span>
                                    <span>{high.length}</span>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">
                                        add
                                    </span>
                                    <span className="material-symbols-rounded">
                                        more_horiz
                                    </span>
                                </div>
                            </div>
                            {
                                high.map((ele) => {
                                    return <Card details={ele} view={"priority"}/>
                                })
                            }

                        </div>

                        <div className='card-holder'>
                            <div className='viewTop'>
                                <div>
                                    {mediumpriorityIcon}
                                    <span>Medium</span>
                                    <span>{medium.length}</span>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">
                                        add
                                    </span>
                                    <span className="material-symbols-rounded">
                                        more_horiz
                                    </span>
                                </div>
                            </div>
                            {
                                medium.map((ele) => {
                                    return <Card details={ele} view={"priority"}/>
                                })
                            }

                        </div>

                        <div className='card-holder'>
                            <div className='viewTop'>
                                <div>
                                    {lowpriorityIcon}
                                    <span>Low</span>
                                    <span>{low.length}</span>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">
                                        add
                                    </span>
                                    <span className="material-symbols-rounded">
                                        more_horiz
                                    </span>
                                </div>
                            </div>
                            {
                                low.map((ele) => {
                                    return <Card details={ele} view={"priority"}/>
                                })
                            }

                        </div>

                    </div>

                    :

                    <div className='loader'>
                        <div></div>
                    </div>
            }
        </div>
    );

}