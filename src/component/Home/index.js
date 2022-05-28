import {v4 as uuidv4} from 'uuid'
import { Component } from "react";
import Blogs from './blogs';


let blogItems =[
    {
        id: uuidv4(),
        title: 'Blog-1',
        imageUrl: 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png',
        avatarUrl: 'https://i1.wp.com/www.eventstodayz.com/wp-content/uploads/2018/04/cute-profile-pic-2018.jpg?fit=768%2C768&ssl=1',
        author: 'Anthony',
        topic: 'React-Js'
    },
    {
        id: uuidv4(),
        title: 'Blog-2',
        imageUrl: 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png',
        avatarUrl: 'https://i1.wp.com/www.eventstodayz.com/wp-content/uploads/2018/04/cute-profile-pic-2018.jpg?fit=768%2C768&ssl=1',
        author: 'Arnold',
        topic: 'Node-Js'
    }
]

class Home extends Component{
    render(){
        return(
            <>
            <h1>Displaying list items from an Array</h1>
            <ul>
                {
                 blogItems.map((eachItem=>
                    <Blogs blogItems={eachItem} key={eachItem.id}/>))   
                }
            </ul>
            </>
        )
    }
}
export default Home