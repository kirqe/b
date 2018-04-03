import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { add_topic } from "../actions/topicActions"

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ add_topic }, dispatch);
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: {
        name: "",
        options: "",
        subject: "",
        body: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add_topic(this.props.perm, this.state);
  }

  handleChange(e) {
    this.setState({ topic: { ...this.state.topic, [e.target.name]: e.target.value } });
  }

  render() {
    const { name, options, subject, body } = this.state.topic
    return(
      <div>
        <div className="form_wrapper">
          <form id="form" onSubmit={this.handleSubmit } >
            <table>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>
                    <input name="name" id="name" type="text"
                    value={name}
                    onChange={this.handleChange}/>
                    <input name="submit" id="submit" type="submit" />
                  </td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>
                    <input name="options" id="options" type="text"
                    value={options}
                    onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>subject</td>
                  <td>
                    <input name="subject" id="subject" type="text"
                    value={subject}
                    onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>body</td>
                  <td>
                    <textarea name="body" id="body" rows="10" cols="50"
                    value={body}
                    onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>file</td>
                  <td>
                    <input type="file" id="file" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <hr/>
      </div>
    )
  }
}


export default connect(null, mapDispatchToProps)(Form)
