import React, { Component } from 'react';
import { useState } from 'react';


const Index = () => {
    // setting the state hooks
    const [name, setName] = useState("Arya Stark");
    return (
      <div>
        <p>hello my name is {name}</p>
      </div>
    );
   };


export default Index;