import React from 'react';
import './Featured.scss';
import Image from "./francesco-ungaro-yWgCpmyFqdA-unsplash.jpg";
import {PlayArrow, InfoOutlined} from '@mui/icons-material'
export default function Featured({type}) {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type==="movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option >Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )
      }
      <img width="100%" src={Image} alt="" />
 <div className="info">
    <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt=""/>
    <span className='desc'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima animi perspiciatis dicta similique, ducimus obcaecati id dolore placeat. Consequatur ut pariatur nulla aspernatur hic ex explicabo inventore vero quo.
    </span>
    <div className="buttons">
        <button className="play">
            <PlayArrow/>
            <span>Play</span>
            </button>
        <button className="more">
            <InfoOutlined/>
            <span>Info</span>
        </button>
    </div>
 </div>
    </div>
  )
}
