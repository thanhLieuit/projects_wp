import React from 'react';



/**
 * jsx => return block
 * fragment
 */
class ChildComponents extends React.Component {
    state = {
        ShowJob: false,
    }
    HanldeShowHide = () => {
        this.setState({
            ShowJob: !this.state.ShowJob
        })
    }
    HanldeOnClickDelete = (job) => {
        this.props.deleteJob(job)
    }
    render() {
        const { ArrJobs } = this.props;
        const { ShowJob } = this.state;
        // let check = ShowJob === true ? 'ShowJob : true' : 'ShowJob : false';
        return (
            <>
                {ShowJob === false ?
                    <div>
                        <button onClick={() => this.HanldeShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='jobs-list'>
                            {
                                ArrJobs.map((items, index) => {
                                    return (
                                        <div key={items.id}>
                                            {items.title} - {items.salary} $ <></> <span onClick={() => this.HanldeOnClickDelete(items)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.HanldeShowHide()}>Hidder</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponents = (props) => {
//     const { ArrJobs } = props
//     return (
//         <>
//             <div className='jobs-list'>
//                 {
//                     ArrJobs.map((items, index) => {
//                         return (
//                             <div key={items.id}>
//                                 {items.title} - {items.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponents;