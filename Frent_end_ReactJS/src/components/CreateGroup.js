import React, { Component } from 'react'
import ServiceGroup from '../Service/ServiceGroup'

class CreateGroup extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             name:'',
             address:''
        }

        this.UpdateName=this.UpdateName.bind(this);
        this.UpdateAddress=this.UpdateAddress.bind(this);
        this.SaveGroup = this.SaveGroup.bind(this);
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
        let group={name:this.state.name,address:this.state.address}
        console.log(group)
        ServiceGroup.createGroups(group).then(res=>{
            this.props.history.push('/ListGroup');
        })
    }

    render() {
        

        return (
            <div className='container mt-3'>
                <form >
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

export default CreateGroup
