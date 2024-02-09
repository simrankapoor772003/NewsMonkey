import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
      let {title,desc,img,newsUrl,author,publishedAt} = this.props;
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
        <img src={this.props.img==null?"https://c.ndtvimg.com/2023-10/bpaminh_alaya-furniturewalla_625x300_11_October_23.jpg":this.props.img} className="card-img-top" style={{height:"160px"}} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.desc}</p>
            <p className="card-text"><small className="text-body-secondary">By {author==null?"unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
