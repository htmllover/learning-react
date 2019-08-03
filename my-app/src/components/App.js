import React, { Component } from 'react';
import '../index.css';
import First from './First/First'
import Second from './Second/Second'
import Counter from "./Counter/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
          <First name = {"Aminul Islam"} email = {"aislam270@gmail.com"} address = {"Road 12, House 29, Sector 10 Uttara Dhaka-1230"} profession = {"Front-End Developer"} />
          <First name = {"Junayab Abdula Faruk"} email = {"faruk@gmail.com"} address = {"Road 12, House 29, Sector 10 Uttara Dhaka-1230"} profession = {"Content Manager"} />
          <First name = {"Junayab Abdula Faruk"} email = {"faruk@gmail.com"} address = {"Road 12, House 29, Sector 10 Uttara Dhaka-1230"} profession = {"Content Manager"} />
          <First name = {"Junayab Abdula Faruk"} email = {"faruk@gmail.com"} address = {"Road 12, House 29, Sector 10 Uttara Dhaka-1230"} profession = {"Content Manager"} />
          <First name = {"Aminul Islam"} email = {"aislam270@gmail.com"} address = {"Road 12, House 29, Sector 10 Uttara Dhaka-1230"} profession = {"Front-End Developer"} />
          <First name = {"Aminul Islam"} email = {"aislam270@gmail.com"} address = {"Road 12, House 29, Sector 10 Uttara Dhaka-1230"} profession = {"Front-End Developer"} />


          <Counter />
      </div>
    );
  }
}

export default App;
