export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Expert Counselling 2025</h1>
          <a
            href="https://tagmango.app/b6973e66fb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Enroll Now
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-100 to-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Get Into Top Engineering Colleges with Expert Help</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Enroll in our JEE Mains 2025 Expert Counselling Program to access an on-demand course,
          personalized guidance, and choice filling support to get admission in NITs, IIITs, and top state colleges.
        </p>
        <a
          href="https://tagmango.app/b6973e66fb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          ENROLL INSIDE EXPERT COUNSELLING PROGRAM NOW!

        </a>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Why Join?</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            '8-Hour On-Demand Video Course',
            'Counselling Support for All Major Platforms',
            'Track Record Since 2017',
            'Support for JoSAA, CSAB, JAC, UPTAC & More',
            'Limited Time Discounted Price',
            'Money-Back Guarantee If No Admission'
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl shadow p-6 hover:shadow-md transition"
            >
              <p className="font-medium text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Success Stories</h3>
          <div className="space-y-8">
            {[
              {
                name: 'Jansi Bhati',
                college: 'IIT Bombay - Civil Engineering',
                quote:
                  'Thanks to Career Margdarshan, I got into IIT Bombay. Their team helped me choose the best options based on my rank.'
              },
              {
                name: 'Manan',
                college: 'NIT Trichy - Civil Engineering',
                quote:
                  'Their expert counselling helped me during the JoSAA process and made choice filling stress-free.'
              },
              {
                name: 'Shaswat Singh',
                college: 'IIIT Nagpur - CSE',
                quote:
                  'The entire counselling process was made simple with their guidance and personal attention.'
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow">
                <p className="italic mb-2">"{story.quote}"</p>
                <p className="font-semibold">— {story.name}, {story.college}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Expert Counselling by Career Mentors. All rights reserved.</p>
      </footer>
    </div>
  );
}
