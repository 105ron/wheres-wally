// eslint-config-airbnb@17.1.0" has incorrect peer dependency "eslint-plugin-jsx-a11y@^6.1.1"
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../../components/UI/Loader/Loader';
import Menu from '../../components/UI/Menu/Menu';
import Button from '../../components/UI/Button/Button';

// Until reach/router has a back functionality
function goBack(event) {
  event.preventDefault();
  window.history.back();
}

class MenuFromApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonData: [],
      title: '',
    };
  }

  componentDidMount() {
    const { location: { pathname } } = this.props;
    this.fetchApiData(pathname);
  }

  changeMenuHandler = (event) => {
    const newMenu = event.target.getAttribute("href");
    this.setState({
      buttonData: [],
      title: '',
    });
    this.fetchApiData(newMenu);
  }

  fetchApiData(pathname) {
    axios.get(`/api/${pathname}`)
      .then((response) => {
        const { title, buttonData } = response.data;
        if (buttonData.length) {
          this.setState({
            buttonData,
            title,
          });
        }
      });
  }

  render() {
    const { buttonData, title } = this.state;
    let component = <Loader />;
    if (buttonData.length) {
      component = (
        <Menu
          buttonData={buttonData}
          title={title}
          clickHandler={this.changeMenuHandler}
        >
          <Button
            slug="#"
            name="Go back"
            changeMenu={goBack}
          />
        </Menu>
      );
    }
    return (
      <React.Fragment>
        {component}
      </React.Fragment>
    );
  }
}

MenuFromApi.defaultProps ={
  location: {
    pathname: '',
  },
};

MenuFromApi.propTypes = {
  location: PropTypes.object,
};

export default MenuFromApi;
