import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
// import "./css/animate.css";
// import "./css/flex-slider.css";
// import "./css/owl.css";
// import "./css/flex-slider.css";
// import './css/fontawesome.css';


const PropertiesComp = () => {
  const properties = [

    {
      type: "VH",
      typeDesc: "Villa House",
      imageSrc: "images/property-02.jpg",
      category: "Luxury Villa",
      price: "$1.180.000",
      address: "54 New Street Florida, OR 27001",
      details: [
        { label: "Bedrooms", value: "6" },
        { label: "Bathrooms", value: "5" },
        { label: "Area", value: "450m2" },
        { label: "Floor", value: "3" },
        { label: "Parking", value: "8 spots" }
      ]
    },
    {
      type: "VH",
      typeDesc: "Villa House",
      imageSrc: "images/property-03.jpg",
      category: "Luxury Villa",
      price: "$1.460.000",
      address: "26 Mid Street Portland, OR 38540",
      details: [
        { label: "Bedrooms", value: "5" },
        { label: "Bathrooms", value: "4" },
        { label: "Area", value: "225m2" },
        { label: "Floor", value: "3" },
        { label: "Parking", value: "10 spots" }
      ]
    },
    {
      type: "AP",
      typeDesc: "Apartment",
      imageSrc: "images/property-04.jpg",
      category: "Apartment",
      price: "$584.500",
      address: "12 Hope Street Portland, OR 12650",
      details: [
        { label: "Bedrooms", value: "4" },
        { label: "Bathrooms", value: "3" },
        { label: "Area", value: "125m2" },
        { label: "Floor", value: "25th" },
        { label: "Parking", value: "2 cars" }
      ]
    },
    {
      type: "P",
      typeDesc: "Penthouse",
      imageSrc: "images/property-05.jpg",
      category: "Penthouse",
      price: "$925.600",
      address: "34 Hope Street Portland, OR 42680",
      details: [
        { label: "Bedrooms", value: "4" },
        { label: "Bathrooms", value: "4" },
        { label: "Area", value: "180m2" },
        { label: "Floor", value: "38th" },
        { label: "Parking", value: "2 cars" }
      ]
    },
    {
      type: "AP",
      typeDesc: "Apartment",
      imageSrc: "images/property-06.jpg",
      category: "Modern Condo",
      price: "$450.000",
      address: "22 Hope Street Portland, OR 16540",
      details: [
        { label: "Bedrooms", value: "3" },
        { label: "Bathrooms", value: "2" },
        { label: "Area", value: "165m2" },
        { label: "Floor", value: "26th" },
        { label: "Parking", value: "3 cars" }
      ]
    },
    {
      type: "VH",
      typeDesc: "Villa House",
      imageSrc: "images/property-03.jpg",
      category: "Luxury Villa",
      price: "$980.000",
      address: "14 Mid Street Miami, OR 36450",
      details: [
        { label: "Bedrooms", value: "8" },
        { label: "Bathrooms", value: "8" },
        { label: "Area", value: "550m2" },
        { label: "Floor", value: "3" },
        { label: "Parking", value: "12 spots" }
      ]
    }
  ]
  // Add more property objects here...





  const [state, setState] = useState({
    filter: 'A',
  })
  const handleClick = useCallback((key) => {
    setState(prv => {
      return {
        ...prv,
        filter: key,
      }
    })
  }, [])
  return (

    <div className="section properties" style={{ overflowY: 'auto', flexDirection: 'column', height: '85vh' }} >

      <div className="proMaincontainer">
        <ul className="properties-filter">
          <li>
            <a onClick={() => handleClick('A')} className={state.filter === 'A' ? 'is_active' : ''} >Show All</a>
          </li>
          <li>
            <a onClick={() => handleClick('AP')} className={state.filter === 'AP' ? 'is_active' : ''}>Apartment</a>
          </li>
          <li>
            <a onClick={() => handleClick('VH')} className={state.filter === 'VH' ? 'is_active' : ''}>Villa House</a>
          </li>
          <li>
            <a onClick={() => handleClick('P')} className={state.filter === 'P' ? 'is_active' : ''}>Penthouse</a>
          </li>
        </ul>
        <div className="row properties-box">
          {properties.map((el,index) => {
            if (el.type === state.filter || state.filter === 'A')
              return (
                <div key={index} className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
                  <div className="item">
                    <a href="property-details.html"><img src={el.imageSrc} alt="" /></a>
                    <span className="category">{el.typeDesc}</span>
                    <h6>{el.price}</h6>
                    <h4><a href="property-details.html">{el.address}</a></h4>
                    <ul>
                      {el.details.map((subEl,subIndex)=> {
                        return (
                          <li key={subIndex}>{subEl.label} <span>{subEl.value}</span></li>
                        )
                      })}
                    </ul>
                    {/* <ul>
                    <li>Bedrooms: <span>8</span></li>
                    <li>Bathrooms: <span>8</span></li>
                    <li>Area: <span>545m2</span></li>
                    <li>Floor: <span>3</span></li>
                    <li>Parking: <span>6 spots</span></li>
                  </ul> */}
                    <div className="main-button">
                      <a href="propertyDetails">Schedule a visit</a>
                    </div>
                  </div>
                </div>)
          })}
          {/* <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
            <div className="item">
              <a href="property-details.html"><img src="images/property-02.jpg" alt="" /></a>
              <span className="category">Luxury Villa</span>
              <h6>$1.180.000</h6>
              <h4><a href="property-details.html">54 New Street Florida, OR 27001</a></h4>
              <ul>
                <li>Bedrooms: <span>6</span></li>
                <li>Bathrooms: <span>5</span></li>
                <li>Area: <span>450m2</span></li>
                <li>Parking: <span>8 spots</span></li>
              </ul>
              <div className="main-button">
                <a href="property-details.html">Schedule a visit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv rac">
            <div className="item">
              <a href="property-details.html"><img src="images/property-03.jpg" alt="" /></a>
              <span className="category">Luxury Villa</span>
              <h6>$1.460.000</h6>
              <h4><a href="property-details.html">26 Mid Street Portland, OR 38540</a></h4>
              <ul>
                <li>Bedrooms: <span>5</span></li>
                <li>Bathrooms: <span>4</span></li>
                <li>Area: <span>225m2</span></li>
                <li>Floor: <span>3</span></li>
                <li>Parking: <span>10 spots</span></li>
              </ul>
              <div className="main-button">
                <a href="property-details.html">Schedule a visit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
            <div className="item">
              <a href="property-details.html"><img src="images/property-04.jpg" alt="" /></a>
              <span className="category">Apartment</span>
              <h6>$584.500</h6>
              <h4><a href="property-details.html">12 Hope Street Portland, OR 12650</a></h4>
              <ul>
                <li>Bedrooms: <span>4</span></li>
                <li>Bathrooms: <span>3</span></li>
                <li>Area: <span>125m2</span></li>
                <li>Floor: <span>25th</span></li>
                <li>Parking: <span>2 cars</span></li>
              </ul>
              <div className="main-button">
                <a href="property-details.html">Schedule a visit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
            <div className="item">
              <a href="property-details.html"><img src="images/property-05.jpg" alt="" /></a>
              <span className="category">Penthouse</span>
              <h6>$925.600</h6>
              <h4><a href="property-details.html">34 Hope Street Portland, OR 42680</a></h4>
              <ul>
                <li>Bedrooms: <span>4</span></li>
                <li>Bathrooms: <span>4</span></li>
                <li>Area: <span>180m2</span></li>
                <li>Floor: <span>38th</span></li>
                <li>Parking: <span>2 cars</span></li>
              </ul>
              <div className="main-button">
                <a href="property-details.html">Schedule a visit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
            <div className="item">
              <a href="property-details.html"><img src="images/property-06.jpg" alt="" /></a>
              <span className="category">Modern Condo</span>
              <h6>$450.000</h6>
              <h4><a href="property-details.html">22 Hope Street Portland, OR 16540</a></h4>
              <ul>
                <li>Bedrooms: <span>3</span></li>
                <li>Bathrooms: <span>2</span></li>
                <li>Area: <span>165m2</span></li>
                <li>Floor: <span>26th</span></li>
                <li>Parking: <span>3 cars</span></li>
              </ul>
              <div className="main-button">
                <a href="property-details.html">Schedule a visit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
            <div className="item">
              <a href="property-details.html"><img src="images/property-03.jpg" alt="" /></a>
              <span className="category">Luxury Villa</span>
              <h6>$980.000</h6>
              <h4><a href="property-details.html">14 Mid Street Miami, OR 36450</a></h4>
              <ul>
                <li>Bedrooms: <span>8</span></li>
                <li>Bathrooms: <span>8</span></li>
                <li>Area: <span>550m2</span></li>
                <li>Floor: <span>3</span></li>
                <li>Parking: <span>12 spots</span></li>
              </ul>
              <div className="main-button">
                <a href="property-details.html">Schedule a visit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
            <div className="item">
              <a href="property-details.html"><img src="images/property-02.jpg" alt="" /></a>
              <span className="category">Luxury Villa</span>
              <h6>$1.520.000</h6>
              <h4><a href="property-details.html">26 Old Street Miami, OR 12870</a></h4>
              <ul>
                <li>Bedrooms: <span>12</span></li>
                <li>Bathrooms: <span>15</span></li>
                <li>Area: <span>380m2</span></li>
                <li>Floor: <span>3</span></li>
                <li>Parking: <span>14 spots</span></li>
              </ul>
              <div className="main-button">
                <a href="property-details.html">Schedule a visit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
            <div className="item">
              <a href="property-details.html"><img src="images/property-01.jpg" alt="" /></a>
              <span className="category">Luxury Villa</span>
              <h6>$3.145.000</h6>
              <h4><a href="property-details.html">34 New Street Miami, OR 24650</a></h4>
              <ul>
                <li>Bedrooms: <span>10</span></li>
                <li>Bathrooms: <span>12</span></li>
                <li>Area: <span>860m2</span></li>
                <li>Floor: <span>3</span></li>
                <li>Parking: <span>10 spots</span></li>
              </ul>
              <div className="main-button">
                <a href="property-details.html">Schedule a visit</a>
              </div>
            </div>
          </div>*/}
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <ul className="pagination">
              <li><a href="#1">1</a></li>
              <li><a className="is_active" href="#2">2</a></li>
              <li><a href="#3">3</a></li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PropertiesComp;
