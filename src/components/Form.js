import React, {Component} from 'react';
import { PropTypes } from 'prop-types';


class Form extends Component {
  render() {
    return(
      <div>
      <div className="form_wrapper">
        <form id="form">
          <table>
            <tbody>
              <tr>
                <td>name</td>
                <td>
                  <input name="name" id="name" type="text" />
                  <input name="submit" id="submit" type="submit" />
                </td>
              </tr>
              <tr>
                <td>options</td>
                <td>
                  <input name="options" id="options" type="text" />
                </td>
              </tr>
              <tr>
                <td>subject</td>
                <td>
                  <input name="subject" id="subject" type="text" />
                </td>
              </tr>
              <tr>
                <td>body</td>
                <td>
                  <textarea name="body" id="body" rows="10" cols="50" />
                </td>
              </tr>
              <tr>
                <td>file</td>
                <td>
                  <input type="file" id="file" onChange={this.onChange} />
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

export default Form
