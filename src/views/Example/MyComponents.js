import React from 'react';
import { Children } from 'react/cjs/react.production.min';
import ChildComponents from './ChildComponents';
import FromComponent from './FromComponent';

/**
 * jsx => return block
 * fragment
 */
class MyComponents extends React.Component {
    state = {
        ArrJobs: [
            { id: 'abcjpb1', title: 'Dev', salary: '500' },
            { id: 'abcjpb2', title: 'Tes', salary: '400' },
            { id: 'abcjpb3', title: 'PM', salary: '1500' }
        ]
    }
    addJob = (job) => {
        this.setState({
            ArrJobs: [...this.state.ArrJobs, job]
        })
    }
    deleteJob = (job) => {
        let currentJobs = this.state.ArrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            ArrJobs: currentJobs,
        })
    }
    render() {

        return (
            <>
                <FromComponent
                    addJob={this.addJob}
                />
                <ChildComponents
                    ArrJobs={this.state.ArrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}

export default MyComponents;