import React, { useEffect, useState, useMemo } from 'react';
import { fetchUsers } from './services/fetchUser';
import './App.css';
import workerFunction from './app.worker.js';
import WebWorker from './WebWorker';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    const webWorker = useMemo(() => {
        return new WebWorker(workerFunction);
    }, []); // Empty dependency array ensures it's only created once

    useEffect(() => {
        fetchUsers().then(users => {
            setUsers(users);
            setIsLoading(false);
        });

        return () => {
            webWorker.terminate();
        };
    }, [webWorker]); // Include webWorker in the dependency array

    const sortAscending = () => {
        webWorker.postMessage({ users, type: "asc" });
        setIsSorting(true);
    };

    webWorker.addEventListener('message', (event) => {
        const sortedList = event.data;
        setUsers(sortedList);
        setIsSorting(false);
    });

    const handleButtonClick = () => {
        alert("Button clicked!");
    };

    const renderUsers = () => {
        return users.map((user, index) => (
            <div key={index} className="card mt-4 mb-4">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                    <h5 className="card-title">{user.email}</h5>
                    <p className="card-text">{user.joinedOn.toString()}</p>
                </div>
                <div className="card-footer text-muted">{user.commentCount} comments</div>
            </div>
        ));
    };

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1 mainHeading">WebWorker -<span className='mainHeading2' > Usage of Web Workers</span> </span>
                <span className="navbar-brand mb-0 h1 rollNum">2021-CS-38 </span>

            </nav>
            <div className="buttonContainer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="btn-group mr-2 mt-2" role="group" aria-label="Basic example">
                            <button onClick={handleButtonClick} type="button" className="btn btn-info">
                                Click Me!
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="btn-group mr-2 mt-2" role="group" aria-label="Basic example">
                            <button onClick={sortAscending} type="button" disabled={isLoading} className="btn btn-success">
                                Sort Ascending Number of Comments With WebWorker
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                {isSorting && <div className="mt-4">Sorting ...</div>}

                {isLoading && <div className="mt-4">Loading ...</div>}

                {!isLoading && <div className="col-md-12">{renderUsers()}</div>}
            </div>
        </div>
    );
};

export default App;
