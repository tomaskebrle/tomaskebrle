import Wrapper from "./Wrapper";
import { Link } from "./PortfolioComponents";

export default function Contact() {
  return (
    <Wrapper title="Contact" background="connections">
      <div className="flex gap-3">
        <span className="w-1/2">
          <p>
            Like what I do? Do you need a web-site or app? Turn your idea into a
            reality? <br /> Then feel free to reach out!
            <div className="flex-col flex gap-3">
              <Link type="github" link="https://github.com/tomaskebrle">
                github.com/tomaskebrle
              </Link>
              <Link type="site" link="https://tomaskebrle.cz">
                tomaskebrle.cz
              </Link>
              <Link type="mail" link="mailto:contact@tomaskebrle.cz">
                contact@tomaskebrle.cz
              </Link>
            </div>
          </p>
        </span>
        <span className="w-1/2 xl:flex flex-col hidden gap-3">
          <form name="contact" netlify>
            <input
              type="email"
              className="p-2 bg-tertiary w-full mb-3 focus:outline-primary focus:outline-none"
              placeholder="E-mail"
            />
            <textarea
              name="messagee"
              cols={30}
              rows={10}
              className="bg-tertiary p-2 w-full mb-3 focus:outline-primary focus:outline-none"
              placeholder="Your message"
            ></textarea>
            <button className="bg-primary hover:tertiary p-2" type="submit">
              Submit
            </button>
          </form>
        </span>
      </div>
    </Wrapper>
  );
}
