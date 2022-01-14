import React from 'react'
import Award from '../../components/Awards'
import { H1 } from '../../UI/Typography'
import { PrimaryBtn } from '../../UI/Btn'
import { logoImgThree } from '../../data/constant'

const TopBlock = ({ title, desc, path }) => {
  return (
    <div className="top-block e-service">
      <div className="left">
        <H1 className={'text-uppercase'}>{title}</H1>
        <p>{desc}</p>
        <PrimaryBtn>{path}</PrimaryBtn>
      </div>
      <div className="right">
        <Award logoitem={logoImgThree}></Award>
      </div>
    </div>
  )
}

export default TopBlock
