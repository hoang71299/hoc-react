
const Footer = () => {
    return (
        <footer className="bg-gray-200 p-4 text-center">
            <div className="space-x-4">
                <a href="/about" className="text-blue-500 hover:underline">About Us</a>
                <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
                <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>
            </div>
            <div className="mt-2 text-gray-600">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;