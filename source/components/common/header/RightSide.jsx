/**
 * Created by Jan on 12.9.2016.
 */
import React from 'react';
import ReactCSSTransitionGrou from 'react-addons-css-transition-group';

import NavLink from '../../NavLink.jsx';

import DropDown from './DropDown.jsx';

export default class RightSide extends React.Component {
  constructor() {
    super();
    this.state = { dropDown: false };
  }

  toggleDropDown() {
    this.setState({ dropDown: !this.state.dropDown });
  }

  render() {
    return(
      <div>
        <div id="led"></div>
        <img onClick={ this.toggleDropDown.bind(this) } src="../../../asset/images/avatar.png" />
        <ReactCSSTransitionGrou
          transitionName="dropDown"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          { this.state.dropDown && <DropDown loggedInID={this.props.loggedIn}/> }
        </ReactCSSTransitionGrou>
      </div>
    )
  }
}
