import React,{Component} from 'react'

class CreateContent extends Component{
  
  render(){
    return(
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post" onSubmit={(e)=>{
              e.preventDefault();
              // document.getElementsByName('title');
              // document.getElementsByName('desc');
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }}>
              <p><input type="text" name="title" placeholder="title"/></p>
              <p><input type="textarea" name="desc" placeholder="description"/></p>
              <p><input type="submit" name="submit"/></p>
            </form>
        </article>
    );
  }
}

export default CreateContent;