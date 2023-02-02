import React, { Component } from "react";
import { Card, CardText, CardTitle } from "reactstrap";
import dateFormat, { masks } from "dateformat";

class StaffDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedStaffDetail: this.props.StaffDetail
        };
    }

    renderStaff(staff) {
        if(staff != null) {
            return(
                <div className="col-12 col-md-6 col-lg-4 mt-2">
                    <Card>
                        <CardTitle>{staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const staff = this.props.staff;
        if(staff != null) {
            return(
                <div className="row">
                        {this.renderStaff(staff)}
                </div>
            );
        }
        else {
            return(
                <div>Bấm vào tên nhân viên để xem thông tin.</div>
            );
        }
    }
}

export default StaffDetail;