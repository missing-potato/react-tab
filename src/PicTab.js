import React from 'react';

class PicTab extends React.Component{
    constructor(){
        super();
        this.state = {
            index: -1,
            rotate: [],
            rotateY: [],
            left: [],
            top: [],
            zIndex: []
        }
    }

    componentDidMount(){
        this.random(this.state.index);
    }

    random(index){
        let [newRotate,newTop,newLeft, newIndex, newRotateY] = [[], [], [], [], []];
        
        this.props.picJSON.imgUrl.forEach((v,i) => {
            newRotateY.push(0)
            if(index === i) {
                newRotate.push(0);
                newTop.push('calc(50% - 208px)');
                newLeft.push('calc(50% - 170px)');
                newIndex.push('2')
            } else {
                newRotate.push(Math.random() * -720 + 360);
                newTop.push(Math.random() * window.innerHeight - 208);
                newLeft.push(Math.random() * window.innerWidth - 170);
                newIndex.push('1')
            }
            
        })

        this.setState({
            rotate: newRotate,
            rotateY: newRotateY,
            left: newLeft,
            top: newTop,
            zIndex: newIndex
        })
    }

    click(index, e){
        if(index === this.state.index) {
            if(e.target.classList.contains('bactive')){
                e.target.classList.remove('bactive');
                this.state.rotateY.splice(index, 1, 0)
            } else {
                e.target.classList.add('bactive');
                this.state.rotateY.splice(index, 1, 180);
            }

            this.setState({
                rotateY: this.state.rotateY
            })
        }else{
            this.random(index);
            this.setState({
                index: index
            })
        }
    }

    css(){
        return `
            *{margin: 0;padding: 0;list-style: none;}
            body{background-color: #222222;overflow: hidden;}
            // .myUl{position: relative;}
            .myUl>li{width: 340px;height: 416px;background-color: #fff;position: absolute;transition: .5s;border: 1px #ccc solid;box-shadow: 1px 1px 10px #444;transform-style: preserve-3d;}
            .zm{width: 100%;height: 100%;position: absolute;left: 0;top: 0;transform: translateZ(1px);background-color: #fff;z-index:1;}
            .myUl>li .zm>img{width: 300px;height: 200px;position: absolute;top: 93px;left: 50%;transform: translateX(-50%);}
            .zm .text{position: absolute;bottom: 24px;width: 100%;color: #4d544d;text-align: center;}
            .bm{width: 100%;height: 100%;position: absolute;left: 0;top: 0;transform: translateZ(-1px) rotateY(-180deg);background-color: #fff;text-align: center;display: flex;align-items: center;font-size: 20px;padding: 0 40px;box-sizing: border-box;line-height: 2;flex-wrap: wrap;}
            .bm>div{display: flex;
                justify-content: center;
                flex-wrap: wrap;}
            .bm span{width: 100%;}
            .myOl{position: absolute;left: 50%;transform: translateX(-50%);display: flex;bottom: 38px;z-index: 100;align-items: center;}
            .myOl>li{width: 14px;height: 14px;border-radius: 50%;background-color: #007d77; margin: 0 12px;cursor: pointer;transition: .5s;}
            .myOl .active{transform: scale(1.8) rotateY(180deg);}
            .myOl .bactive{transform: scale(1.8) rotateY(360deg);background-color: yellow;}
        `
    }

    render() {
        let data = this.props.picJSON, oLi = [], oOl = [];

        data.imgUrl.forEach((v,i) => {
            oLi.push(
                <li key={i} style={{transform: 'perspective(800px) rotateY('+ this.state.rotateY[i] +'deg) rotate('+ this.state.rotate[i] + 'deg)',left: this.state.left[i],top: this.state.top[i], zIndex: this.state.zIndex[i]}}>
                    <div className='zm'>
                        <img src={v} alt={'娘口三三' + i}/>
                        <div className='text'>{data.text[i]}</div>
                    </div>
                    <div className='bm'>
                        <span>这是对伟大的娘口三三的第{i+1}条介绍</span>
                        <div>
                            <span>圣火昭昭</span>
                            <span>圣火耀耀</span>
                            <br/>
                            <span>凡我弟子</span>
                            <span>喵喵喵喵</span>
                        </div>
                    </div>
                </li>
            )

            oOl.push(
                <li className={i === this.state.index ? 'active' : ''} key={i} onClick={this.click.bind(this,i)}></li>
            )
        });
        return (
            <div className='picTab'>
                <style  dangerouslySetInnerHTML={{__html: this.css()}}/>
                <ul className='myUl'>
                    {oLi}
                </ul>
                <ol className='myOl'>
                    {oOl}
                </ol>
            </div>
        );
    }
}

export default PicTab;