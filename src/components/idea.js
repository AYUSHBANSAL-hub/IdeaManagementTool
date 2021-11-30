import React, {useState} from 'react'
import IdeaForm from './ideaForm'
import IdeaList from './ideaList'
import {RiCloseCircleLine, RiTodoFill} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Idea({ideas, completeIdea,removeIdea,updateIdea} ) {
    const [edit, setEdit]=useState({
        id:null,
        value: '',
        newBucketTag:''
    });

    const submitUpdate=(value,newBucketTag)=>{
        updateIdea(edit.id,value,newBucketTag);
        setEdit({
            id:null,
            value:'',
            newBucketTag:''
        })
    }
    if(edit.id){
        return<IdeaForm edit={edit} onSubmit={submitUpdate}/>
    }
    return ideas.map((idea,index)=>(
        <div className={idea.isComplete? 'idea-row complete':'idea-row'} key={index}>
            <div key={idea.id} onClick={()=>completeIdea(idea.id)}>
                {idea.text}
            </div>
            <div>
                {idea.bucketTag}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={()=>removeIdea(idea.id)}
                className="delete-icon"/>
                <TiEdit onClick={()=>setEdit({id:idea.id,value:idea.text,newBucketTag:idea.bucketTag})}
                className="edit-icon"/>
            </div>
        </div>
    ));
}

export default Idea
