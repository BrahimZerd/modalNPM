# Modal window

Hey, I just built my first package and there is the way to use my modal from npm.

## https://www.npmjs.com/package/modal-weather




## Installation

Install my-project with npm

```bash
 npm i modal-weather

 use the link to import the modal in your component :

 import Modal from 'modal-weather/dist/components/modal'

 there is 4 params inside the modal to use:


 use the component in that way : 
    exemple:

   <Modal
    text='Thank you',
    />

```
    
## Props Reference

#### How to use the props and the event associated



| Props | Event                |
| :-------- |  :------------------------- |
| className |display the classname you want, i give a css file with the classname to have a first basic modal |
| style | inline style if you to use it in the component |
| text | 'use string to put the message you want to display in the modal' |
| close |{the function you want to put in the modal, generally i use useState to display it} |




## Documentation

The css can be import through the css file inside the package.

And the modal can be display in that way.

for an exemple : just change the Form component by a button event with openModal onclick action:





```javascript
import 'modal-weather/dist/components/styles/modal.css'
import React from 'react';
import '../App.css';
import Modal from 'modal-weather/dist/components/modal'
import { useState } from 'react';


const ModalPage =()=> {
  const [modalOpen, SetModal] = useState(false)

  const closeModal = () => {
      SetModal(false)
      
    }
  
  
  const openModal =(e)=> {
    e.preventDefault()
    SetModal(true)
    setTimeout(() => {
    document.getElementById('modal').classList.add('modal-open')
    document.getElementById('modalOverlay').style.display ="block"},)
}

  
  return (
    modalOpen ? 
      <div id="App">
        <Modal
          className={'modal'}
          style={{opacity: '100',color: "black"}}
          text={"Employee Successfully Created !"}
         close={closeModal}/>
        <button onClick={openModal}>Open</button>
      </div> 
    : 
    <div>
    <div id="App" style={{display: 'none'}} >  
      <Modal
        className={'modal'}
        style={{opacity: '100',}}
        text={"Employee Successfully Created !"}
        close={closeModal}/>
    </div> 
    <div>       
    <button onClick={openModal}>Open</button>
  </div> 
  </div>
      
  );
}

export default ModalPage;
```

there is a basic style for the modal centered and background opacity.



## 🔗 Links
[![](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/BrahimZerd/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brahim-zerd-ba9485aa//)


Thank You, if you want to give me some comments im open to it. Glad to share my first work on npm! 
