import React from 'react';
import './tab.css'

class List extends React.Component{
    change(index){
        this.props.changeIndex(index)
    }
    
    render() {
        let imgList = this.props.imgList, liNode = [], btn = [];
        console.log(this.props.w)
        imgList.forEach((item, index) => {
            liNode.push(
                <li key={index}>
                    <img src={item}/>
                </li>
            )

            btn.push(
                <span className={index == this.props.myIndex ? 'active' : ''} key={index} onClick={this.change.bind(this, index)}></span>
            )
        });
        return (
            <div className='imgList'>
                <div className='line' style={{width: this.props.w + '%', transition: this.props.trs + 's linear'}}></div>
                <div className='lineBtn left' onClick={this.props.leftFn}>&lt;</div>
                <div className='lineBtn right' onClick={this.props.rightFn}>&gt;</div>
                <ul style={{transform: 'translateX('+ this.props.myIndex * -630 +'px)'}}>
                    {liNode}
                </ul>
                <div className='btn'>
                    {btn}
                </div>
            </div>
        );
    }
}

class Tab extends React.Component{
    constructor(){
        super();
        this.state = {
            index: 0,
            trs: 0,
            w: 0,
            timer: null,
            timeout: null
        }
        this.imgList = [
            './1.jpeg',
            './2.jpeg',
            './3.jpeg',
            './4.jpeg',
            './5.jpeg',
        ]
    }

    componentDidMount(){
        clearInterval(this.state.timeout);
        
        this.state.timer = setTimeout(() => {
            this.setState({
                trs: 2,
                w: 100
            })
        }, 0);
        
        this.state.timeout = setInterval(() => {
            let index = this.state.index;
            index++;
            index == this.imgList.length && (index = 0);

            this.setState({
                index: index,
                trs: 0,
                w: 0
            })

            setTimeout(() => {
                this.setState({
                    w: 100,
                    trs: 2,
                })
            }, 10)
        }, 2000)
    }

    changeIdx(index){
        this.setState({
            index: index
        })
    }

    onLeftFn(){
        let index = this.state.index;
        index--;
        index < 0 && (index = this.imgList.length - 1)
        this.setState({
            index: index
        })
    }

    onRightFn(){
        let index = this.state.index;
        index++;
        index == this.imgList.length && (index = 0)
        this.setState({
            index: index
        })
    }

    render() {
        return (
            <div>
                <List imgList={this.imgList} myIndex={this.state.index} w={this.state.w} trs={this.state.trs} changeIndex={this.changeIdx.bind(this)} leftFn={this.onLeftFn.bind(this)} rightFn={this.onRightFn.bind(this)}></List>
            </div>
        );
    }
}

export default Tab