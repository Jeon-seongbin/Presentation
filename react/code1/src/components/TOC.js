import React,{Component} from 'react'

class TOC extends Component{
    render(){
        const contents = this.props.contents;
        {/* 변수 등등은 render 에 넣는다 */}
        return (
            <nav>
                <ul>
                    {this.props.contents.map((content, index) =>{
                        return <li key={index}>
                                    <a href={'/content/'+content.id}
                                        onClick={function(e){
                                            e.preventDefault();
                                            this.props.onChangePage(content.id)
                                        }.bind(this)}>{content.title}
                                    </a>
                                </li>
                        {/* map을 쓸 때에는 꼭 return 이 필요하다 */}
                    })}
                </ul>
            </nav>
         );
    }
}

//TOD로 되돌려줌
export default TOC;