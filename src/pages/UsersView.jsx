import React, { useEffect, useState } from 'react'
import "./statusView.css";
import Card from '../components/Card';
import axios from 'axios';

export default function UsersView() {
  const [data, setData] = useState(null);
  const [users, setUsers] = useState(null)
  const [usr1, setUsr1] = useState(null);
  const [usr2, setUsr2] = useState(null);
  const [usr3, setUsr3] = useState(null);
  const [usr4, setUsr4] = useState(null);
  const [usr5, setUsr5] = useState(null);

  let cardDetails = {
    usr1: [],
    usr2: [],
    usr3: [],
    usr4: [],
    usr5: []
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
      setUsers(data['users']);

      tickets.forEach(ele => {
        if (ele['userId'] === "usr-1") {
          cardDetails['usr1'].push(ele);
        }
        if (ele['userId'] === "usr-2") {
          cardDetails['usr2'].push(ele);
        }
        if (ele['userId'] === "usr-3") {
          cardDetails['usr3'].push(ele);
        }
        if (ele['userId'] === "usr-4") {
          cardDetails['usr4'].push(ele);
        }
        if (ele['userId'] === "usr-5") {
          cardDetails['usr5'].push(ele);
        }
      });

      setUsr1(cardDetails['usr1'])
      setUsr2(cardDetails['usr2'])
      setUsr3(cardDetails['usr3'])
      setUsr4(cardDetails['usr4'])
      setUsr5(cardDetails['usr5'])
    }
  }, [data]);

  return (
    <div>
      {
        data && usr1 ?

          <div className='sview'>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                    <div className='img-holder'>
                      <img src="https://picsum.photos/200" alt="..." />
                      <div className='active-dot' style={{backgroundColor : !users[0].available ? "grey" : "green"}}></div>
                    </div>
                  <span>{users[0].name}</span>
                  <span>{usr1.length}</span>
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
                usr1.map((ele) => {
                  return <Card details={ele} view={"users"} />
                })
              }

            </div>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                    <div className='img-holder'>
                      <img src="https://picsum.photos/200" alt="..." />
                      <div className='active-dot' style={{backgroundColor : !users[1].available ? "grey" : "green"}}></div>
                    </div>
                  <span>{users[1].name}</span>
                  <span>{usr2.length}</span>
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
                usr2.map((ele) => {
                  return <Card details={ele}  view={"users"}/>
                })
              }

            </div>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                    <div className='img-holder'>
                      <img src="https://picsum.photos/200" alt="..." />
                      <div className='active-dot' style={{backgroundColor : !users[2].available ? "grey" : "green"}}></div>
                    </div>
                  <span>{users[2].name}</span>
                  <span>{usr3.length}</span>
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
                usr3.map((ele) => {
                  return <Card details={ele}  view={"users"} />
                })
              }

            </div>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                    <div className='img-holder'>
                      <img src="https://picsum.photos/200" alt="..." />
                      <div className='active-dot' style={{backgroundColor : !users[3].available ? "grey" : "green"}}></div>
                    </div>
                  <span>{users[3].name}</span>
                  <span>{usr4.length}</span>
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
                usr4.map((ele) => {
                  return <Card details={ele}  view={"users"} />
                })
              }

            </div>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                    <div className='img-holder'>
                      <img src="https://picsum.photos/200" alt="..." />
                      <div className='active-dot' style={{backgroundColor : !users[4].available ? "grey" : "green"}}></div>
                    </div>
                  <span>{users[4].name}</span>
                  <span>{usr5.length}</span>
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
                usr5.map((ele) => {
                  return <Card details={ele}  view={"users"} />
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
