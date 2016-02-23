import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Strings} from '../../constants';

@connect(
  state => ({user: state.auth.user})
)

export default class Dashboard extends Component {

  static propTypes = {
    user: PropTypes.object
  };

  state = {
    message: '',
    messages: []
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const style = require('./Dashboard.scss');
    const {user} = this.props;

    return (
      <div className={style.chat + ' container'}>
        <h1 className={style}>{Strings.Campaign.TitleList}</h1>

        {user &&
          <div>
              <div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>{Strings.Operations.New}</button>
              </div>
              <div className="col-md-6">
                <div className={style.campaigns + ' panel panel-default campaigns'}>
                  <div className="panel-body">
                      <h4>Alongamento para Empresas</h4>
                      <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
                  </div>
                  <div className="panel-footer">
                    <button className="btn btn-primary">
                      <i className="fa fa-pin"/>{Strings.Campaign.Info.Subscribers}
                    </button>
                    <button className="btn btn-primary">
                      <i className="fa fa-pin"/>{Strings.Campaign.Info.Slides}
                    </button>
                    <button className="btn btn-primary">
                      <i className="fa fa-pin"/>{Strings.Campaign.Info.Interval}
                    </button>
                    <button className="btn btn-primary">
                      <i className="fa fa-pencil"/>{Strings.Operations.Edit}
                    </button>
                  </div>
                </div>
              </div>
          </div>
        }
      </div>
    );
  }
}
