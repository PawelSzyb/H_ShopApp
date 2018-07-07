import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/authActions";

import TextField from "../common/TextField";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ isOpen: true });
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader>Rejestracja</ModalHeader>
          <ModalBody>
            <Form noValidate onSubmit={this.onSubmit}>
              <Container>
                <Row>
                  <Col md="10" className="m-auto">
                    <p className="lead text-center">Stwórz swoje konto</p>
                    <TextField
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      errors={errors.email}
                      className={`form-control ${
                        errors.email ? "is-invalid" : null
                      }`}
                    />
                    <TextField
                      placeholder="Imię"
                      name="name"
                      type="text"
                      value={this.state.name}
                      onChange={this.onChange}
                      errors={errors.name}
                      className={`form-control ${
                        errors.name ? "is-invalid" : null
                      }`}
                    />
                    <TextField
                      placeholder="Hasło"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      errors={errors.password}
                      className={`form-control ${
                        errors.password ? "is-invalid" : null
                      }`}
                    />
                    <TextField
                      placeholder="Potwierdź hasło"
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      errors={errors.password2}
                      className={`form-control ${
                        errors.password2 ? "is-invalid" : null
                      }`}
                    />
                  </Col>
                </Row>
                <ModalFooter>
                  <Button type="submit" className="btn btn-info">
                    Prześlij
                  </Button>
                  <Link to={"/"} className="btn btn-secondary">
                    Anuluj
                  </Link>
                </ModalFooter>
              </Container>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
