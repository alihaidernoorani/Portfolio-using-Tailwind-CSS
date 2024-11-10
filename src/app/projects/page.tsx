import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
               <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                My Projects
                </h1>   
                </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                <Image width={300} height={300} alt="project"
                    className="object-cover object-center h-full w-full"
                    src="/images/governor-sindh.jpg"
                />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Governor Sindh
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Created a clone of Governor Sindh Website
                </p>
                <Link rel="stylesheet" href="https://github.com/alihaidernoorani/Governor-Sindh-Website" />
            </div>
            </div>
        </div>
    </section>
    )
}