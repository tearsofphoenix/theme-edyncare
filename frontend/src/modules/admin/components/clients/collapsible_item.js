import React, { Component } from 'react';
//import PropsTypes from 'prop-types';
//import Style from '../../../scss/custom/collapsible.css'

class CollapsibleItem extends Component {
    constructor(props){
        super(props)
        this.state ={
            isExpanded: false  
        }
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
    }
    render() {
        const {title, children } = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
        return( 
           <div className='collapseItem'> 
                <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} >
                    <div className="panel-heading" onClick={(e) => this.handleToggle(e)}>
                        <h4>
                            {title}
                        </h4>
                    </div>
                    <div className="panel-collapse" style={{height:currentHeight+'px'}}>
                        <div className="panel-body" ref="inner">
                            <div className="container">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>  
            </div> 
        )        
    }
}

export default CollapsibleItem