import React, { Component } from 'react';
import thankyou from '../images/minion-thank.jpg';

class CommentForm extends Component {
  state = {
    isSubmitted: false,
    formData: {
      first_name: '',
      last_name: '',
      gender: '',
      post_name: '',
      comment: '',
    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      }
    })
    console.log('dskdjskdjsd', name, value, this.state.formData);

  }

  handleSubmitForm = (e) => {
    e.preventDefault()

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxKxpaNzgYdqk01TOd-2gaA2oyfy9ynBDKKrVNUIJiOjd9lXeFW/exec';
    const form = document.forms['submit-to-google-sheet']

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        this.setState({
          isSubmitted: true,
        })
        console.log('Success!', response);
      })
      .catch(error => {
        console.error('Error!', error.message);
      })
  }


  render() {
    const { isSubmitted } = this.state;
    if (isSubmitted) {
      return (
        <div className="thank-you">
          <img width='250px'src={thankyou} alt="Minion Thank" />
          <p>Thank for submitting your comment!</p>
        </div>
      );
    }
    else return (
      <form name="submit-to-google-sheet" onSubmit={this.handleSubmitForm}>
        <div className="form-row">
          <label htmlFor="fisrt_name">First Name</label>
          <input
            value={this.state.formData.first_name} onChange={this.handleOnChange}
            name="first_name" type="text" placeholder="First Name" required
          />
        </div>
        <div className="form-row">
          <label htmlFor="last_name">Last Name</label>            
          <input
              value={this.state.formData.last_name} onChange={this.handleOnChange}
              name="last_name" type="text" placeholder="Last Name" required
            />          
        </div>
        <div className="form-row">
          <label htmlFor="gender">Gender</label>            
          <select name="gender" value={this.state.formData.gender} onChange={this.handleOnChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>          
        </div>

        <div className="form-row">
          <label htmlFor="post_name">Post Name</label>            
          <input
              value={this.props.postName}
              name="post_name" type="text" placeholder="Post Name" readOnly
            />
        </div>

        <div className="form-row">
          <label htmlFor="comment">Your Comment</label>            
          <textarea
              value={this.state.formData.comment} onChange={this.handleOnChange}
              name="comment" type="text" placeholder="Your Comment"
            />          
        </div>

        <div className="form-row">
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}

CommentForm.defaultProps = {
  postName: "Opinions about trongtai37!"
}

export default CommentForm;