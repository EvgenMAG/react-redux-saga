import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions.js'
import {Alert} from '../components/alert.js'

 class PostForm extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    submitHandler = e => {
        e.preventDefault()
       
        const { title } = this.state
      
        if (!title.trim()) {
            return this.props.showAlert("The post name can't be the empty string")
        }

        const newPost = {
            title, id: Date.now().toString()
        }
      
        this.props.createPost(newPost)
         this.reset()
        
    }

    reset = ()=>{
        this.setState({title: ''})
    }

     handleInputChange = e => {
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }
        }))
        
    }
    
     render() {
        
        return (
            <form onSubmit={this.submitHandler}>
                { this.props.text  && <Alert text={this.props.text } />}
            <div className="form-group">
            <label htmlFor="title">Заголовок поста</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} className="form-control" id="title" />
            </div>
            <button className="btn btn-success" type= "submit">Создать</button>
        </form>
        )
    }
 }

const mapDispatchToProps = {
    createPost, showAlert,
}
const mapStateToProps = (state) => {
    return {
         text: state.app.alert
     }
 }
export default connect(mapStateToProps,mapDispatchToProps)(PostForm)