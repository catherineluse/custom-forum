import React from "react";
import { render } from "react-dom";
import { API, graphqlOperation } from "aws-amplify";
import { createCommunity, updateCommunity } from "../../graphql/mutations";
import { Formik, FormikProps, Form, Field } from "formik";
import * as Yup from "yup";

// Community graphql schema:
// type Community @model @searchable {
//     id: ID
//     url: String
//     name: String!
//     description: String
//     creator: ID
//     created_date: AWSDate
//     rules: [String]
//     locations: [String]
//     hidden: Boolean
//     hidden_date: AWSDate
//     sitewide_reasons_for_being_hidden: [String]
//     keywords: [String]
//     flagged_comments: [Comment]
//     flagged_discussions: [Discussion]
//   }

class CommunityForm extends React.Component {
  removeEmptyStringsFromDTO = () => {
    let input = {};
    for (let key in this.state) {
      if (this.state[key] !== "") {
        input[key] = this.state[key];
      }
    }
    return input;
  };
  // DynamoDB throws an error if you submit empty strings
  handleAddCommunity = async event => {
    event.preventDefault();

    let input = this.removeEmptyStringsFromDTO(this.state);

    await API.graphql(graphqlOperation(createCommunity, { input }))
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

    // console.log(
    //   "the api result is " + JSON.stringify(result.data.createCommunity)
    // );
    this.setState({ name: "", description: "" });
  };

  handleChangename = event => {
    console.log("changed community name instate");
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleUpdateCommunity = async () => {
    const { communities, id, note } = this.state;
    const input = { id, note };
    const result = await API.graphql(
      graphqlOperation(updateCommunity, { input })
    );
    const updatedCommunity = result.data.updateCommunity;
    const index = communities.findIndex(() => note.id === updatedCommunity.id);
    const updatedCommunities = [
      ...communities.slice(0, index),
      updatedCommunity,
      ...communities.slice(index + 1),
    ];
    this.setState({ notes: updatedCommunities, note: "", id: "" });
  };

  hasExistingCommunity = () => {
    const { communities, communityId } = this.state;
    if (communityId) {
      const isCommunity =
        communities.findIndex(community => community.id === communityId) > -1;
      return isCommunity;
    }
    return false;
  };

  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <Formik
            initialValues={{ name: "", description: "" }}
            validate={values => {
              console.log("the values are ", values);
              let errors = {};
              if (!values.name) {
                errors.name = "Required";
              } else if (!/^[A-Za-z]/i.test(values.name)) {
                errors.name = "The name has to start with a letter.";
              }
              return errors;
            }}
            onSubmit={this.handleAddCommunity}
            render={
              ({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                isSubmitting,
              }) => {
                return (
                  <form onSubmit={this.handleAddCommunity}>
                    <h1>Community Form</h1>
                    <div className="form-group">
                      <label htmlFor="name">Community Name</label>
                      <Field
                        type="name"
                        name="name"
                        component="input"
                        onBlur={handleBlur}
                        value={values.name}
                      ></Field>
                      {errors.name && touched.name && errors.name}
                    </div>
                    <div className="form-group">
                      <label htmlFor="communityDescription">Description</label>
                      <Field
                        className="form-control"
                        component="textarea"
                        id="newCommunityDescription"
                        rows="3"
                        type="description"
                        name="description"
                        onBlur={handleBlur}
                        value={values.description}
                      ></Field>
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary mr-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ); //return
              } //end of code block for function in JS snippet
            } //end of render method JS
          />
        </div>
      </div>
    ); // end of class return
  } // end of render method
} // end of class

export default CommunityForm;
