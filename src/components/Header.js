import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Link } from 'react-router'
import { RaisedButton, TextField } from 'material-ui'

class Header extends React.Component {
  render() {
    const { enterSearchEdit, onChangeSearchWord } = this.props
    return (
        <div>
            <header>
              <div className="header-content">
                <Link to="/"><h1>Music</h1></Link>
                <TextField
                  className="font"
                  style={{width: '640px'}}
                  underlineFocusStyle={{display:'none'}}
                  inputStyle={{color:'#fff',borderRadius:6}}
                  hintStyle={{color:'#fff'}}
                  hintText="Search for a song or artist"
                  ref="SearchInputField"
                  onKeyDown={e => enterSearchEdit(e, this.refs.SearchInputField.getValue())}
                />
                <Link to="/favorite">
                  <RaisedButton style={{marginLeft: '16px'}}label="Favorites"/>
                </Link>
              </div>
            </header>
        </div>
    );
  }
}
export default Header;
