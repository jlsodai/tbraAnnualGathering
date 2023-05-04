/* eslint-disable @next/next/no-img-element */
import Modal from '@/app/components/Modal'
import PaperForm from '@/app/components/PaperForm'

const AboutSection = () => {
  return (
    <section id="overview" className="bg-mustard-50 min-h-screen flex">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-20 items-center -md:my-16">
        <div className="md:pr-16">
          <h3 className="font-libreb text-4xl">About the annual gathering</h3>
          <p className="mt-8">Quas laborum aliquam veritatis, molestiae illum repellendus natus dolores excepturi incidunt ex rem qui. Dolores, rerum et iusto nobis voluptatem totam modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum aliquam veritatis, molestiae illum repellendus natus dolores excepturi incidunt ex rem qui. Dolores, rerum et iusto nobis voluptatem totam modi?</p>
          <Modal btnText="Buy Ticket">
						<PaperForm formSlug="standardadvertisement" />
					</Modal>
        </div>
        <img src="/images/egyptPyramids.svg" alt="Egypt Pyramid" className="-sm:order-first" />
      </div>
    </section>
  )
}

export default AboutSection
