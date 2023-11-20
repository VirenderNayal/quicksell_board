import React, { useState } from 'react'
import "./navbar.css";

export default function Navbar({ setPage, page }) {
    const [showOptions, setShowOptions] = useState(false);
    
    const onOptionChange = (e) => {
        setPage(e.target.value);
        setShowOptions(false);
    }

    const groupOptions = [
        "status",
        "users",
        "priority",
    ];

    return (
        <div className='navbar' >
            <div className="dropdown">
                <button className="dropdown-btn" onClick={() => setShowOptions(!showOptions)}>
                    <span className="material-symbols-rounded">
                        tune
                    </span>
                    <div>Display</div>
                    <span className="material-symbols-rounded">
                        expand_more
                    </span>
                </button>
                {showOptions && <div autoFocus className="dropdown-content" onBlur={() => setShowOptions(!showOptions)} >

                    <div className='options'>
                        <label for="grouping">Grouping</label>
                        <select onChange={onOptionChange} value={page}>
                            {groupOptions.map((option, index) => {
                                return (
                                    <option key={index}>
                                        {option}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className='options'>
                        <label for="ordering">Ordering</label>
                        <select id="orderingSelect" >
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}
