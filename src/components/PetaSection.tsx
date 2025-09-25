export default function PetaSection() {
    return (
        <section className="py-16 bg-rt-lightest" id="lokasi">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-rt-dark">
              Peta Lokasi
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Tailwind v4: gunakan aspect-[16/9] atau aspect-video */}
              <div className="relative w-full aspect-[16/9] bg-gray-200 rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1994.486300234818!2d116.879316002796!3d-1.179728333461346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1757412383635!5m2!1sen!2sid"
                  className="absolute inset-0 w-full h-full rounded"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
)
}