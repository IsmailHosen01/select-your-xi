import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json()
}
const playersPromise = fetchPlayers()



function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(60000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(ply => ply.player_name !== p.player_name)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance + parseInt(p.price))
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='m-2.5 p-2.5 max-w-[1200px] mx-auto flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>{toggle ? 'Available Players' : `Selected Player (${purchasedPlayers.length}/6)`}</h2>
        <div>
          <button onClick={() => setToggle(true)} className={`py-2 px-5 border-1 border-gray-400 rounded-l-xl border-r-0 ${toggle === true ? 'bg-[#E7FE29] text-black' : 'bg-none'}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-2 px-5 border-1 border-gray-400 rounded-r-xl border-l-0 ${toggle === false ? 'bg-[#E7FE29] text-black' : 'bg-none'}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true ?
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
          </Suspense> :
          <SelectedPlayers setToggle={setToggle} removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }

      <ToastContainer/>
    </>
  )
}

export default App
