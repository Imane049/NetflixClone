import React from 'react'
import './list.scss'
import ListItem from "../listItem/ListItem"
import { ArrowBackIosOutlined } from '@mui/icons-material'
import { ArrowForwardIosOutlined } from '@mui/icons-material'
export default function List() {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left"/>
        <div className="container">
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right"/>
      </div>

    </div>
  )
}
