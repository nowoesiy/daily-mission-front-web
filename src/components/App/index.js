import React from 'react';
import './index.scss';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  handleLogin,
  handleLogout,
  LoadToGetCurrentUser,
} from '../../modules/reduer_loginAuth';
import OAuth2RedirectHandler from '../../oauth2/OAuth2RedirectHandler';
import Header from '../Header';
import Aside from '../Aside';
import Login from '../Login';
import Mission from '../Mission';
import HotMission from '../HotMission';
import Landing from '../Landing';
import SubmitContainer from '../../containers/SubmitContainer';
import MissionDetail from '../MissionDetail';

class App extends React.Component {
  state = {
    team: [
      {
        id: '이수백',
        img:
          'https://blogfiles.pstatic.net/MjAyMDAyMDNfNDIg/MDAxNTgwNzE3OTc2MDAy.2LFTETNFNTCyIMmWYZISOSPt_t0wf4UfDtJzPtXwfGAg.TTAoaSPFyE81V3CUDhYsoO6VqLOxEEPX3rys-0m6McIg.JPEG.nhseo302/KakaoTalk_20200203_171847170.jpg',
        submit: false,
        date: '2020-02-03 17:10:00',
      },
      {
        id: '이서원',
        img:
          'https://blogfiles.pstatic.net/MjAyMDAyMDNfMTYy/MDAxNTgwNzE4MDQ1NjI0.llYyVbPN1Ed_vPtL0jYYmd5rTVKOLQhZPVncn5AoleMg.LnJFEu8E-Ui7eDJnXoAdOpgAJoE3UA2gnnBU-TMLjPAg.JPEG.nhseo302/20180328_152020.jpg',
        submit: false,
        date: '2020-02-03 17:10:00',
      },
      {
        id: '이민호',
        img:
          'https://blogfiles.pstatic.net/MjAyMDAyMDNfMjI0/MDAxNTgwNzE3OTc1MzY0.0IH684guoAWFxv5L8GGJR9WOqgtgwu9UawFv0-r6vtgg.anL8iNCD90YJxcH7LRZiJPcB4jN0GYoUUxegjXM59k8g.JPEG.nhseo302/KakaoTalk_20200203_171545338.jpg',
        submit: false,
        date: '2020-02-03 17:10:00',
      },
    ],
    mission: [
      {
        name: '1일 1알고리즘 미션',
        submit: false,
      },
      {
        name: '아침 챙겨먹기',
        submit: false,
      },
      {
        name: '8시 기상 미션',
        submit: false,
      },
    ],
    posts: [],
    posting: [],
  };

  componentDidMount() {
    this.props.LoadToGetCurrentUser();
  }

  render() {
    const { authenticated, currentUser, handleLogout } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route
            path="/oauth2/redirect"
            component={OAuth2RedirectHandler}
          ></Route>
        </Switch>
        <Header
          authenticated={authenticated}
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
        {this.props.location.pathname !== '/login' ? (
          <>
            <Aside currentUser={currentUser} />
            <div className="container">
              <Switch>
                <Route path="/missiondetail" component={MissionDetail}></Route>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/mission" component={Mission}></Route>
                <Route path="/hot-mission" component={HotMission}></Route>
                <Route path="/my" exact>
                  {currentUser ? (
                    <SubmitContainer
                      currentUser={currentUser}
                      mission={this.state.mission}
                      team={this.state.team}
                      //PostBoard={this.PostBoard}
                      //DeleteBoard={this.DeleteBoard}
                    />
                  ) : (
                    <Redirect to={'/'} />
                  )}
                </Route>
              </Switch>
            </div>
          </>
        ) : (
          <div className="App__login">
            <Route path="/login" exact component={Login}></Route>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      authenticated: state.loginAuth.authenticated,
      currentUser: state.loginAuth.currentUser,
      loading: state.loginAuth.loading,
    }),
    {
      handleLogin,
      handleLogout,
      LoadToGetCurrentUser,
    },
  )(App),
);
