import { useLoaderData } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import Sponsored from "../../../../Home/Sponsored/Sponsored";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './PostInfo.css';

const PostInfo = () => {
    const data = useLoaderData();

    // Destructure the first object from the array if data is an array and has at least one element
    const post = Array.isArray(data) && data.length > 0 ? data[0] : {};
    const { image, email, number, title, bodyText } = post;

    // Handle the case where post is empty
    if (!post || Object.keys(post).length === 0) {
        return <div>Loading...</div>;
    }

    console.log('Email:', email);
    console.log('Number:', number);

    const handleEmailClick = () => {
        if (email) {
            window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`, '_blank');
        } else {
            alert('Email is not available');
        }
    };

    const handleCallClick = () => {
        if (number) {
            if (isMobile) {
                window.location.href = `tel:${number}`;
            } else {
                alert('Calling is only available on mobile devices');
            }
        } else {
            alert('Number is not available');
        }
    };

    return (
        <div className="md:border border-sky-500 border-dashed  md:py-10 md:px-10 md:my-5 w-full">
            <section className="md:border border-sky-500 border-dashed sm:py-0 sm:px-0 sm:my-0 mb:py-10 mb:px-10 mb:my-5 w-full">
                <div className="container lg:px-5 lg:py-24 mx-auto">
                    <div className="w-full mx-auto flex flex-wrap">
                    <h1 className="text-gray-900 text-3xl block mt-5 mb-16 lg:hidden title-font font-medium ">{title}</h1>

                        <Carousel className="lg:w-1/2 mb-40 lg:mb-0  w-full lg:h-auto h-64 object-cover sm:pb-10 lg:pb-0 object-center rounded">
                            <div >
                                <img src={image} />
                            </div>
                            <div>
                                <img src={image} />
                            </div>
                            <div>
                                <img src={image} />
                            </div>
                            <div>
                                <img src={image} />
                            </div>
                        </Carousel>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">

                            <h1 className="text-gray-900 mt-5 mb-16 lg:block hidden text-3xl title-font font-medium ">{title}</h1>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">email</span>
                                <span className="ml-auto text-gray-900">{email}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">number</span>
                                <span className="ml-auto text-gray-900">{number}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Quantity</span>
                                <span className="ml-auto text-gray-900">4</span>
                            </div>
                            <div className="flex">
                                <button onClick={handleEmailClick} className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Email Now</button>

                                <button onClick={handleCallClick} className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Call Now</button>
                            </div> <br /><br />
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                            </div>
                            <p className="leading-relaxed mb-4">{bodyText}</p>

                        </div>

                    </div>
                </div>
            </section>
            <Sponsored />
        </div>
    );
};

export default PostInfo;
