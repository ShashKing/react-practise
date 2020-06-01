import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import {Hello} from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import TestExcercise1 from './components/TestExcercise1';
import ListData from './components/ListData';
import StyleSheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContect';


function App() {
  return (
   <div>
     {/* <UserProvider value = "Shashank">
      <ComponentC />
     </UserProvider> */}
     {/* <Counter2 
     render={(count, incrementCount)=>
     <ClickCounter2 count = {count} incrementCount = {incrementCount}/>
     }/>
     
     <Counter2 
     render={(count, incrementCount)=>
     <HoverCounter2  count = {count} incrementCount = {incrementCount}/>
     }/> */}

     {/* <ClickCounter2></ClickCounter2>
     <HoverCounter2></HoverCounter2> */}
     {/* <User render = {(isLoggeddIn)=> isLoggeddIn ? 'Shashank' : 'Guest'} ></User> */}
     {/* <ClickCounter></ClickCounter>
     <HoverCounter></HoverCounter> */}
     {/* <ErrorBoundary>
     <Hero heroName = "Batman"></Hero>
     <Hero heroName = "Superman"></Hero>
     <Hero heroName = "Joker"></Hero>
     </ErrorBoundary> */}
     {/* <PortalDemo></PortalDemo> */}
     {/* <FRParentInput></FRParentInput> */}
     {/* <FocusInput></FocusInput> */}
     {/* <RefsDemo></RefsDemo> */}
     {/* <ParentComp></ParentComp> */}
     {/* <PureComp/> */}
     {/* <Table/> */}
     {/* <FragmentDemo/> */}
     {/* <LifeCycleA/> */}
     {/* <Form/> */}
     {/* <h1 className = 'error'>Error</h1>
     <h1 className = {styles.success}>Success</h1> */}
     {/* <Greet name= "Shashank" lang = "ROR">
       <p>This is inner  props</p>
       </Greet>
     <Greet name = "Samanta"lang = "None"/>
     <Greet name = "Neha" lang = "Python"/>
    <Welcome name = "Samanta"lang = "None"/>
    <Welcome name = "Shashank"lang = "ROR">
      <p>This is inner  props</p>
    </Welcome>
    <Welcome name = "Neha"lang = "Python"/> */}
     {/* <Hello></Hello> */}
     {/* <Message /> */}
     {/* <Counter></Counter>
     <Welcome name = "Samanta"lang = "None"/> */}
     {/* <FunctionClick/>
     <ClassClick></ClassClick> */}
     {/* <EventBind></EventBind> */}
     {/* <ParentComponent/> */}
     {/* <UserGreeting/> */}
     {/* <TestExcercise1></TestExcercise1> */}
     {/* <ListData/> */}
     {/* <StyleSheet primary = {true}/> */}
     {/* <Inline/> */}
   </div>
  );
}

export default App;
