import React from 'react';
import {Motion, spring} from 'react-motion';

class Ani extends React.Component{
    constructor(){
        super();
        this.state = {
            v:false,
            start: '中国',
            myArr: [
                '中国',
                '印度',
                '新西兰',
                '瑞士'
            ]
        }
    }

    css(){
        return`
            .tab{width: 300px;height: 40px;line-height: 40px;border: 1px #000 solid;position: relative;}
            .tab ul{width: 100%;position: absolute;top: 40px;left: -1px;right: -1px;overflow: hidden;border: 1px #000 solid;border-top: none;}
            .tab li{width: 100%;height: 40px;border-bottom: 1px #000 solid;transition: .7s;}
            .tab li:last-child{border-bottom: none;}
            .tab li:hover{background-color: #333;color: #fff;}
        `
    }

    click(){
        this.setState({
            v: !this.state.v
        })
    }

    select(i){
        this.setState({
            start: i
        })
    }

    render() {
        let oLi = [];

        this.state.myArr.forEach((item,index) => {
            oLi.push(
                <li key={index} onClick={this.select.bind(this,item)}>{item}</li>
            )
        })
        return (
             <div>
                <style dangerouslySetInnerHTML={{__html: this.css()}}/>
                <Motion style={{myH: spring(this.state.v ? 164 : 0)}}>
                    {({myH}) => (
                        <div className='tab' onClick={this.click.bind(this)}>
                            {this.state.start}
                            <ul style={{height: myH}}>
                                {oLi}
                            </ul>
                        </div>
                    )}
                </Motion>
             </div>
        );
    }
}

export default Ani