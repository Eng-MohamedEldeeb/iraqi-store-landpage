import { BookForm, Header } from "./Components";

const BookNow = () => {
  return (
    <section className="min-h-screen bg-neutral-900 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header />
        {/* Form Card */}
        <BookForm />
      </div>
    </section>
  );
};

export default BookNow;
