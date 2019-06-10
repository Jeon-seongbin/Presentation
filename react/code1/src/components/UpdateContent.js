import React,{Component} from 'react'

class UpdateContent extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        }
    }

  render(){
    return(
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post" onSubmit={(e)=>{
          e.preventDefault();
          this.props.onSubmit(
            this.state.id,
            this.state.title,
            this.state.desc);
        }}>
            <input type="hidden" name="id" value={this.state.id}/>
          <p><input
                type="text"
                name="title"
                placeholder="title"
                value={this.state.title}
                onChange={(e)=>{
                    this.setState({title : e.target.value})
                }}/></p>
          <p><input 
                type="textarea"
                name="desc"
                placeholder="description"
                value={this.state.desc}
                onChange={(e)=>{
                    this.setState({desc: e.target.value})
            }}/></p>
          <p><input type="submit" name="submit"/></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;