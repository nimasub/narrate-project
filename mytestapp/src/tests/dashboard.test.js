import React from 'react';
import ReactDOM from 'react-dom';
import { screen, render } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './../components/Login.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useAuth } from '../contexts/AuthContext';
import { getDatabase, ref, set, child, get } from "firebase/database";


it('renders login without crashing', async () => {
    render(<div><Router><Login/></Router></div>);
})