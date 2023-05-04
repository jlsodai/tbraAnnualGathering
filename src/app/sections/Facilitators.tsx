/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Facilitators = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container items-center py-16">
        <h3 className="font-libreb text-4xl text-center">Workshop facilitators</h3>
        <div className="flex gap-8 md:gap-20 mt-16 justify-center">
          {[...Array(2)].map((e,i) => (
            <div className="text-center" key={i}>
              <img src="https://via.placeholder.com/300" className="mx-auto" alt="" />
              <div className="mt-4">
                <h3 className="text-2xl font-libreb">Facilitator Name</h3>
                <p className="text-xs">Facilitator title, company or organisation name</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilitators
