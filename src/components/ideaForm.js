import React ,{useState,useEffect,useRef, Fragment } from 'react'

function IdeaForm(props) {
    
    const [input,setInput]=useState(props.edit?props.edit.value:'');
    const [bucketInput,setBucketInput]=useState(props.edit?props.edit.value:'');

    const inputRef=useRef(null)

    // useEffect(()=>{
    //     inputRef.current.focus()
    // })
    const handleChange=e=>{
        setInput(e.target.value);
    };
    const handleBucketChange=e=>{
        setBucketInput(e.target.value);
        console.log(1)
    };
    

const handleSubmit=e=>{
    e.preventDefault();
    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input,
        bucketTag: bucketInput
    });

    setInput('');
};
    return (
        <form className="idea-form" onSubmit={handleSubmit}>
            {props.edit? (<Fragment>
            <input type="text" placeholder="Add a BUCKET" value={input} name='text' className='idea-input' onChange={handleChange} ref={inputRef}/>
            <button className="idea-button">Update Idea</button>
            <br/>
            <br/>
                {<div className="bucket-line">Enter New bucket name</div>}
            <br/>
        <input type="text" placeholder="Enter Bucket Name" value={bucketInput} className='idea-input' name="bucket" id="bucket" onChange={e => handleBucketChange(e) } />
           
        {console.log(props)}
            </Fragment>  ):
            <Fragment>

    <input type="text" placeholder="Add an IDEA" value={input} name='text' className='idea-input' onChange={handleChange} ref={inputRef}/>
            <button className="idea-button">Add Idea</button>
            
        <input type="text" placeholder="Enter Bucket Name" value={bucketInput} className='idea-input' name="bucket" id="bucket" onChange={e => handleBucketChange(e) } />

            {/* <select name="bucket" id="bucket" onChange={e => handleBucketChange(e)} >
                {props.buckets.map((bucket,index)=>{
                    return<option value={bucket} key={index}>{bucket}</option>
                })
            } 
        </select>*/}
        </Fragment>
        }
            </form>
    )
    
}

export default IdeaForm
