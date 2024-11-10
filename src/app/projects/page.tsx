import React from "react";
import Image from "next/image";

export default function Projects() {
    return (
        <section className="text-gray-600 body-font h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center mt-12">
                    <h1 className="title-font sm:text-4xl text-3xl mt-12 mb-4 font-medium text-gray-900">
                        My Projects
                    </h1>
                </div>
                <div className="flex justify-center">
                    <div className=" max-w-sm w-full">
                        <div className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105 bg-white">
                            <Image
                                width={300}
                                height={300}
                                alt="Governor Sindh"
                                className="object-cover object-center w-full"
                                src="/images/governor-sindh.jpg"
                            />
                            <div className="p-6 text-center">
                                <h2 className="text-[25px] font-semibold text-gray-800">
                                    Governor Sindh
                                </h2>
                                <p className="text-gray-600 text-[20px] leading-relaxed mt-2 mb-4">
                                    Created a clone of Governor Sindh Website
                                </p>
                                <a
                                    href="https://github.com/alihaidernoorani/Governor-Sindh-Website"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 border border-blue-500 text-blue-500 font-medium rounded-lg transition duration-200 hover:bg-blue-500 hover:text-white"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
