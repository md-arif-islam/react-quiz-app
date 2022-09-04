import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  return (
    <Form style={{ height: "500px" }}>
      <TextInput type="text" placeholder="Enter name" icon="person" required />

      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
      />

      <TextInput type="password" placeholder="Enter password" icon="lock" />

      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
      />

      <Checkbox text="I agree to the Terms &amp; Conditions" required />

      <Button type="submit">
        <span>Submit Now</span>
      </Button>

      <div className="info">
        Already have an account? <a href="/login">Login</a> instead.
      </div>
    </Form>
  );
}
