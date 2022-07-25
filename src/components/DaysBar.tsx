import React from 'react'

interface DaysBarProps {
  children: React.ReactNode;
}

const DaysBar:React.FC<DaysBarProps> = ({children}) => {
  return (
    <div className='DaysBarContainer'>{children}</div>
  )
}

export default DaysBar