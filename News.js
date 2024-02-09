import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:16,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles:[],
      loading: false,
      page:1,
    };
  }
  update=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69c86a42953b4afbbbe23e73dbfdd002&page=${this.state.page}&pagesize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69c86a42953b4afbbbe23e73dbfdd002&page=1&pagesize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
  }
  handleprev=async()=>{
    this.setState({
      page:this.state.page-1
    })
    this.update();
  }
  handlenext=async()=>{
    this.setState({
      page:this.state.page +1,
    })
    this.update();
  }
  render() {
    return (
      <div className="container my-4">
        <h2 style={{marginTop:"90px"}}>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col my-4" key={element.url}>
                <Newsitem
                  title={element.title}                //.slice(0, 40)
                  desc={element.description}           //.slice(0, 88)
                  img={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" className="btn btn-primary" onClick={this.handleprev}>&laquo; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-primary" onClick={this.handlenext}>Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default News;
