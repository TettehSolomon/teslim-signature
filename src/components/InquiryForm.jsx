/**
 * A single labelled field. Uses `flex-col-reverse` so the input precedes the
 * label in the DOM, letting `peer-focus:` recolour the label on focus — a
 * declarative replacement for the original JS focus/blur listeners.
 */
function Field({ label, children }) {
  return (
    <div className="flex flex-col-reverse gap-2">
      {children}
      <label className="font-label-caps text-label-caps text-outline peer-focus:text-primary px-2 transition-colors">
        {label}
      </label>
    </div>
  )
}

const fieldClasses =
  'peer w-full bg-surface/50 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-2 py-3 transition-colors'

export default function InquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Wire up to a real endpoint / handler as needed.
  }

  return (
    <div className="glass-card p-10 rounded-3xl shadow-lg border border-white">
      <h3 className="font-headline-lg text-headline-lg text-primary mb-8 text-center lg:text-left">
        Inquiry Form
      </h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Full Name">
            <input className={fieldClasses} placeholder="Your Name" type="text" />
          </Field>
          <Field label="Email Address">
            <input className={fieldClasses} placeholder="email@example.com" type="email" />
          </Field>
        </div>
        <Field label="Message">
          <textarea
            className={fieldClasses}
            placeholder="How can we assist your wellness journey?"
            rows="4"
          />
        </Field>
        <button
          type="submit"
          className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md active:scale-95"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  )
}
