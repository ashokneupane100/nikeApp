import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SuperQuality,
  SpecialOffer,
  Subscribe,
} from "./sections";

const App = () => (
  <main className="relative">
    {/* <Nav /> */}
    <section className="xl:padding-1 wide:padding-r padding:b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="bg-pale-blue">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-d pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
