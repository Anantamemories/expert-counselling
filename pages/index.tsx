export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
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

      {/* Hero Section - Mobile-First */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-snug">
          Get Into Top Engineering Colleges with Expert Help
        </h2>
        <p className="max-w-md mx-auto text-sm sm:text-base md:text-lg mb-6 text-gray-300">
          Enroll in our JEE Mains 2025 Expert Counselling Program to access an on-demand course,
          personalized guidance, and choice filling support for IITs, NITs, IIITs, and top state colleges.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="/JEEMAIN.jpg"
          
            className="w-full max-w-sm rounded-lg shadow-xl object-cover"
          />
        </div>

        <a
          href="https://tagmango.app/b6973e66fb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg transition shadow-md"
        >
          ENROLL NOW FOR EXPERT COUNSELLING 🚀
        </a>
      </section>

      {/* Why Join */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Why Join?</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            'We cover almost all the reputed national & state level counselling',
            'One-to-One Counselling Sessions',
            'We suggest the best possible colleges tailored to their preferences and potential.',
            'Support for JoSAA, CSAB, JAC, UPTAC & More',
            'Comprehensive Possibilities Report',
            'Money-Back Guarantee If No Admission',
            '24/7 Support Until Allotment'
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow p-6 hover:shadow-md transition"
            >
              <p className="font-medium text-lg text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 text-gray-800 py-16 px-6">
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
              },
              {
                name: 'Shreya Sharma',
                college: 'IIT Delhi - Electrical',
                quote:
                  'The best decision I made during the counselling season! Got into my dream branch because of the step-by-step support.'
              },
              {
                name: 'Rajveer Singh',
                college: 'NIT Calicut - ECE',
                quote:
                  'The mentor team was super responsive and always available to help. Truly grateful for their personal guidance!'
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

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Expert Counselling by Career Mentors. All rights reserved.</p>
      </footer>
    </div>
  );
}
