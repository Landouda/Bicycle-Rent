import './App.css';
import LoginScreen from './Components/login';
import BicycleList from './Components/bicycleList';
import BookingScreen from './Components/bookingScreen';

function App() {
  const userList = [
    {Email:"hachemelyes.sellami@medtech.tn", password:"testtest123", type:"admin"},
    {Email:"skanderadam.afi@medtech.tn", password:"testtest1234", type:"user"}
  ]

  const bicycleList = [
    {id:"001", available:"true", location:""},
    {id:"002", available:"true", location:""},
    {id:"003", available:"false", location:""},
    {id:"004", available:"false", location:""}
  ]
  return (
    <BookingScreen/>
  );
}

export default App;
