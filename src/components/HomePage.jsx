import React from 'react';
import { Link } from 'react-router-dom';
import baseballPic from '../baseball-pic.png'

export default function HomePage(props) {
  return (
    <div className="HomePage">
      <div>
        <h3>Current Hitters</h3>
        <Link to="/hitters" key="hitters">
          <button>
            <img src={baseballPic} width="150px" height="150px" />
          </button>
        </Link>
      </div>
      
      <div>
        <h3>Current Pitchers</h3>
        <Link to="/pitchers" key="pitchers">  
          <button>
            <img src={baseballPic} width="150px" height="150px" />
          </button>
        </Link>
      </div>
      
      <div>
        <h3>Historical Hitters</h3>
        <Link to="/historicalhitters" key="historical-hitters">
          <button>
            <img src={baseballPic} width="150px" height="150px" />
          </button>
        </Link>
      </div>
      
      <div>
        <h3>Historical Pitchers</h3>
        <Link to='historicalpitchers' key="historical-pitchers">
          <button>
            <img src={baseballPic} width="150px" height="150px" />
          </button>
        </Link>
      </div>
    </div>
  )
}