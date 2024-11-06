// app/contact/page.js
import Chat from '../components/Chat';

export default function ContactPage() {
    return (
        <div className="py-24 md:py-0 bg-white px-8 md:px-32 2xl:px-64">
            <Chat />
        </div>
    );
}