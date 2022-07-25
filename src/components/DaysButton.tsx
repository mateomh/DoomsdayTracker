import React from 'react'

interface DaysButtonProps {
  setDays: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  value: number;
  selected: boolean;
}

const DaysButton:React.FC<DaysButtonProps> = ({
 text,
 setDays,
 value,
 selected
}) => {
  return (
    <div
      className={selected ? 'DaysButton Selected' : 'DaysButton'}
      onClick={() => setDays(value)}
    >
      {text}
    </div>
  )
}

export default DaysButton