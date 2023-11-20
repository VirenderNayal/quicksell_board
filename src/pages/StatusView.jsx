import React, { useEffect, useState } from 'react'
import "./statusView.css";
import Card from '../components/Card';
import axios from 'axios';
import { backlogIcon, canceledIcon, doneIcon, inporgressIcon, todoIcon } from '../utils';

export default function StatusView() {
  const [data, setData] = useState(null);
  const [todo, setTodo] = useState(null);
  const [inprogress, setInprogres] = useState(null);
  const [done, setDone] = useState(null);
  const [cancled, setCancled] = useState(null);
  const [backlog, setBacklog] = useState(null);
  let cardDetails = {
    todo: [],
    inprogress: [],
    done: [],
    canceled: [],
    backlog: []
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
      let users = data['users']

      tickets.forEach(ele => {
        if (ele['status'] === "Todo") {
          cardDetails['todo'].push(ele);
        }
        if (ele['status'] === "In progress") {
          cardDetails['inprogress'].push(ele);
        }
        if (ele['status'] === "Backlog") {
          cardDetails['backlog'].push(ele);
        }
        if (ele['status'] === "Done") {
          cardDetails['done'].push(ele);
        }
        if (ele['status'] === "Canceled") {
          cardDetails['canceled'].push(ele);
        }
      });

      setTodo(cardDetails['todo']);
      setInprogres(cardDetails['inprogress']);
      setBacklog(cardDetails['backlog']);
      setDone(cardDetails['done']);
      setCancled(cardDetails['canceled']);
    }
  }, [data]);

  return (
    <div>
      {
        data && todo ?

          <div className='sview'>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                  { backlogIcon }
                  <span>Backlog</span>
                  <span>{backlog.length}</span>
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
                backlog.map((ele) => {
                  return <Card details={ele} view={"status"}/>
                })
              }

            </div>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                  { todoIcon }
                  <span>Todo</span>
                  <span>{todo.length}</span>
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
                todo.map((ele) => {
                  return <Card details={ele} view={"status"}/>
                })
              }

            </div>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                  {inporgressIcon}
                  <span>In Progress</span>
                  <span>{inprogress.length}</span>
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
                inprogress.map((ele) => {
                  return <Card details={ele} view={"status"}/>
                })
              }

            </div>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                  {doneIcon}
                  <span>Done</span>
                  <span>{done.length}</span>
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
                done.map((ele) => {
                  return <Card details={ele} view={"status"}/>
                })
              }

            </div>

            <div className='card-holder'>
              <div className='viewTop'>
                <div>
                  {canceledIcon}
                  <span>Canceled</span>
                  <span>{cancled.length}</span>
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
                cancled.map((ele) => {
                  return <Card details={ele} view={"status"}/>
                })
              }
            {
              console.log(todo)
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
