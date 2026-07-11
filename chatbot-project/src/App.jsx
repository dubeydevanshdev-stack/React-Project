import { useState } from 'react';
import { ChatInput } from './components/Chatinput';
import ChatMessages from './components/ChatMessages';
import './App.css';

      

function App(){

        const[chatMessages,setChatMessages]=useState([{

          message:'',
          sender: '',
          id:''
        }]);
        //const [chatMessages,setChatMessages]=array;
        //const chatMessages= array[0];
        //const setChatMessages= array[1];
        // VERY IMPORTANT STEP

        return (
        	<div className="App-container">
            
            <ChatMessages 
            chatMessages={chatMessages}
            />
            <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            />
          </div>
          );
      }

export default App
