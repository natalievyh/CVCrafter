import { useState } from "react";
import ShowForm from './forms/ShowForm.jsx'


export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleDropdownClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <div className='sidebar'>
          <Dropdown
              title='Personal Information'
              isActive={activeIndex === 0}
              onShow={() => handleDropdownClick(0)}
              ></Dropdown>
          <Dropdown
              title='Work Experience'
              isActive={activeIndex === 1}
              onShow={() => handleDropdownClick(1)}
              ></Dropdown>
          <Dropdown
              title='Education'
              isActive={activeIndex === 2}
              onShow={() => handleDropdownClick(2)}
              ></Dropdown>
          <Dropdown
              title='Skills'
              isActive={activeIndex === 3}
              onShow={() => handleDropdownClick(3)}
              ></Dropdown>
        </div>
    );
}

function Dropdown({ title, isActive, onShow }) {
  return (
    <div className='dropdown'>
      {isActive ? (
        <>
        <button onClick={onShow} className='dropArrow'>{title}</button>
        <ShowForm title={title}></ShowForm>
        </>
      ) : (
        <button onClick={onShow} className='dropArrow'>{title}</button>
      )}
    </div>
  );
}