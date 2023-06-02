import { Component } from "react";

class Watch extends Component {
    constructor() {
        super();
        this.state = {
            miliSecond: 0,
            second: 0,
            minute: 0,
            hour: 0,
            lapList: []
        }
    }

    reset = () => {
        //console.log("reset...");
        this.setState({ miliSecond: 0, second: 0, minute: 0, hour: 0 })
    }

    lap = () => {
        let newLap = { miliSecond: this.state.miliSecond, second: this.state.second, minute: this.state.minute, hour: this.state.hour };
        this.setState({ lapList: [...this.state.lapList, newLap] });
    }

    stop = () => {
        clearInterval(this.s)
    }

    run = () => {
        this.s = setInterval(() => {
            //console.log("hello");
            var updatedH = this.state.hour;
            var updatedM = this.state.minute;
            var updatedS = this.state.second;
            var updatedMS = this.state.miliSecond;

            if (updatedM == 60) {
                updatedH++;
                updatedM = 0;
            }
            if (updatedS == 60) {
                updatedM++;
                updatedS = 0;
            }
            if (updatedMS == 100) {
                updatedS++;
                updatedMS = 0;
            }
            updatedMS++;
            this.setState({ miliSecond: updatedMS, second: updatedS, minute: updatedM, hour: updatedH })

        }, 10)

    }


    render() {
        return <div className="container mt-5">
            <div className="row p-2">
                <div className="col-md-2 offset-1">
                    <label>Hour :&nbsp; </label>
                    <button className="btn btn-outline-info">{this.state.hour}</button>
                </div>
                <div className="col-md-2">
                    <label>Minute : &nbsp;</label>
                    <button className="btn btn-outline-info">{this.state.minute}</button>
                </div>
                <div className="col-md-2">
                    <label>Second :&nbsp; </label>
                    <button className="btn btn-outline-info">{this.state.second}</button>
                </div>
                <div className="col-md-2">
                    <label>miliSecond : &nbsp;</label>
                    <button className="btn btn-outline-info">{this.state.miliSecond}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-success" onClick={() => this.run()}> Start</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-warning" onClick={() => this.lap()}> Lap</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={this.reset} > Reset</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick={this.stop} > Stop</button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    {this.state.lapList.map(lap =>
                        <div>
                            <span> {lap.hour+" : "}</span>
                            <span>{lap.minute+" : "}</span>
                            <span>{lap.second+" : "}</span>
                            <span>{lap.miliSecond+" "}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    }
}
export default Watch;