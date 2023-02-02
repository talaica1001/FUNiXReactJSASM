import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";
import StaffDetail from "./StaffDetailComponent";

class Staffs extends Component {

    constructor(props) {
        super(props);

        this.state ={
            selectedStaff: null
        };
    }

    onStaffSelect(staff) {
        this.setState({selectedStaff: staff});
    }

    render() {

        const staff = this.props.staffs.map((staff) => {
            return(
                <div key={staff.id} className="col-12 col-md-6 col-lg-4 mt-2">
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    {staff}
                </div>
                <StaffDetail staff={this.state.selectedStaff} />
            </div>
        );
    }
}

export default Staffs;