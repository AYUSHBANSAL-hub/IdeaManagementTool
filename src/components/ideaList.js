import React ,{useState} from 'react'
import IdeaForm from './ideaForm'
import Idea from './idea'
import { Fragment } from 'react/cjs/react.production.min'
function IdeaList() {
    
    const [searchTerm,setSearchTerm]= useState("");
    const [ideas,setIdeas]= useState([])
    const addIdea=idea=>{
        if(!idea.text || /^\s*$/.test(idea.text)){
            return
        }
        const newIdeas=[idea, ...ideas];
        setIdeas(newIdeas);
        console.log(...ideas);
    }
    
    const [buckets,setBuckets]=useState([]);
    const addBucket=bucket=>{
        const newBuckets=[bucket, ...buckets];
        setBuckets(newBuckets);
    }

    const updateIdea=(ideaId,newValue,bucketTag)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setIdeas(prev=>prev.map(item=>(item.id===ideaId?newValue:item)));
        setIdeas(prev=>prev.map(item=>(item.id===ideaId?bucketTag:item)));
    }
    const removeIdea=id=>{
        const removeArr=[...ideas].filter(idea=>idea.id!==id)
        setIdeas(removeArr);
    }
    
    const completeIdea=id=>{
        let updatedIdeas =ideas.map(idea =>{
            if(idea.id===id){
                idea.isComplete=!idea.isComplete;
            }
            return idea;
        });
        setIdeas(updatedIdeas);
    }
    return (
        <Fragment>
        <div>
            <h1>What Idea did you come up with today?</h1>
            <IdeaForm onSubmit={addIdea} buckets={buckets}/>
            <Idea ideas={ideas} completeIdea={completeIdea} removeIdea={removeIdea} updateIdea={updateIdea} />
        </div>
        <div className="search">
            <div class="search wrap">
                <input type="text" class="searchTerm" placeholder="Filter with Bucket" onChange={(event) =>{ setSearchTerm (event.target.value); }}/>
                {/* <button type="submit" class="searchButton">
                Go
            </button> */}
            </div>
        <div className="filter-list">
        {ideas.filter((val)=> { 
            if (searchTerm == "") {
            return val        
        } else if (val.bucketTag.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        }
    }). map( (val, key) => {
        return(
            <div className= "user" key={key}>
                <div className="filtered-data">
                <p>Idea: {val.text}            ||  bucket: {val.bucketTag}</p>
                </div>
            </div>
            );
        })}
        </div>
        </div>
</Fragment>
    )
} 

export default IdeaList;
