import Sidebar from "../Sidebar";
import './index.css'
import Graph from '../Graph'
import BitcoinItems from '../BitcoinItems'
const Home =()=>(
    <div className="home-container">
        <Sidebar/>
        <div>
            <h1 className="heading">Hello, <span className="spanned-heading">Aravind</span> 👋</h1>
            <p className="para">Welcome to <span className="spanned-para">Spot trading !</span></p>
            <div className="graph-bg">
                <Graph/>
            </div>
            <h1 className="heading">Assets</h1>
            <BitcoinItems/>
        </div>  
    </div>
)


export default Home
