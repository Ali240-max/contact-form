import Button from "./Button";
import FormHeader from "./FormHeader";
import Input from "./Input";
import TextArea from "./TextArea";

function Form() {
  return (
    <div>
      <div className="flex flex-col mb-5 max-sm:items-center max-sm:justify-center ">
        <FormHeader />
      </div>
      <div className="flex flex-col gap-5 mb-5 max-sm:items-center max-sm:justify-center ">
        <div className="flex gap-5 max-sm:flex-col">
          <Input>First Name</Input>
          <Input>Last Name</Input>
        </div>
        <div className="flex gap-5 max-sm:flex-col">
          <Input>Email</Input>
          <Input>Subject</Input>
        </div>
      </div>
      <div className="max-sm:flex items-center justify-center">
        <TextArea />
      </div>
      <div className="flex max-sm:items-center max-sm:justify-center">
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default Form;
