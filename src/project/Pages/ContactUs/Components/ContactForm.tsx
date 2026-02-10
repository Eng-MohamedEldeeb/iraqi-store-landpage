const ContactForm = () => {
  return (
    <form
      className="
            bg-neutral-900
            border border-neutral-800
            rounded-2xl
            p-8 space-y-6
          "
    >
      <div>
        <label className="text-neutral-400 block text-sm mb-2">Full Name</label>
        <input
          placeholder="Your Full Name"
          type="text"
          className="text-white w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
        />
      </div>

      <div>
        <label className="text-neutral-400 block text-sm mb-2">Email</label>
        <input
          placeholder="example@any.com"
          type="email"
          className="text-white w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
        />
      </div>

      <div>
        <label className="text-neutral-400 block text-sm mb-2">Phone</label>
        <input
          placeholder="+20 123 456 7890"
          type="text"
          className="text-white w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
        />
      </div>

      <div>
        <label className="text-neutral-400 block text-sm mb-2">Message</label>
        <textarea
          placeholder="( Optional )"
          rows={4}
          className="text-white w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 resize-none"
        />
      </div>

      <button
        type="submit"
        className="
                w-full bg-amber-500 text-white
                py-3 rounded-lg font-medium
                hover:bg-amber-400 transition
              "
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
