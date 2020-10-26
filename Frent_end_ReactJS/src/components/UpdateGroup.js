import React, { Component } from 'react'
import ServiceGroup from '../Service/ServiceGroup'


class UpdateGroup extends Component {

    
    constructor(props) {
        super(props)
    
        this.state = {
             id:this.props.match.params.id,
             name:this.props.match.params.name,
             address:this.props.match.params.address
        }
        console.log(this.state.id)
    }
   

    UpdateName = (e)=>{

        this.setState({
            name : e.target.value

        })
    }

    UpdateAddress = (e)=>{

        this.setState({
            address : e.target.value

        })
    }

    SaveGroup = (e)=>{

        e.preventDefault();
        let group={id:this.state.id,name:this.state.name,address:this.state.address}
        console.log(group)
        ServiceGroup.updateGroups(group,this.state.id).then(res=>{
            this.props.history.push('/ListGroup');
        })
    }
    

    render() {
        return (
            <div className='container mt-3'>
            <form >
            <div className='form-group'>
                <label for="exampleInputEmail1">ID :</label>
                     
                 <input type="text" className="form-control" value={this.state.id}  disabled></input>
                    </div>
                <div className='form-group'>
                <label for="exampleInputEmail1">Name Group</label>
                     
                 <input type="text" className="form-control" value={this.state.name} onChange={this.UpdateName}></input>
                    </div>
                    <div className='form-group'>
                    <label for="exampleInputEmail1">Address Group</label>

                    <input type="text" className="form-control" value={this.state.address} onChange={this.UpdateAddress}></input>
                    </div>
                    <button type="submit"  className="btn btn-primary" onClick={this.SaveGroup}> Save </button>
                
            </form>
        </div>
        )
    }
}

export default UpdateGroup
