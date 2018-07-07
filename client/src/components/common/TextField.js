import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

const TextField = ({
  placeholder,
  value,
  type,
  onChange,
  name,
  className,
  errors
}) => {
  return (
    <div>
      <FormGroup>
        <Label for={name}>{placeholder}</Label>
        <Input
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className={className}
        />
        {errors && <FormFeedback>{errors}</FormFeedback>}
      </FormGroup>
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextField;
