import React, { Component } from 'react'
import ServiceGroup from '../Service/ServiceGroup'

class ListGroup extends Component {

    state = {
        isLoading: true,
        groups: []
      };
    
 /*     async componentDidMount() {
        Groups.getGroups().then(resp=>{
          this.setState({
            groups:resp.data,
           isLoading:false
          })
        })/Profile/:IdProfile
    }
 */
componentDidMount(){
    ServiceGroup.getGroups().then(resp=>{
        this.setState({
          groups:resp.data,
         isLoading:false
        })

        console.log(this.state.groups);
      })
}




DeleteGroup=(id)=>{
    ServiceGroup.deleteGroups(id).then( res => {
        this.setState({groups: this.state.groups.filter(group => group.id !== id)});
    });

}

UpdateGroup=(id,name,address)=>{
    this.props.history.push(`/UpdateGroup/${id}/${name}/${address}`);
    

}

    render() {

        const {groups, isLoading} = this.state;

        if(isLoading){
            return <h1>Loading</h1>
        }
        return (
            <div className="container mt-3">
                <h1 className="text-danger">Les Groups</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Adresse</th>
                            <th>Option </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {     
                            
                                groups.map(group=>{

                                    return(

                                        <tr>
                                            <td >{group.id}</td>
                                            <td>{group.name}</td>
                                            <td>{group.address}</td>
                                            <td><button onClick={ () => this.DeleteGroup(group.id)} className="btn btn-danger">Delete</button><button onClick={ () => this.UpdateGroup(group.id,group.name,group.address)}  className="btn btn-success">Update</button></td>
                                          
                                        </tr>
                                    )
                                })
                             }

                            
                        
                    </tbody>

                </table>
                
            </div>
        )
    }
}

export default ListGroup
