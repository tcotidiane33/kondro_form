import Background from '../assets/images/section.png';

const Contact = () => {
    return (
        <section className="contact-section bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start">
                <div className="contact-info w-full md:w-1/2 pr-8">
                    <h3 className="text-3xl font-extrabold">Have a question? We're here to help!</h3>
                    <p className="mt-4 text-lg">
                        Whether you'd like more information on our training materials or are interested in a free demo, please contact us at any time.
                    </p>
                    <p className="mt-4">
                        <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM <br />
                        Phone: +1 555-555-5555 <br />
                        Email: info@example.com <br />
                        Support: support@example.com
                    </p>
                </div>
                <div className="contact-form w-full md:w-1/2 mt-8 md:mt-0">
                    <form action="#" method="post" className="p-8 rounded-lg shadow-md text-white-500 bg-gradient-to-l from-gray-700 to-white-700 backdrop-filter backdrop-blur-lg" style={{
                        flex: 1,
                        backgroundColor: "transparent",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <label htmlFor="first-name" className="block text-sm font-medium text-white">First Name</label>
                        <input type="text" id="first-name" name="first-name" placeholder="John" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50" />

                        <label htmlFor="last-name" className="block text-sm font-medium text-white mt-4">Last Name</label>
                        <input type="text" id="last-name" name="last-name" placeholder="Snow" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50" />

                        <label htmlFor="email" className="block text-sm font-medium text-white mt-4">Email</label>
                        <input type="email" id="email" name="email" placeholder="johnsnow@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50" />

                        <label htmlFor="phone" className="block text-sm font-medium text-white mt-4">Phone Number</label>
                        <input type="text" id="phone" name="phone" placeholder="000 000 0000" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50" />

                        <label htmlFor="company" className="block text-sm font-medium text-white mt-4">Company</label>
                        <input type="text" id="company" name="company" placeholder="Your company" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50" />

                        <label htmlFor="inquiry" className="block text-sm font-medium text-white mt-4">Type of Inquiry</label>
                        <input type="text" id="Type_of_inquiry" name="Type_of_inquiry" placeholder="Your type" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50" />

                        <label htmlFor="message" className="block text-sm font-medium text-white mt-4">Message</label>
                        <textarea id="message" name="message" rows={4} placeholder="Your message" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white/50"></textarea>

                        <button type="submit" className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
