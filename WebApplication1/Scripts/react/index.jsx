import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import CustomerList from './Components/Customer/CustomerList.jsx';
 
const app = document.getElementById('main');
ReactDOM.render(<CustomerList />, app);