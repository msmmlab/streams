import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate2 extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit = (formValues) => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter the title"
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "streamCreate2" })(StreamCreate2);
