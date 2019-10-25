import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  createCommunity,
  deleteCommunity,
  updateCommunity,
} from "../../graphql/mutations";
import { Formik } from "formik";

// type Community {
//   id: ID
//   url: String
//   name: String!
//   description: String
//   creator: ID
//   created_date: AWSDate
//   rules: [String]
//   locations: [String]
//   hidden: Boolean
//   hidden_date: AWSDate
//   sitewide_reasons_for_being_hidden: [String]
//   keywords: [String]
//   topics: [String]
//   flagged_comments: [Comment]
//   flagged_discussions: [Discussion]
//   moderation_level: Int
//   number_of_users: Int
// }

function FormikValidation({
  handleAddCommunity,
  handleChangename,
  handleChangeDescription,
}) {
  return (
    <Formik
      initialValues={{ name: "", description: "" }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Required";
        } else if (!/^[A-Z0-9._%+-]/i.test(values.name)) {
          errors.name = "Invalid name";
        }
        return errors;
      }}
      onSubmit={handleAddCommunity}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleAddCommunity}>
          <input
            type="name"
            name="name"
            onChange={handleChangename}
            // onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          <input
            type="description"
            name="description"
            onChange={handleChangeDescription}
            // onBlur={handleBlur}
            value={values.description}
          />
          {errors.description && touched.description && errors.description}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

class CommunityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
    };
  }

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

    if (this.state.name.length > 1 && this.state.name !== " ") {
      let input = this.removeEmptyStringsFromDTO(this.state);

      const result = await API.graphql(
        graphqlOperation(createCommunity, { input })
      )
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
    } else {
      alert("Name needs at least one letter");
    }
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
    const index = communities.findIndex(
      community => note.id === updatedCommunity.id
    );
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
          <FormikValidation
            handleAddCommunity={this.handleAddCommunity}
            handleChangename={this.handleChangeName}
            handleChangeDescription={this.handleChangeDescription}
          />
        </div>
      </div>
    );
  }
}

export default CommunityForm;
