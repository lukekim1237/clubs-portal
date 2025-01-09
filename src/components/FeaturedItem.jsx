import React from 'react'

function FeaturedItem() {
    return (
        <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-10">
            {/* TITLE */}
            <h1 className="text-4xl">Your Picnic</h1>
            <hr className="mb-6 mt-4 w-1/3" />

            {/* BOX */}
            <div className="bg-white rounded-3xl relative mx-auto flex h-fit w-fit flex-col p-1">
                {/* Inner White Box with Shadow */}
                <div className="p-8"> {/* This Div is an extra layer that will be used for a cool effect later */}
                    <div className="flex items-center">
                        {/* Location Image with Hover Effect */}
                        <img
                            className="w-1/2 pr-8 object-cover "
                            src="/images/Texarkana.jpg"
                            alt="Lake Texarkana"
                        />

                        {/* TEXT */}
                        <div className="w-1/2 space-y-6">
                            {/* Location Title */}
                            <h1>Lake Texarkana</h1>
                            {/* RSVP Details */}
                            <p>4 Going | 3 Unsure</p>
                            {/* Picnic Description */}
                            <p>
                                Time for a day of relaxation on the lake. Bring
                                a floatie and a swimsuit!
                            </p>
                            <p className="pt-4">going</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedItem