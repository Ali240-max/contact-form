function ContactInfo() {
  return (
    <div className=" flex flex-col max-hate:items-center max-hate:justify-center  max-lg:mr-47 max-md:mr-50 max-sm:mr-0  ">
      <h1 className="text-primary text-3xl font-bold mb-10 max-sm:text-center">
        Contact <br /> Information
      </h1>

      <span className="text-secondary text-lg mb-5">
        77 Baker Street <br /> Bondowoso. 87655 <br /> Indonesia
      </span>
      <span className="text-secondary text-lg mb-5 block">
        Call Us: +62 81 334 61 OO
      </span>
      <span className="text-secondary text-lg max-sm:text-center ">
        We are open from Monday - Friday <br /> 08.00 am - 05.00 pm
      </span>

      <h1 className="text-primary text-3xl  mt-13 mb-3 font-bold">Follow Us</h1>
      <div className="flex gap-5">
        <span className="text-secondary font-bold text-lg ">facebook</span>
        <span className="text-secondary font-bold text-lg ">instagram</span>
        <span className="text-secondary font-bold text-lg ">vimeo</span>
      </div>
    </div>
  );
}

export default ContactInfo;
