import React,{useEffect,useState} from 'react'
import Dots from '../Images/dots.png'
// import Modal from 'react-modal';
import Modal from 'react-bootstrap/Modal'
import Dropdown from "react-bootstrap/Dropdown";
import Like from '../Images/like.png'
import Heart from '../Images/heart.png'
import HeartCheckbox from 'react-heart-checkbox';
import Alert from 'react-bootstrap/Alert'
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <img src={Dots} className="d-none d-lg-block d-md-block card-dots" />
      
    </a>
  ));



export default function Profiles(props) {

const [checked ,setChecked] = useState(false)
const [index ,setIndex] = useState('')

 const [show, setShow] = useState(false);
    useEffect(() => {
    
    }, [show,props.listData])

    const clickSave = (i,index) =>{
        console.log("index",index)
        setIndex(index)
        // setLike(true)
        setChecked(true)
        // setShow(!show)
        // alert('Job Saved')
    }
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


// if(show){
// <Alert variant="success" onClose={() => setShow(false)} dismissible >
//         <p>Job Saved <span ></span></p>
//       </Alert> 

// }

// const deleteClick = () =>{
//   console.log('delete')
// }



const deleteClick = (i)  => {
 const temp =[...props.listData]
 temp.splice(index,1)
  props.setListData(temp)
  setIndex(i)

}







    return (
        <div >






<div className='row '>
<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ml-lg-4  mb-2" >
           {props.listData.length > 0 ? props.listData.map((items,index) => (
               
            

      <div className="card mb-2" >
        <div className="card-body">
         <div className="d-lg-none d-md-none heartCheckBox">
             <input id={items.user_id} type="checkbox" onClick={clickSave} className="checkBox cbx" title='Save Job' data-tip="This is the text of the tooltip"  name={items.title} value={items.id} />
                
                <label for={items.user_id} >
                  
                   <span className="heart" >
                     <span className="ripple"></span>
                         <svg className="unchecked" viewBox="0 0 24 24">
                    <path
                        d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z">
                    </path>
                </svg>

         <svg className="checked" viewBox="0 0 24 24">
                  
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                    </path>
                </svg>
            </span>

          
</label>
<div>

   <i className="fas fa-ban" onClick={() => {deleteClick(index)}}></i>
  </div>
{/* Web View Select */}
     </div>
      <Dropdown className=''>
        <Dropdown.Toggle as={CustomToggle}  />
        <Dropdown.Menu size="sm" title="">
         
          <Dropdown.Item onClick={clickSave}><i class="far fa-heart"></i> Save</Dropdown.Item>
          <Dropdown.Item  onClick={() => {deleteClick(index)}}><i className="fas fa-ban"></i> Not Intrested</Dropdown.Item>
          {/* <Dropdown.Item>hnjm</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
 
           <h5 className="card-title">{items.title}</h5>
    <p className="card-text">{items.body.slice(0, 200)}
    
    </p>
  </div>
  <div className="card-footer">
     <p>Updated at :  {items.updated_at}</p> 
      </div>
</div>   )): 'No match found' }
 </div>

           <div className="col-lg-5 d-lg-block d-none">

               <div className='card'>
                <div className="card-body">
                <h5>Regarding This Task details</h5>

                <div className='card-text'>
                    <ul>
                        <li>Need to search job title as Heading in card</li>
                        <li>In City Input feild search id number</li>
                        <li>Added Header and all functinality like symbol and not intrested symbol functinality</li>
                    </ul>

                </div>
                </div>

               </div>

           </div>
           </div>
</div>
    )
}
