import React from 'react'
import Sentiment from 'sentiment'
import products from './products.json'
import wordList from 'word-list'
export default class SentimentAnalysis extends React.Component {
    constructor() {
        super();
        this.state = {
            result: "",
            review: "",
            showReview: []
        }
    }

    getSentiments = () => {
        var analysis = new Sentiment();
        this.setState({
            result: analysis.analyze(this.state.review)
        }, () => {
            console.log(this.state.result);
        })
        this.state.showReview.push(this.state.review);
    }

    componentDidMount() {
        console.log(products);
    }

    ontextChange = (e) => {
        this.setState({
            review: e.target.value
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {
                            products.ProductList.map((itm, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <h1>{itm.ProductName}</h1>
                                        <h6>{itm.Currency} {itm.Price}</h6>
                                        <img src={require('\\Images\\product001.jpeg')} width="30px" height="30px"/>
                                        <p>This is Sentiment Analysis Example</p>
                                        <textarea id="txtReview" className="review" cols="100" rows="3" value={this.state.review} onChange={this.ontextChange}></textarea>
                                        <br /><button id="btnSendReview" onClick={this.getSentiments}>Send Review</button>
                                        <table>
                                            <tbody>
                                                {
                                                    this.state.showReview.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <label>{item}</label>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}   