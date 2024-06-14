
import { useEffect, useState } from 'react'
import './App.css'
import UserDetail from './component/UserDetails'
import { DataService } from './services/data'
import { UserService } from './services/user'
import { User } from './model/user'
import { isAxiosError } from 'axios'

const baseUrl = import.meta.env.VITE_RANDOM_USER_API

const dataService = new DataService(baseUrl);


const userService = new UserService(dataService);


function App() {
  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    console.log('calling')
    setLoading(true);
    try {
      const randomUser: User | undefined = await userService.getUserDetails();
      setUserDetails(randomUser);
    } catch (error: unknown) {
      console.log(error)
      if (isAxiosError(error) && error.response?.status === 429) {
        setLoading(true)
      } else {
        console.log('Error fetching user details:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <UserDetail userDetails={userDetails} />
          <button onClick={fetchUser} id="get-user-button" disabled={loading}>
            Get Random User
          </button>
        </>
      )}
    </div>

  )
}

export default App
