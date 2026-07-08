import { useState,useRef ,useEffect } from 'react';
import {Chatbot} from 'supersimpledev';
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png'
import './App.css';


function ChatInput({chatMessages,setChatMessages}){
        const [inputText,setInputText]=useState('');
        function saveInputText(event){
          setInputText(event.target.value);
        }

        function sendMessage(){
          const newChatMessages=[
            ...chatMessages,
            {
              message:inputText,
              sender:'user',
              id: crypto.randomUUID()
            }
          ];

          setChatMessages(newChatMessages);
          

          const response=Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message:response,
              sender:'robot',
              id: crypto.randomUUID()
            }
          ]);

          setInputText('');
        }

        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to ChatBot" 
              size="30"
              onChange={saveInputText} 
              value={inputText}
              className="chat-input"
            />
            <button
            onClick={sendMessage}
            className="send-button"
            >Send</button>
          </div>
        );
      }

      function ChatMessage({message,sender}){
        //const message=props.message;
        //const {message}=props; SHORTCUT
        //const sender=props.sender;
        //const {message,sender}=props;
        

        /*if(sender==='robot'){
           return (
          <div>
            <img src="robot.png" width="50"></img>
           {message}
          </div>
        );
        } */

        return (
          <div className={sender==='user'
          ?'chat-message-user'
          : 'chat-message-robot'}>

            {sender==='robot' && (
              <img src={RobotProfileImage} 
              className="chat-message-profile"></img>
            )}
            <div className="chat-message-text">
           {message}
           </div>
           {sender==='user' &&  (
              <img src={UserProfileImage} 
              className="chat-message-profile" ></img> 
            )}
          </div>
        );
      }

      function ChatMessages({chatMessages}){
      const chatMessageRef=useRef(null);

        useEffect(()=>{
          const containerElem=chatMessageRef.current;

          if(containerElem){
            containerElem.scrollTop=containerElem.scrollHeight;
          }

      },[chatMessages]);

        return (
          <div className="chat-message-container"
          ref={chatMessageRef}>

            {chatMessages.map((chatMessage)=>{
            return (
             <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
            );
           })}
          </div>
        );
      }

function App(){

        const[chatMessages,setChatMessages]=useState([{

          message:'hello chatbot',
          sender: 'user',
          id:'id1'
        },{
          message:'Hello! How can I help you',
          sender: 'robot',
          id:'id2'
        },{
          message:'can you get me todays date',
          sender: 'user',
          id:'id3'
        },{
          message:'Today is JULY 30',
          sender: 'robot',
          id:'id4'
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
