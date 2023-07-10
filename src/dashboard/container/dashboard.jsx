import Axios from "axios";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import React from "react";
import "../../common/utils/utils";
import { chartTemplate } from "../../common/utils/chartTemplate";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      seriesData: []
    }
    Axios.get('/data/patient.json').then((response) => {
      this.setState({ seriesData: this.seriesData(response.data), loading: false });
      console.log(response);
    });
  }

  seriesData = (res) => {
    let _series = [];
    res.bedOcupency.map((item) => {
      _series.push(item['not_ready']);
      _series.push(item['arrived']);
      _series.push(item['open']);
      _series.push(item['admitted']);
      _series.push(item['hold']);
      _series.push(item['wait']);
      _series.push(item['registerd']);
    });
    console.log(_series);
    return _series;
  }
  getOptions = (type) => {
    let _chartOption = chartTemplate(type);
    _chartOption.title.text = 'Bed Occupency';
    _chartOption.chart.height = '300px';
    _chartOption.categories= ['Not ready', 'admitted', 'open', 'admitted', 'hold', 'wait', 'registerd'];
    _chartOption.tooltip = {
      formatter: function () {
        return 'Bed Occupency <br/><b>' + (this.series.name).capitalizeFirstLetter() + '</b>:' + this.y;
      }
    },
    _chartOption.series = [
      {
        name: 'Not ready',
        data: [this.state.seriesData[0]]
      },
      {
        name: 'admitted'.capitalizeFirstLetter(),
        data: [this.state.seriesData[1]]
      },
      {
        name: 'admitted',
        data: [this.state.seriesData[2]]
      },
      {
        name: 'hold',
        data: [this.state.seriesData[3]]
      },
      {
        name: 'wait',
        data: [this.state.seriesData[4]]
      },
      {
        name: 'registerd',
        data: [this.state.seriesData[5]]
      }
    ]
    return _chartOption;
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12 widgets">Total Admitted Patients</div>
            </div>
            <div className="col-md-3">
              <div className="col-md-12 widgets">Total Active Staff</div>
            </div>
            <div className="col-md-3">
              <div className="col-md-12 widgets">Operational Cost</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-12 widgets">Table</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12 widgets">Covid 19 Patient</div>
            </div>
            <div className="col-md-6">
              <div className="col-md-12">
                {!this.state.loading && <HighchartsReact highcharts={Highcharts} options={this.getOptions('column')} />}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-12 widgets">Patient Satisfaction rate</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-12 widgets">In Patient - Out Patient Rate</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
