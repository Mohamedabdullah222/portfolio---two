import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Contact = () => {
  const [state, handleSubmit] = useForm("mnnbeaay");

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

      {state.succeeded ? (
        <p className="text-green-600 text-center font-Ovo text-xl">✅ Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <input type="hidden" name="subject" value="Eliana Jade - New form Submission" />

          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" required name="message"></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting} className="py-2 px-8 w-max flex items-center justify-between  bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover">
            {state.submitting ? "Sending..." : "Submit now"}
                          <IoIosArrowRoundForward className='text-2xl ' />

          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
