import { Form, Field, Formik } from "formik";
import { advancedSchema } from "../schema";
import CustomCheckbox from "./CustomCheckbox";
import Custominput from "./Custominput";
import CustomSelect from "./CustomSelect";

const onSubmit = async (values, actions) => {
  await new Promise((res) => setTimeout(res, 1000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <Custominput
            label="username"
            name="username"
            type="text"
            placeholder="enter username"
          />

          <CustomSelect
            label="job Type"
            name="jobType"
            placeholder="select your job"
          >
            <option value="">please select a job type</option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="manager">Manager</option>
            <option value="others">Others</option>
          </CustomSelect>

          <CustomCheckbox type="checkbox" name="acceptedTos" />
          {/* <Field type="text" name="name" placeholder="Name" /> */}
          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          <button type="submit" disabled={props.isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
