
export const postRegister = user => {
    return dispatch => {
      return
      
      fetch(" http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(res => res.json())
        .then(data => {
          if (data.message) {
            return('invalid details supplied')
          } else {
            localStorage.setItem("token", data.token)
            dispatch(loginUser(data.user))
          }
        })
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })



  export const getLoginUser =(data) => {
    return dispatch => {
      return fetch("http://127.0.0.1:8000/api/login",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(res =>{
          this.props.history.push('/dashboard')
        })
        .then(data => {
          if (data.message) {
            return ('Invalid username or password')
          } else {
            localStorage.setItem("token", data.token)
            dispatch(loginUser(data.user))
          }
        })
    }
  }