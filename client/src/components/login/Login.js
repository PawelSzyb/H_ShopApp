import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      email: "",
      password: "",
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader>Zaloguj się</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <Container>
                <Row>
                  <Col md="10" className="m-auto">
                    <p className="lead text-center">Wpisz email i hasło</p>
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
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      errors={errors.password}
                      className={`form-control ${
                        errors.password ? "is-invalid" : null
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

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
