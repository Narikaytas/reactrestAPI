import { Component } from "react";
import BlogsInfo from "./blogsInfo";

class About extends Component{
    state ={
        blogsItem : []
    }

    componentDidMount(){
        this.getBlogsData()
    }
    getBlogsData = async()=>{
    const response =  await fetch('https://apis.ccbp.in/blogs')
    const data =  await response.json()
    const updatedData = data.map(eachItem=>({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic
    }))
    this.setState({blogsItem: updatedData})
    
    
     
}
    render(){
         const {blogsItem} =this.state
        return(
            <>
            <h1>Displaying list items from an API Call</h1>
            <ul>
            {
               blogsItem.map(eachItem=>
                <BlogsInfo blogsItem={eachItem} key={eachItem.id}/>)                 
            }
            </ul>
            </>
        )
    }
}
export default About