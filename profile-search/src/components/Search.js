import React, {useState ,useEffect} from 'react'
// import { Form, Button, div, div } from 'react-bootstrap';
import '../App.css'
import Profiles from './Profiles'
import SearchIcon from '../Images/searchicon.png'
import Location from "../Images/location-icon.png"
import axios from 'axios'
import * as actions from '../actions/index';
import Modal from 'react-modal';
import Filter from '../components/Filter'
import Close from '../Images/close.png'
// import * as Const from '../../Constants/APP_Constants'

const API = 'https://gorest.co.in/public-api/posts'

export default function Search() {


  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

let [listData ,setListData] = useState('')
const [pagination ,setPagination] = useState('')
const [company ,setCompany] = useState('') 
const [location ,setLocation] = useState('') 
const [searchicon ,setSearchIcon] = useState(true)
const [loactonicon ,setLocationIcon] = useState(true)
const [clearOnSearch ,setClearOnSearch] = useState(false)

// const [modalOpen ,setModalOpen] = useState(false)
const [searchClear ,setSearchClear] = useState(false)
console.log(listData)



const [modalIsOpen,setIsOpen] = React.useState(false);

// modal open
function openModal() {
  setIsOpen(true);
}


function closeModal(){
  setIsOpen(false);
}



useEffect(() => {
  ///Lodaing
    profilSearch()

}, [])




// get data from the api
const profilSearch = () => {
axios({
    "method": "GET",
    "url": "https://gorest.co.in/public-api/posts",
   
  })
  .then((response) => {
    setListData(response.data.data)
    setPagination(response.data.meta)
    console.log('data',pagination)
  })
  .catch((error) => {
    console.log(error)
  })
}


// Search functionality with normal function 
function searchClick (ev) {
    ev.preventDefault();
    listData = listData.filter(item => {
        if(item.title == company || item.id == location){
            console.log("data",item.title)
            return item
        }
      
    })
    setListData(listData)
  }


function modalSearchClick(ev){

  ev.preventDefault();
    listData = listData.filter(item => {
        if(item.title == company || item.id == location){
            console.log("data",item.title)
            return item
        }
      
    })
    setListData(listData)
  closeModal()
  console.log('datatatlogin')
}

// Clear Functionality
  const clearAll = (ev) => {
    ev.preventDefault()
    profilSearch()
   console.log("dat==",);
    setCompany('')
setClearOnSearch(false)
    console.log('data');

    
  }

const clearLocation =(ev) =>{
  ev.preventDefault()
  profilSearch()
  setLocation('')
}

// Input Icon Changes Functions
  const handleFoucs = () => {
    setLocationIcon(false)
    setClearOnSearch(true)
      // setSearchClear(false)
  }
 const handleInputBlur = () => {
    setLocationIcon(true)
    setClearOnSearch(true)
      // setSearchClear(false)
  };
  const handleInputBlurSearch = () => {  
    setSearchIcon(true)
    setSearchClear(false)
    setClearOnSearch(true)
  }
    
  const handleFoucsSearch = () => {
    setSearchIcon(false)
    setSearchClear(false)
    setClearOnSearch(true)
  }


  return (
        <div>
{/* small screen search */}
<Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <button className='btn btn-outline-primary cancel-btn' onClick={closeModal}>cancel</button>
    
  <form className="form form-inline-sm form-inline-xs mt-5" onSubmit={modalSearchClick}>
      <div className="row">
<div className = "col-lg-12 col-md-12 col-sm-12 mt-2 mb-2 pl-0 search-bar">
    <div className=" ">
    <h3 style={{textAlign:'left'}}>What</h3>
  
    </div>
<input 
autoFocus
className="form-control w-full mr-sm-2 " type="search" placeholder="Job title, keywords, or company" aria-label="Search"
onFocus ={handleFoucsSearch}
onBlur={handleInputBlurSearch}
value={company}
onChange = {(e) => {setCompany(e.target.value)}}
/> 

{searchicon == true ?
<img src={SearchIcon} 
// onClick={searchClick}
// style={{ }}
className="searchIconInner"/> : ''}

{clearOnSearch == true ?
<img className="clearInnerSearch" src={Close} 
onClick={clearAll}
/> : ''}
</div>
<div className = "col-lg-12 col-md-12 col-sm-12   mt-2 mb-2 pl-0">
    <div>
<h3  style={{textAlign:'left'}}>Where</h3>
    
    </div>
<input className="form-control mr-sm-2 w-full"
onFocus ={handleFoucs}
onBlur={handleInputBlur}
// onClick={searchModal}
value={location}
onChange={(e) => {setLocation(e.target.value)}}
 type="search" 
 placeholder="City, state, or pin code" 
 aria-label="Search" />

{loactonicon ==  true ?<img src={Location} className="location" /> : ''}
{clearOnSearch == true ?<img className="clearInnerSearch" src={Close} onClick={clearLocation}/> : ''}

</div>
    
   <div className="col-lg-12 col-md-12 col-sm-12 mb-2    serach-btn " >
    <button className="btn btn-primary  inner-Search my-sm-0  w-100 " type="submit">Search</button>
    </div>
    </div>
  </form>
          
        </Modal>



        {/* Search Feilds */}
        <div className="container search-form">
      
  <form className="form form-inline-sm form-inline-xs" onSubmit={searchClick}>
      <div className="row">
<div className = "col-lg-4 col-md-7 col-sm-7 mt-2 mb-2 pl-0 search-bar mb-xs-5 mb-sm-5" >
    <div className="d-none d-lg-block  ">
    <h3>What</h3>
    <small>Job title, keywords, or company</small>
    </div>
<input className="form-control mr-sm-2 d-none d-lg-block" type="search" placeholder="Job title, keywords, or company" aria-label="Search"
onFocus ={handleFoucsSearch}
onBlur={handleInputBlurSearch}
value={company}
onChange = {(e) => {setCompany(e.target.value)}}
/> 

<input className="form-control mr-sm-2  d-lg-none d-xs-block search  mb-sm-2 mb-xs-2" type="search" placeholder="Job title, keywords, or company" aria-label="Search"
onFocus ={handleFoucsSearch}
onBlur={handleInputBlurSearch}
value={company}
// onChange = {searchChange}
onClick={openModal}

/> 

{searchicon == true ?
<img src={SearchIcon} 

// style={{ }}
className="searchIcon innerSearch"/> 

: ''}

{ clearOnSearch == true ?<img className="clearSearch" onClick={clearAll} src={Close} /> :'' }



</div>
<div className = "col-lg-4 col-md-7 col-sm-7  d-none d-lg-block  mt-2 mb-2 pl-0">
    <div>
<h3>Where</h3>
    <small>City, state, or pin code</small>
    </div>
<input className="form-control mr-sm-2 "
onFocus ={handleFoucs}
onBlur={handleInputBlur}
// onClick={searchModal}
value={location}
onChange={(e) => {setLocation(e.target.value)}}
 type="search" 
 placeholder="City, state, or pin code" 
 aria-label="Search" />

{loactonicon ==  true ?<img src={Location} className="location" /> : ''}

<img className="clearSearch" src={Close} 
onClick={clearLocation}

/>

</div>
    
   <div className="col-lg-4 col-md-7  mb-2  d-none d-lg-block  serach-btn " >
    <button className="btn btn-primary   my-sm-0 w-25" type="submit">Search</button>
    </div>
    </div>
  </form>
  <div>
      <h6 className='primary d-none d-lg-block d-md-block text-emp' >
          <a href='#' style={{color:'blue'}}>  Employers: Post a job -
          </a>
          Your next hire is here
          </h6>
  </div>
        </div>
        {/* profiles means data below the search bar */}
        <div className="">
  <Profiles 
  pagination={pagination}
  listData={listData}
  setListData={setListData}
  />
  </div>

        </div>
    )
}
