import {useState, useEffect} from "react";

import axios from "axios";

//custom hook will return an object with four keys.
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  
const fetchFreeSpots = (state, appointments) => {
  const appIds = state.days.filter(day => day.name === state.day);
  const todayApp = appIds[0].appointments;
  const emptyApp = todayApp.filter(app => !appointments[app].interview).length;
  return emptyApp;
}

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
   
   
      const days = [
        ...state.days,
      ]
      const dayIndex = state.days.findIndex((day) => 
        day.appointments.includes(id)
      )
      const spots = fetchFreeSpots(state, appointments)
      
      const newDay = {
        ...days[dayIndex], spots
      }
      days[dayIndex] = newDay
      
         return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState(prev => ({...prev, appointments, days}));
    })
  }
  
  //makes an HTTP request and updates the local state.
  function cancelInterview(id) {
      const appointment = {
        ...state.appointments[id],
        interview: null
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };

  
  const days = [
    ...state.days,
    ]
  const dayIndex = state.days.findIndex((day) => 
    day.appointments.includes(id)
    )
  const spots = fetchFreeSpots(state, appointments)
    
  const newDay = {
    ...days[dayIndex], spots
    }
    days[dayIndex] = newDay

    //called when user deletes an interview
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState(prev => ({...prev, appointments, days}));
    })
  }
  
    const setDay = day => setState({ ...state, day });
    useEffect(() => {
      Promise.all([
        axios.get("/api/days"),
        axios.get("/api/appointments"),
        axios.get("/api/interviewers")
      ]).then((all) => {
        setState(prev => ({...prev, 
          days: all[0].data, 
          appointments: all[1].data,
          interviewers: all[2].data
        }))
        console.log(all)
      })
    }, []);
    return {
      state,
      setDay,
      bookInterview,
      cancelInterview
    };
}